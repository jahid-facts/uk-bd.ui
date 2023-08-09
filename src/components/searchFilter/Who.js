
import React from "react";
import WhoComponent from "./WhoComponent";

const Who = ({
  adultsCount,
  setAdultsCount,
  childrenCount,
  setChildrenCount,
  infantsCount,
  setInfantsCount,
  petsCount,
  setPetsCount,
}) => {
  return (
    <>
      <WhoComponent
        label="Adults"
        description="Ages 13 or above"
        count={adultsCount}
        setCount={setAdultsCount}
      />
      <WhoComponent
        label="Children"
        description="Ages 2-12"
        count={childrenCount}
        setCount={setChildrenCount}
      />
      <WhoComponent
        label="Infants"
        description="Under 2"
        count={infantsCount}
        setCount={setInfantsCount}
      />
      <WhoComponent
        label="Pets"
        description="Bringing a service animal?"
        count={petsCount}
        setCount={setPetsCount}
      />
    </>
  );
};

export default Who;



