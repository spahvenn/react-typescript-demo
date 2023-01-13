import { toast, ToastOptions } from "react-toastify";

export function showSuccessMsg(msg: string, options: ToastOptions = {}) {
  toast(msg, { ...{ type: "success", hideProgressBar: true }, ...options });
}

export function showInfoMsg(msg: string, options: ToastOptions = {}) {
  toast(msg, { ...{ hideProgressBar: true }, ...options });
}
