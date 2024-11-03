import { Resume } from "../components/AboutMe/Resume";
import { SubPageTitle } from "../components/Shared/SubPageTitle";
import { aboutMeSubPageTitle } from "../data/pageTitle";

export const AboutMePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={aboutMeSubPageTitle} />
      {/* Section Header */}
      {/* Similar Filtering */}
      <Resume />
    </div>
  );
};
