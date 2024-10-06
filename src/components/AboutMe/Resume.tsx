import { resumeData } from "../../data/resumeData";
import { ResumeItem } from "./ResumeItem";

// Assuming resumeData is imported or exists in content
const resumeItems = resumeData.map((entry) => {
  return <ResumeItem key={entry.nameOrOrg} entry={entry} />;
});

export const Resume: React.FC = () => {
  return (
    <section className="py-16">
      <div className="flex flex-wrap justify-center gap-4 mt-12">{resumeItems}</div>
    </section>
  );
};
