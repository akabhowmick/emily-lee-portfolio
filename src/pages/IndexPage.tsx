import "../App.css";
import { Blogs } from "../components/Blog/Blogs";
import { Gallery } from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";

export default function IndexPage() {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Blogs />
        <Gallery />
      </div>
    </>
  );
}
