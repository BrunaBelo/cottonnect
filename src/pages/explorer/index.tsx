import react, { useEffect, useState } from 'react';
import LeftNavBar from '../../components/left-nav-bar';
import AuctionCard from '../../components/auction-card';
import { AuctionList, Filters, Container, Main, NoAuctions, SearchButton, SearchDiv, SearchIcon, SelectField, SelectInput, TitleInput } from './styles';
import { getAllAuctions } from "../../service/auction";
import { Auction } from '../../interfaces/auction';
import selectCategory from '../../interfaces/select-category';
import { getCategories } from '../../service/donation-categories';
import { MenuItem } from '@mui/material';
import Loading from '../../components/loading';

export default function Explorer() {
  const [auctions, setAuctions] = useState([] as Auction[]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryValue, setCategoryValue] = useState("0");
  const [categoryList, setCategoryList] = useState([] as selectCategory[])

  useEffect(() => {
    getAll("0");
    getCategoriesFromApi();

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  const getCategoriesFromApi = async() => {
    const categories = await getCategories();
    const formatCategories = categories.map((category: any): selectCategory => (
      { "value": category.id, "label": category.name }
    ));
    setCategoryList(formatCategories);
  }

  const getAll = async(categoryValue: string) => {
    setLoading(true);

    const categoryId = categoryValue == "0" ? "" : categoryValue;
    const cityId = localStorage.getItem("user-city") as string;
    const allAuctions = await getAllAuctions(cityId, categoryId, title);

    setAuctions(allAuctions);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });

    setLoading(false);
  }

  const filterCategory = async(categoryId: string) => {
    setCategoryValue(categoryId);
    await getAll(categoryId);
  }

  const filterTitle = async() => {
    await getAll(categoryValue);
  }

  return (
    <Container>
      <LeftNavBar />
      <Main>
          <Filters>
            <SelectInput
              name="categories"
              value={categoryValue}
              onChange={(e) => {filterCategory(e.target.value)}}
              select
              variant="outlined"
            >
              <MenuItem value={"0"}>Todas</MenuItem>
              {
                categoryList.map(item => {
                  return <MenuItem value={item.value}>{item.label}</MenuItem>
                })
              }
            </SelectInput>
            <SearchDiv>
              <TitleInput
                name="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" ? filterTitle() : false}
                type="search"
                id="outlined-search"
                variant="outlined"
              />
              <SearchButton onClick={() => { filterTitle()}}>
                <SearchIcon/>
              </SearchButton>
            </SearchDiv>
          </Filters>
        {
          loading ?
           <Loading></Loading>
            :
            auctions.length > 0 ?
              <AuctionList>
                {
                  auctions.map(auction => {
                    return(
                      <AuctionCard
                        auction={auction}
                      />
                    )
                  })
                }
              </AuctionList>
            :
              <NoAuctions>
                <span>Nenhum leilão foi encontrado na sua cidade. Tente novamente mais tarde 😉</span>
              </NoAuctions>
          }
      </Main>
    </Container>
  )
}

