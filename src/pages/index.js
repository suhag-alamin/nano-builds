import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Hero from "@/components/Home/Hero";
import RootLayout from "@/components/Layouts/RootLayout";
import Header from "@/lib/Header";
import { useEffect, useState } from "react";

const Home = ({ products }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const getRandomIndices = (max, count) => {
    const indices = [];
    for (let i = 0; i < count; i++) {
      let randomIndex;
      for (;;) {
        randomIndex = Math.floor(Math.random() * max);
        if (!indices.includes(randomIndex)) {
          break;
        }
      }
      indices.push(randomIndex);
    }
    return indices;
  };

  useEffect(() => {
    if (products?.length > 0) {
      const randomIndices = getRandomIndices(products.length, 6);
      const randomProducts = randomIndices.map((index) => products[index]);
      setFeaturedProducts(randomProducts);
    }
  }, [products]);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts featuredProducts={featuredProducts} />
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products: products?.data,
    },
  };
};
