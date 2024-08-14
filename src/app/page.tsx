import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Section1 from "@/pages/section1";
import Section2 from "@/pages/section2";
import Section3 from "@/pages/section3";
import Section4 from "@/pages/section4";


export default function Home() {
  return (
    <main className= {"bg-section-1"}>
        <Header />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Footer/>
    </main>
  );
}
