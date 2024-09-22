/* eslint-disable no-unused-vars */
import { useLoginMutation } from "../store";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store";
import { useCookies } from "react-cookie";
import { useCallback } from "react";

export function useGLogin() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["user"]);
  const [login, loginResults] = useLoginMutation();

  const handleGoogleLogin = useCallback(
    async (tokenResponse) => {
      try {
        const { data } = await login(tokenResponse.access_token);

        dispatch(
          loginSuccess({
            token: data.token,
            id: data.id,
            name: data.name,
            email: data.email,
            photo: data.photo,
          })
        );

        setCookie(
          "user",
          {
            token: data.token,
            id: data.id,
            name: data.name,
            email: data.email,
            photo: data.photo,
          },
          { path: "/" }
        );
      } catch (error) {
        console.error(error);
      }
      // console.log(loginResults);
    },
    [dispatch, login, setCookie]
  );

  return { handleGoogleLogin, loginResults };
}
