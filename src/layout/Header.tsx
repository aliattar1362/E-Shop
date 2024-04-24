//Internal Features
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logoutUser, saveUserData } from "../reduxToolkit/slices/userSlice";
import { AppState } from "../reduxToolkit/store";
// Styles
import { AppBar, Badge, Box, Button, Drawer, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: "products", path: "/products" },
  { title: "categories", path: "/categories" },
];

const navStyles = {
  textDecoration: "none",
  typography: "h6",
  "&:hover": { color: "darkGrey" },
  "&.active": { color: "text.secondary" },
  color: "white", 
  textTransform: "uppercase"
};

const Header = ({ darkMode, handleThemeChange }: Props) => {
  const dispatch = useDispatch();
      const handleLogout = () => {
        dispatch(logoutUser());
    };

  const userData = useSelector((state: AppState) => state.users.user);
  
  const totalQuantity = useSelector((state: AppState) => state.cart.totalQuantity);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
 

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };


  const mediumScreenNavLinks = (
    <>
     <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="large" sx={{ color: "inherit" }} onClick={toggleDrawer(true)}>
          <MenuIcon/>
        </IconButton>
      </Box>
    
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: "100px",color: "red"}}
      >
        <List>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
          {userData?.role === "admin" && (
            <ListItem
              component={NavLink}
              to="admin"
              key="admin"
              sx={navStyles}
            >
              {"admin".toUpperCase()}
            </ListItem>
          )}
          {(userData?.role === "customer" || userData?.role === "admin") && (
            <ListItem
              component={NavLink}
              to="profile"
              key="profile"
              sx={navStyles}
            >
              {"profile".toUpperCase()}
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );

  const largeScreenNavLinks = (
    <Box>
      <List sx={{ display: "flex" }}>
        {midLinks.map(({ title, path }) => (
          <ListItem
            component={NavLink}
            to={path}
            key={path}
            sx={navStyles}
          >
            {title.toUpperCase()}
          </ListItem>
        ))}
        {userData?.role === "admin" && (
          <ListItem
            component={NavLink}
            to="admin"
            key="admin"
            sx={navStyles}
          >
            {"admin".toUpperCase()}
          </ListItem>
        )}
        {(userData?.role === "customer" || userData?.role === "admin") && (
          <ListItem
            component={NavLink}
            to="profile"
            key="profile"
            sx={navStyles}
          >
            {"profile".toUpperCase()}
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ mb: 4, width: "100%" }} id="header">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {isMediumScreen ? mediumScreenNavLinks : largeScreenNavLinks}


          <Box display="flex" alignItems="center" sx={{paddingLeft: "30px"}}>
            <IconButton size="large" sx={{ color: "inherit" }} component={Link} to={"/cart"}>
              <Badge badgeContent={totalQuantity} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <List sx={{ display: "flex" }}>
              {userData ? (
                <h4>Hello, {userData.name}</h4>
              ) : (
                <ListItem
                  component={NavLink}
                  to="login"
                  key="login"
                  sx={navStyles}
                >
                  {"login".toUpperCase()}
                </ListItem>
              )}

              {userData ? (
                <Button variant="text" onClick={handleLogout} sx={{ color: "white", marginLeft: "10px" }}>
                  LOGOUT
                </Button>
              ) : (
                <ListItem
                  component={NavLink}
                  to="register"
                  key="register"
                  sx={navStyles}
                >
                  {"register".toUpperCase()}
                </ListItem>
              )}
            </List>
          </Box>

          <Box display="flex" alignItems="center" sx={{paddingLeft: "30px"}}>
            <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
              <div style={{color:"white"}}>Home</div>
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Box>
        </Toolbar> 
      </AppBar>
    </>
  );
};

export default Header;

