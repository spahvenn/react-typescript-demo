import { toast } from "react-toastify";

export function showSuccessMsg(msg: string) {
  toast(msg, { type: "success", hideProgressBar: true });
}
