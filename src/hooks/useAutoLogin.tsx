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
      if (skipTokenTest) await axios.get(`/users/${dataFromToken._id}`);
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
