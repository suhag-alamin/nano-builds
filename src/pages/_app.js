import store from "@/redux/store";
import "@/styles/globals.css";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <div className={`${roboto.className}`}>
            {getLayout(<Component {...pageProps} />)}
          </div>
        </ConfigProvider>
      </Provider>
    </SessionProvider>
  );
};
export default App;
