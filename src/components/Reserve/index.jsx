import React, { useState, useRef, useEffect } from "react";
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
import ReservationModal from "../stripePayments/ReservationModal";
import { useAuthInfo } from "../../helpers/AuthCheck";

const Reserve = ({ propertyValues }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [discountedPrices, setDiscountedPrices] = useState(0);
  const [activeDiscount, setActiveDiscount] = useState(0);
  const [applyDiscountPercentage, setApplyDiscountPercentage] = useState(0);
  const userInfo = useAuthInfo();
  const price = parseInt(propertyValues?.price);
  const listingDiscountPercentage = parseInt(
    propertyValues?.discounts?.listingValue
  );
  const weeklyDiscountPercentage = parseInt(
    propertyValues?.discounts?.weeklyValue
  );
  const monthlyDiscountPercentage = parseInt(
    propertyValues?.discounts?.monthlyValue
  );

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [openPopper, setOpenPopper] = useState({
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

  // date difference calculation
  const startDate = selectedRange.startDate
    ? new Date(selectedRange.startDate)
    : null;
  const endDate = selectedRange.endDate
    ? new Date(selectedRange.endDate)
    : null;
  const timeDifference =
    startDate && endDate ? endDate.getTime() - startDate.getTime() : 0;
  // Calculate the number of days
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  // price calculation
  const totalNightPrice = (price * daysDifference).toFixed(2);
  const serviceFee = (price * daysDifference) / 10;
  const userGetDiscountPrices =
    totalNightPrice - discountedPrices * daysDifference;

  const totalPrice = (
    parseFloat(totalNightPrice) +
    serviceFee -
    userGetDiscountPrices
  ).toFixed(2); 

  // discount calculation
  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    // Calculate the discounted price
    const discountedPrice =
      originalPrice - (originalPrice * discountPercentage) / 100;

    // Ensure that the result has exactly two decimal places
    const formattedDiscountedPrice = parseFloat(discountedPrice.toFixed(2));

    return formattedDiscountedPrice;
  };

  // Define the original price
  const originalPrice = price;

  const discountedPriceListing = calculateDiscountedPrice(
    originalPrice,
    listingDiscountPercentage
  );
  const discountedPriceWeekly = calculateDiscountedPrice(
    originalPrice,
    weeklyDiscountPercentage
  );
  const discountedPriceMonthly = calculateDiscountedPrice(
    originalPrice,
    monthlyDiscountPercentage
  );

  useEffect(() => {
    const calculateDiscount = () => {
      setApplyDiscountPercentage(
        daysDifference > 30
          ? monthlyDiscountPercentage
          : daysDifference > 7
          ? weeklyDiscountPercentage
          : discountedPriceListing != null && discountedPriceListing !== ""
          ? listingDiscountPercentage
          : 0
      );

      setActiveDiscount(
        daysDifference > 30
          ? "monthly"
          : daysDifference > 7
          ? "weekly"
          : discountedPriceListing != null && discountedPriceListing !== ""
          ? "listing"
          : ""
      );

      setDiscountedPrices(
        daysDifference > 30
          ? discountedPriceMonthly
          : daysDifference > 7
          ? discountedPriceWeekly
          : discountedPriceListing || originalPrice
      );
    };

    calculateDiscount();
  }, [
    daysDifference,
    listingDiscountPercentage,
    weeklyDiscountPercentage,
    monthlyDiscountPercentage,
    discountedPriceMonthly,
    discountedPriceWeekly,
    discountedPriceListing,
    originalPrice,
  ]);

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

  // for the payment modal
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const address = {
    country: propertyValues?.address?.country,
    addressLine1:
      propertyValues?.address?.addressLine1 +
      ", " +
      propertyValues?.address?.addressLine2 +
      ", " +
      propertyValues?.address?.addressLine3,
    city: propertyValues?.address?.city,
    state: propertyValues?.address?.state,
    postalCode: propertyValues?.address?.postalCode,
  };

  const propertyInfo = {
    renterUserId: userInfo._id,
    renterName: userInfo.name,
    renterEmail: userInfo.email,
    renterPhoneNumber: userInfo?.phoneNumber,
    hostUserId: propertyValues.userId._id,
    hostName: propertyValues.userId.name,
    hostEmail: propertyValues.userId.email,
    hostPhoneNumber: propertyValues.userId?.phoneNumber,
    propertyId: propertyValues._id,
    originalPrice: originalPrice,
    actualPrice: totalPrice,
    discountAmount: userGetDiscountPrices,
    serviceFee: serviceFee,
    discountPercentage: applyDiscountPercentage,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    stayDays: daysDifference,
    adults: parseInt(adultsCount),
    children: parseInt(childrenCount),
    infants: parseInt(infantsCount),
    pets: parseInt(petsCount),
    ...address,
  };

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
          {discountedPrices && (
            <Typography variant="h4" fontSize={"18px"}>
              ${discountedPrices} Night
            </Typography>
          )}
          <Box display={"flex"} alignItems={"center"}>
            {discountedPrices === price ? (
              " "
            ) : (
              <span
                style={{ textDecoration: "line-through", fontSize: "16px" }}
              >
                ${price} Night
              </span>
            )}
          </Box>
        </Box>
        <Box border={"1px solid #06283D"} borderRadius={"10px"} my={"25px"}>
          <div>
            <Grid
              container
              value="1"
              ref={box1Ref}
              onClick={() => {
                handleTogglePopper("1");
              }}
              sx={{ cursor: "pointer" }}
            >
              <Grid item xs={6} borderRight={"1px solid #06283D"} p={"15px"}>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Check in
                </Typography>
                <Typography variant="h4" fontSize={"14px"} mt={"5px"}>
                  {startDate == null
                    ? "Add dates"
                    : startDate.toLocaleDateString("en-GB")}
                </Typography>
              </Grid>
              <Grid item xs={6} p={"15px"}>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Check out
                </Typography>
                <Typography variant="h4" fontSize={"14px"} mt={"5px"}>
                  {endDate == null
                    ? "Add dates"
                    : endDate.toLocaleDateString("en-GB")}
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
                      marginTop: "-70px",
                      marginLeft: "-25px",
                    }}
                  >
                    <ClickAwayListener
                      onClickAway={() =>
                        setOpenPopper((prev) => ({ ...prev, 1: false }))
                      }
                    >
                      <Box p={"15px"}>
                        <WhenDate
                          onSelect={handleDateSelect}
                          disabledDates={disabledDates}
                        />
                        <Box textAlign={"center"}>
                          <Button
                            onClick={() =>
                              setOpenPopper((prev) => ({ ...prev, 1: false }))
                            }
                            variant="contained"
                            sx={{ textTransform: "capitalize", mt: 1 }}
                            color="secondary"
                            size="small"
                          >
                            <Close sx={{ fontSize: "16px" }} /> close
                          </Button>
                        </Box>
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
                    marginTop: "-145px",
                    marginLeft: "-20px",
                    p: "20px",
                  }}
                >
                  <ClickAwayListener
                    onClickAway={() =>
                      setOpenPopper((prev) => ({ ...prev, 2: false }))
                    }
                  >
                    <Box>
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
                      <Box textAlign={"center"}>
                        <Button
                          onClick={() =>
                            setOpenPopper((prev) => ({ ...prev, 2: false }))
                          }
                          variant="contained"
                          sx={{ textTransform: "capitalize", mt: 1 }}
                          color="secondary"
                          size="small"
                        >
                          <Close sx={{ fontSize: "16px" }} /> close
                        </Button>
                      </Box>
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
          // disabled={totalPrice < 1}
          onClick={openModal}
        >
          Reserve
        </Button>

        <ReservationModal
          isOpen={modalOpen}
          onClose={closeModal}
          propertyInfo={propertyInfo}
        />

        <Box textAlign={"center"} fontSize={"13px"} my={2}>
          <Typography variant="text" color={"primary"}>
            {!isNaN(listingDiscountPercentage) && (
              <span
                style={
                  activeDiscount === "listing"
                    ? { fontWeight: "bold", color: "#25af1e" }
                    : {}
                }
              >
                Listing {listingDiscountPercentage}%,
              </span>
            )}{" "}
            {!isNaN(weeklyDiscountPercentage) && (
              <span
                style={
                  activeDiscount === "weekly"
                    ? { fontWeight: "bold", color: "#25af1e" }
                    : {}
                }
              >
                Weekly {weeklyDiscountPercentage}%,
              </span>
            )}{" "}
            {!isNaN(monthlyDiscountPercentage) && (
              <span
                style={
                  activeDiscount === "monthly"
                    ? { fontWeight: "bold", color: "#25af1e" }
                    : {}
                }
              >
                Monthly {monthlyDiscountPercentage}%
              </span>
            )}{" "}
            {(!isNaN(listingDiscountPercentage) ||
              !isNaN(weeklyDiscountPercentage) ||
              !isNaN(monthlyDiscountPercentage)) &&
              "discounted"}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"15px"}>
            (${price} * {daysDifference}) Nights
          </Typography>
          <Typography variant="h4" fontSize={"15px"}>
            ${totalNightPrice}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography
            variant="h4"
            fontSize={"15px"}
            color={"#25af1e"}
            fontWeight={600}
          >
            Long stay discount
          </Typography>
          <Typography
            variant="h4"
            fontSize={"15px"}
            color={"#25af1e"}
            fontWeight={600}
          >
            - ${userGetDiscountPrices.toFixed(2)}
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"15px"}>
            UK-BD service fee
          </Typography>
          <Typography variant="h4" fontSize={"15px"}>
            ${serviceFee}
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
            ${totalPrice}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Reserve;
