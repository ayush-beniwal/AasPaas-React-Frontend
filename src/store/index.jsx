import { configureStore } from "@reduxjs/toolkit";
import { userReducer, loginSuccess, logoutSuccess } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./apis/userApi";
import { productsApi } from "./apis/productsApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, loginSuccess, logoutSuccess };
export { useLoginMutation, useRegisterMutation } from "./apis/userApi";
export {
  useFetchProductsQuery,
  useFetchEachProductQuery,
} from "./apis/productsApi";
