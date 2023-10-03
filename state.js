import { proxy } from "valtio";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const globalState = proxy({
  // Initialize isAuth as a reactive proxy object
  isAuth: cookies.get("auth-token"),
});
