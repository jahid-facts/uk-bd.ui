import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Input,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import assets from "../../assets";
import "./input.css";
import { Icon } from "@iconify/react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const SearchBar = (props) => {
  const { handleListItemClick } = props;
  const [searchText, setSearchText] = useState("");
  const [placeList, setPlaceList] = useState([]); // Initialize as an empty array

  useEffect(() => {
    if (searchText) {
      const params = {
        q: searchText,
        format: "json",
        addressdetails: 1,
        polygon_geojson: 0,
      };
      const queryString = new URLSearchParams(params).toString();
      const requestOption = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOption)
        .then((response) => response.json())
        .then((result) => {
          setPlaceList(result);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setPlaceList([]); // Handle the error by clearing the list
        });
    } else {
      setPlaceList([]);
    }
  }, [searchText]);

  return (
    <>
      <Box>
        <div className="searchbar">
          <input
            type="text"
            className="searchbar__input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search locations"
          />
          <button type="submit" className="searchbar__button">
            <Icon icon={"mdi:search"} />
          </button>
        </div>
      </Box>
      <Box
        sx={{
          mt: 2,
          p: "0px",
          background: "rgb(57 57 57 / 90%);",
        }}
      >
        <List>
          {Array.isArray(placeList) ? (
            placeList.map((data) => (
              <div key={data?.place_id}>
                <ListItemButton
                  onClick={() => {
                    handleListItemClick(data);
                    setPlaceList([]);
                  }}
                >
                  <ListItemIcon>
                    <img
                      style={{ width: "15px" }}
                      src={assets.images.location}
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={data?.display_name}
                    sx={{ color: "#d6d6d6" }}
                  />
                </ListItemButton>
                <Divider sx={{ backgroundColor: "#808080" }} />
              </div>
            ))
          ) : (
            <ListItemButton>
              <ListItemText primary="No results found" sx={{ color: "#d6d6d6" }} />
            </ListItemButton>
          )}
        </List>
      </Box>
    </>
  );
};

export default SearchBar;
