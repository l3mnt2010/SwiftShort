import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toastcontainer = (title: string, about: string) => {
  if (title == "success") {
    toast.success(`Thành công để ${about}`);
  } else {
    toast.error(`Thất bại để ${about}`);
  }
};
