import "@/styles/globals.css";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ConfigProvider theme={theme}>
      <div className={`${roboto.className}`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ConfigProvider>
  );
};
export default App;
