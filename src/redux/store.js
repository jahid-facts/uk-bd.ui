import { configureStore } from "@reduxjs/toolkit";
import UserPropertiesSlice from "./features/UserPropertiesSlice";
import AllPropertyForAdminSlice from "./features/AllPropertyForAdminSlice";
import PropertySlice from "./features/PropertySlice";
import AuthSlice from "./features/AuthSlice";
import UsersSlice from "./features/UsersSlice";
// import AuthSlice from "./features/AuthSlice";
// import PropertySlice from "./features/PropertySlice";
// import AllPropertyForAdminSlice from "./features/AllPropertyForAdminSlice"; 
// import UserPropertiesSlice from "./features/UserPropertiesSlice";
// import UsersSlice from "./features/UsersSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    users: UsersSlice,
    properties: PropertySlice,
    allPropertyForAdmin: AllPropertyForAdminSlice,
    userProperties: UserPropertiesSlice,
  },
});

export default store;
