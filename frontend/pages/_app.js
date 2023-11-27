import "@/styles/globals.css";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContex";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ClientThemeWrapper>
        <Component {...pageProps} />
      </ClientThemeWrapper>
    </ThemeProvider>
  );
}
