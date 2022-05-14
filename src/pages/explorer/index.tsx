import react, { useEffect, useState } from 'react';
import LeftNavBar from '../../components/left-nav-bar';
import AuctionCard from '../../components/auction-card';
import selectCategory from '../../interfaces/select-category';
import Loading from '../../components/loading';
import { AuctionList, Filters, Container, Main, NoAuctions, SearchButton, SearchDiv, SearchIcon, SelectField, SelectInput, TitleInput, AuctionPagination } from './styles';
import { getAllAuctions } from "../../service/auction";
import { Auction } from '../../interfaces/auction';
import { getCategories } from '../../service/donation-categories';
import { MenuItem } from '@mui/material';

export default function Explorer() {
  const [auctions, setAuctions] = useState([] as Auction[]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryValue, setCategoryValue] = useState("0");
  const [categoryList, setCategoryList] = useState([] as selectCategory[]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(12);

  useEffect(() => {
    getAll("0", page);
    getCategoriesFromApi();

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleChange = async(event: any, value: number) => {
    setPage(value);
    await getAll(categoryValue, value);
  };

  const getCategoriesFromApi = async() => {
    const categories = await getCategories();
    const formatCategories = categories.map((category: any): selectCategory => (
      { "value": category.id, "label": category.name }
    ));
    setCategoryList(formatCategories);
  }

  const getAll = async(categoryValue: string, page: number) => {
    setLoading(true);

    const categoryId = categoryValue == "0" ? "" : categoryValue;
    const cityId = localStorage.getItem("user-city") as string;
    const response = await getAllAuctions(cityId, categoryId, title, page, perPage);
    const allAuctions = response.data.auctions;
    const countTotalAuctions = response.data.total;

    setAuctions(allAuctions);
    setCount(Math.ceil(countTotalAuctions / perPage));
    setLoading(false);
  }

  const filterCategory = async(categoryId: string) => {
    setCategoryValue(categoryId);
    await getAll(categoryId, page);
  }

  const filterTitle = async() => {
    await getAll(categoryValue, page);
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
              <>
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
                <AuctionPagination count={count} page={page} onChange={handleChange} color="primary" size="large"/>
              </>
            :
              <NoAuctions>
                <span>Nenhum leilão foi encontrado na sua cidade. Tente novamente mais tarde 😉</span>
              </NoAuctions>
          }
      </Main>
    </Container>
  )
}

