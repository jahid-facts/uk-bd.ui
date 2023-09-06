import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { Close, KeyboardArrowDown, Star } from "@mui/icons-material";
import WhenDate from "../searchFilter/WhenDate";
import Who from "../searchFilter/Who";

const Reserve = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  // Handle the selected range in your parent component
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });

  const handleDateSelect = (newRange) => {
    setSelectedRange(newRange);
  };

  const disabledDates = [
    new Date("2023-08-23"),
    new Date("2023-08-24"),
    new Date("2023-08-25"),
  ];

  // who
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [petsCount, setPetsCount] = useState(0);
  const allCountsTrue =
    adultsCount === 0 &&
    childrenCount === 0 &&
    infantsCount === 0 &&
    petsCount === 0;

  return (
    <div>
      <Box
        p={"20px"}
        m={"10px"}
        boxShadow={"0px 0px 18px 0px #6363633b"}
        borderRadius={"20px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4" fontSize={"18px"}>
            $21 night
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
              <Star fontSize={"13px"} /> 4.80 .
            </Typography>
            <Typography variant="h4" fontSize={"13px"}>
              50 reviews
            </Typography>
          </Box>
        </Box>
        <Box border={"1px solid #06283D"} borderRadius={"10px"} my={"25px"}>
          <div>
            <Grid
              container
              value="1"
              ref={box1Ref}
              onClick={() => {
                // handleBoxClick("1");
                handleTogglePopper("1");
              }}
              sx={{ cursor: "pointer" }}
            >
              <Grid item xs={6} borderRight={"1px solid #06283D"} p={"15px"}>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Check in
                </Typography>
                <Typography variant="h4" fontSize={"14px"} mt={"5px"}>
                  {selectedRange.startDate?.toLocaleDateString() == null
                    ? "Add dates"
                    : selectedRange.startDate?.toLocaleDateString("en-GB")}
                </Typography>
              </Grid>
              <Grid item xs={6} p={"15px"}>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Check out
                </Typography>
                <Typography variant="h4" fontSize={"14px"} mt={"5px"}>
                  {selectedRange.endDate?.toLocaleDateString() == null
                    ? "Add dates"
                    : selectedRange.endDate?.toLocaleDateString("en-GB")}
                </Typography>
              </Grid>
            </Grid>

            <Popper
              open={openPopper[1]}
              anchorEl={box1Ref.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              sx={{ zIndex: 10 }}
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
                      marginLeft: "-10px",
                    }}
                  >
                    <ClickAwayListener
                      onClickAway={() =>
                        setOpenPopper((prev) => ({ ...prev, 1: false }))
                      }
                    >
                      <Box p={"15px"}>
                        <Button
                          onClick={() =>
                            setOpenPopper((prev) => ({ ...prev, 1: false }))
                          }
                          sx={{ textTransform: "capitalize", mb: 1 }}
                        >
                          <Close sx={{ color: "#ff0000", fontSize: "16px" }} />
                        </Button>
                        <WhenDate
                          onSelect={handleDateSelect}
                          disabledDates={disabledDates}
                        />
                      </Box>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>

          <Box
            borderTop={"1px solid #06283D"}
            p={"15px"}
            sx={{ cursor: "pointer" }}
            value="2"
            ref={box2Ref}
            onClick={() => {
              // handleBoxClick("2");
              handleTogglePopper("2");
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Guests
                </Typography>
                <Typography variant="h4" fontSize={"13px"} mt={"5px"}>
                  {adultsCount > 0 && <span> {adultsCount} Adults </span>}
                  {childrenCount > 0 && (
                    <span>, {childrenCount} Children </span>
                  )}
                  {infantsCount > 0 && <span>, {infantsCount} Infants </span>}
                  {petsCount > 0 && <span>, {petsCount} Pets</span>}
                  {allCountsTrue ? <p>Add guests</p> : ""}
                </Typography>
              </Box>
              <IconButton>
                <KeyboardArrowDown />
              </IconButton>
            </Box>
          </Box>
          <Popper
            open={openPopper[2]}
            role={undefined}
            anchorEl={box2Ref.current}
            placement="bottom-start"
            transition
            disablePortal
            sx={{ zIndex: 10 }}
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
                    marginLeft: "-10px",
                    p: "20px",
                  }}
                >
                  <ClickAwayListener
                    onClickAway={() =>
                      setOpenPopper((prev) => ({ ...prev, 2: false }))
                    }
                  >
                    <Box>
                        <Button
                          onClick={() =>
                            setOpenPopper((prev) => ({ ...prev, 2: false }))
                          }
                          sx={{ textTransform: "capitalize", }}
                        >
                          <Close sx={{ color: "#ff0000", fontSize: "16px" }} />
                        </Button>
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
                    </Box>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          size="large"
          sx={{ fontWeight: "600", cursor: "pointer" }}
        >
          Reserve
        </Button>
        <Box textAlign={"center"} fontSize={"13px"} my={2}>
          <Typography variant="text">You won't be charged yet</Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"15px"}>
            $40 x 3 nights
          </Typography>
          <Typography variant="h4" fontSize={"15px"}>
            $ 120
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"15px"}>
            Airbnb service fee
          </Typography>
          <Typography variant="h4" fontSize={"15px"}>
            $ 17
          </Typography>
        </Box>
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"16px"} fontWeight={"700"}>
            Total
          </Typography>
          <Typography variant="h4" fontSize={"15px"} fontWeight={"700"}>
            $ 137
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Reserve;
