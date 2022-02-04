import React, { useState, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { ReactComponent as Logo } from "./YouTube-Logo.wine.svg";
import AppsIcon from "@mui/icons-material/Apps";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { getMoviesBySearch } from "./api";
import MovieContext from "./MovieContext";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: "white",
  },
});

function Header() {
  const [query, setquery] = useState("");
  const [movieList, setMovieList] = useContext(MovieContext);
  const handleChange = (e) => {
    e.preventDefault();
    getMoviesBySearch(query).then((data) => {
      setMovieList([]);
      for (let movie in data) {
        setMovieList((prev) => [...prev, data[movie]]);
      }
      console.log(movieList);
    });
  };
  const classes = useStyles();

  return (
    <div className="header">
      {/* <div className="header__left">
                <MenuIcon/>
                <Logo className="header__logo" />
            </div> */}
      <form className="header__middle" onSubmit={handleChange}>
        <input
          type="text"
          value={query}
          placeholder="Enter movie name"
          onChange={(e) => {
            setquery(e.target.value);
          }}
          className="header__input"
        />
        {/* <TextField
          // sx={{ input: { color: "white", outlineColor: "white" } }}
          variant="outlined"
          value={query}
          label="Enter movie name"
          onChange={(e) => {
            setquery(e.target.value);
          }}
          className="header__input"
        /> */}
        {/* comment */}
        <button onClick={handleChange} className="header__search">
          <SearchIcon className="header__search_icon" />
        </button>
      </form>
      {/* <div className="header__right">
                <VideoCallIcon className="header_icons"/>
                <AppsIcon className="header_icons"/>
                <MoreVertIcon className="header_icons"/>
                <AccountCircleIcon className="header_icons"/>
            </div> */}
    </div>
  );
}

export default Header;
