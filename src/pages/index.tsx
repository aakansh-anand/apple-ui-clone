import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const index = () => {
  return (
    <main className="bg-black">
      <Head>
        <title>Apple iPhone</title>
      </Head>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};
export default index;
