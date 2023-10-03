import Cookies from "universal-cookie";

const { proxy } = require("valtio");
const cookies = new Cookies();
export const globalState = proxy({
  isAuth: cookies.get("auth-token"),
});
