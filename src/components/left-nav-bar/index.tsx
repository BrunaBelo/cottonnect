import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';

import { Menu,
         AddRounded,
         FavoriteBorderRounded,
         ExitToAppRounded,
         StarBorderRounded,
         DashboardOutlined,
         AccountCircleOutlined } from '@material-ui/icons';
import { CoinIcon, CoinInformation, Container, TextItem } from './styles';

const drawerWidth = 240;
interface Props {
  window?: () => Window;
}

export default function LeftNavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Container>
      <div>

        <h1>Cottonnect</h1>
        <List>
          <ListItem button component="a" href="/app/explorer">
            <ListItemIcon>
              <DashboardOutlined htmlColor='white' />
            </ListItemIcon>
            <TextItem primary="Explorar" />
          </ListItem>

          <ListItem button component="a" href="/app/novo-leilao">
            <ListItemIcon>
              <AddRounded htmlColor='white' />
            </ListItemIcon>
            <TextItem primary="Doar" />
          </ListItem>

          <ListItem button component="a" href="/app/minhas-doacoes">
            <ListItemIcon>
              <FavoriteBorderRounded htmlColor='white' />
            </ListItemIcon>
            <TextItem primary="Minhas Doações" />
          </ListItem>

          <ListItem button component="a" href="/app/leiloes-ganhos">
            <ListItemIcon>
              <StarBorderRounded htmlColor='white' />
            </ListItemIcon>
            <TextItem primary="Doações Ganhas" />
          </ListItem>

          <ListItem button component="a" href="/app/account">
            <ListItemIcon>
              <AccountCircleOutlined htmlColor='white' />
            </ListItemIcon>
            <TextItem primary="Minha Conta" />
          </ListItem>

          <ListItem button component="a" href="/app/logout">
            <ListItemIcon>
              <ExitToAppRounded htmlColor='white' />
            </ListItemIcon>
            <TextItem primary="Sair" />
          </ListItem>
        </List>
      </div>

      <CoinInformation>
        <span><CoinIcon/>Saldo: 130</span>
      </CoinInformation>
    </Container>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', zIndex: '0' }}>
      <AppBar
        elevation={0}
        color="transparent"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

