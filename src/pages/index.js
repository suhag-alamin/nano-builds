import Hero from "@/components/Home/Hero";
import RootLayout from "@/components/Layouts/RootLayout";
import Header from "@/lib/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
