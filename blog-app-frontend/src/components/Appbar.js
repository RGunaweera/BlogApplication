import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import React from "react";
import "./Appbar.css";

const pages = ["Home", "Explore", "Places", "Blog", "About"];
const settings = ["Profile", "Dashboard", "Logout"];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="appbar">
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Toolbar
          disableGutters
          sx={{
            maxWidth: "1000px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", 
          }}
        >
          {/* Logo and website name */}
          <img
            src="images/logo.png"
            width={"60px"}
            className="logo"
            alt="logo"
          />

          <Typography
            className="logo-name"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
              fontFamily: "Caveat, cursive",
              fontSize: "24px",
            }}
          >
            voyager
          </Typography>

          {/* Responsive navigation menu for smaller screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: "14px",
                    }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navigation menu for larger screens */}
          <Box
            className="nav-menu"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {pages.map((page) => (
              <Button
                className="nav-link"
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User profile menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="User Avatar" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                padding: "0px", // Removes all padding
                mt: "45px",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: "14px",
                    }}
                    textAlign="center"
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
