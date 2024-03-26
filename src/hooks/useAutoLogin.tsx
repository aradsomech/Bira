import axios from "axios";

import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { getToken } from "@/storage/storgeService";
import { jwtDecode } from "jwt-decode";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  return async (skipTokenTest = false) => {
    try {
      const token = getToken();
      console.log(token);

      if (!token) return;
      const dataFromToken = jwtDecode(token);
      console.log(dataFromToken);

      await axios
        .get(`/api/v1/users/${dataFromToken.payload._id}`)
        .then((response) => {
          console.log(response.data.user.firstName);
          dataFromToken.payload.name =
            response.data.user.firstName + " " + response.data.user.lastName;
        });
      console.log(dataFromToken);

      console.log(dataFromToken);

      dispatch(authActions.login(dataFromToken));
    } catch (err) {
      console.log("err from auto login", err);
      localStorage.clear();
      sessionStorage.clear();
    }
  };
};

export default useAutoLogin;
