import React, { useRef, useState } from "react";
import { Box, Divider, MenuItem, Stack, Typography } from "@mui/material";
import {
  Search,
} from "@mui/icons-material";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";


import Who from "./Who";
import Where from "./Where";
import WhenDate from "./WhenDate";

const SearchFilter = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (value) => {
    setActiveBox(value);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [openPopper, setOpenPopper] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const handleTogglePopper = (boxValue) => {
    setOpenPopper((prev) => ({ ...prev, [boxValue]: !prev[boxValue] }));
  };

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

   // Handle the selected range in your parent component
   const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
    key: 'selection',
  });

  const handleDateSelect = (newRange) => {
    setSelectedRange(newRange);
  };


  /// who
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [petsCount, setPetsCount] = useState(0);



  return (
    <Stack
      id="basic-button2"
      variant="text"
      sx={{
        borderRadius: "25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          borderRadius: 15,
          bgcolor: "otherColor.light",
          color: "text.secondary",
          zIndex: 99999,
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
          cursor: "pointer",
        }}
      >
        <Box
          value="1"
          ref={box1Ref}
          onClick={() => {
            handleBoxClick("1");
            handleTogglePopper("1");
          }}
          sx={{
            width: "fit-content",
            px: "7px",
            py: "7px",
            borderRadius: "50px",
            bgcolor: activeBox === "1" ? "activeColor" : "",
            boxShadow: activeBox === "1" ? "0px 0px 18px 0px #6363633b" : "",
            transition: "background-color 0.3s, box-shadow 0.3s",
            "&:hover": {
              bgcolor: "activeColor",
              boxShadow: "0px 0px 18px 0px #6363633b",
            },
            }
          }
        >
          <Box sx={{ px: "15px" }}>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"14px"}
              fontWeight={"600"}
            >
              Where
            </Typography>
            <input
              type="text"
              placeholder="Search destinations"
              className="customInputControl"
            />

            {/* <Typography sx={{ color: 'primary.main', }} variant='h6' fontSize={'12px'} fontWeight={'400'} >Search destinations</Typography> */}
          </Box>
        </Box>
        <Popper
          open={openPopper[1]}
          anchorEl={box1Ref.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper
                sx={{
                  borderRadius: "25px",
                  boxShadow: "0px 0px 18px 0px #6363633b",
                  marginTop: "15px",
                }}
              >
                <ClickAwayListener
                  onClickAway={() =>
                    setOpenPopper((prev) => ({ ...prev, 1: false }))
                  }
                >
                  <MenuList
                    autoFocusItem={openPopper[1]}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {/* onClick={() => setOpenPopper((prev) => ({ ...prev, 1: false }))} */}
                    <Where />
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          value="2"
          ref={box2Ref}
          onClick={() => {
            handleBoxClick("2");
            handleTogglePopper("2");
          }}
          sx={{
            width: "fit-content",
            px: "7px",
            py: "7px",
            borderRadius: "50px",
            bgcolor: activeBox === "2" ? "activeColor" : "",
            boxShadow: activeBox === "2" ? "0px 0px 18px 0px #6363633b" : "",
            transition: "background-color 0.3s, box-shadow 0.3s",
            "&:hover": {
              bgcolor: "activeColor",
              boxShadow: "0px 0px 18px 0px #6363633b",
            },
          }}
        >
          <Box sx={{ px: "15px" }}>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"14px"}
              fontWeight={"600"}
            >
              Check in
            </Typography>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"12px"}
              fontWeight={"400"}
            >
             {selectedRange.startDate?.toLocaleDateString() == null
                ? 'Add dates'
                : selectedRange.startDate?.toLocaleDateString('en-GB')}
            </Typography>
          </Box>
        </Box>
        <Popper
          open={openPopper[2]}
          role={undefined}
          anchorEl={box2Ref.current}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper
                sx={{
                  borderRadius: "25px",
                  boxShadow: "0px 0px 18px 0px #6363633b",
                  marginTop: "15px",
                  p: "20px",
                }}
              >
                <ClickAwayListener
                  onClickAway={() =>
                    setOpenPopper((prev) => ({ ...prev, 2: false }))
                  }
                >
                  <MenuList
                    autoFocusItem={openPopper[2]}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {/* onClick={() => setOpenPopper((prev) => ({ ...prev, 2: false }))} */}
                    <Box>
                      <WhenDate onSelect={handleDateSelect} />
                    </Box>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          value="2"
          ref={box3Ref}
          onClick={() => {
            handleBoxClick("2");
            handleTogglePopper("2");
          }}
          sx={{
            width: "fit-content",
            px: "7px",
            py: "7px",
            borderRadius: "50px",
            bgcolor: activeBox === "2" ? "activeColor" : "",
            boxShadow: activeBox === "2" ? "0px 0px 18px 0px #6363633b" : "",
            transition: "background-color 0.3s, box-shadow 0.3s",
            "&:hover": {
              bgcolor: "activeColor",
              boxShadow: "0px 0px 18px 0px #6363633b",
            },
          }}
        >
          <Box sx={{ px: "15px" }}>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"14px"}
              fontWeight={"600"}
            >
              Check out
            </Typography>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"12px"}
              fontWeight={"400"}
            >
              {selectedRange.endDate?.toLocaleDateString() == null
                ? 'Add dates'
                : selectedRange.endDate?.toLocaleDateString('en-GB')}
            </Typography>
          </Box>
        </Box>
        <Popper
          open={openPopper[3]}
          anchorEl={box3Ref.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper
                sx={{
                  borderRadius: "50px",
                  boxShadow: "0px 0px 18px 0px #6363633b",
                  marginTop: "15px",
                }}
              >
                <ClickAwayListener
                  onClickAway={() =>
                    setOpenPopper((prev) => ({ ...prev, 3: false }))
                  }
                >
                  <MenuList
                    autoFocusItem={openPopper[3]}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={() =>
                        setOpenPopper((prev) => ({ ...prev, 3: false }))
                      }
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        setOpenPopper((prev) => ({ ...prev, 3: false }))
                      }
                    >
                      My account
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        setOpenPopper((prev) => ({ ...prev, 3: false }))
                      }
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Box
          value="4"
          ref={box4Ref}
          onClick={() => {
            handleBoxClick("4");
            handleTogglePopper("4");
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            px: "7px",
            py: "7px",
            borderRadius: "50px",
            bgcolor: activeBox === "4" ? "activeColor" : "",
            boxShadow: activeBox === "4" ? "0px 0px 18px 0px #6363633b" : "",
            transition: "background-color 0.3s, box-shadow 0.3s",
            "&:hover": {
              bgcolor: "activeColor",
              boxShadow: "0px 0px 18px 0px #6363633b",
            },
          }}
        >
          <Box sx={{ px: "15px" }}>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"14px"}
              fontWeight={"600"}
            >
              Who
            </Typography>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"12px"}
              fontWeight={"400"}
            >
              Add guests
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              px: "15px",
              py: "10px",
              borderRadius: "50px",
              bgcolor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <Search sx={{ marginLeft: "5px" }} />
            <Typography variant="text"> Search </Typography>
          </Box>
        </Box>
        <Popper
          open={openPopper[4]}
          anchorEl={box4Ref.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper
                sx={{
                  borderRadius: "25px",
                  boxShadow: "0px 0px 18px 0px #6363633b",
                  marginTop: "15px",
                  width: "320px",
                }}
              >
                <ClickAwayListener
                  onClickAway={() =>
                    setOpenPopper((prev) => ({ ...prev, 4: false }))
                  }
                >
                  <MenuList
                    autoFocusItem={openPopper[4]}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {/* <MenuItem onClick={() => setOpenPopper((prev) => ({ ...prev, 4: false }))}>Profile</MenuItem> */}
                    <Who
                      adultsCount={adultsCount}
                      setAdultsCount={setAdultsCount}
                      childrenCount={childrenCount}
                      setChildrenCount={setChildrenCount}
                      infantsCount={infantsCount}
                      setInfantsCount={setInfantsCount}
                      petsCount={petsCount}
                      setPetsCount={setPetsCount}
                    />
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </Stack>
  );
};

export default SearchFilter;
