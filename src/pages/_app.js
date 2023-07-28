import "@/styles/globals.css";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => (
  <ConfigProvider theme={theme}>
    <main className={`${roboto.className}`}>
      <Component {...pageProps} />
    </main>
  </ConfigProvider>
);

export default App;
