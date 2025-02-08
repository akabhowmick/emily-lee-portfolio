import "../App.css";
import { HomeBlogSection } from "../components/Blog/HomeBlogSection";
// import { Gallery } from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";

export default function IndexPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <Hero />
        <HomeBlogSection />
        {/* <Gallery /> */}
      </div>
    </>
  );
}
