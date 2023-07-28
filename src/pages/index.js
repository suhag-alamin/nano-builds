import RootLayout from "@/components/Layouts/RootLayout";
import Header from "@/lib/Header";
import { Button } from "antd";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>helloasdfsdfsadf</h1>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
