import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserProvider";
import { ThemeProvider } from "@/context/ThemeContex";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <div>
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}
