import { Banner } from "@/components/Section1";
import HeroSecion from "@/components/Section2";
import Blogcard from "@/components/section3";

export default function Home(){
  return(
    <div>
      <Banner/>
      <HeroSecion/>
      <Blogcard/>
    </div>
  );
}