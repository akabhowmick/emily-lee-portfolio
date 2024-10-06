import { motion } from "framer-motion";

interface ResumeItemProps {
  nameOrOrg: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  majorContributions: string[];
  extracurricularType: string;
}

export const ResumeItem = ({ entry }: { entry: ResumeItemProps }) => {
  const {
    nameOrOrg,
    position,
    duration,
    location,
    description,
    majorContributions,
    extracurricularType,
  } = entry;

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden cursor-pointer w-80 p-6 bg-white shadow-lg group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Organization or Name */}
      <motion.div
        className="text-xl font-bold text-gray-800 mb-2"
        transition={{ type: "spring", stiffness: 300 }}
      >
        {nameOrOrg}
      </motion.div>

      {/* Position and Duration */}
      <div className="text-sm text-gray-500 mb-1">
        {position} | {duration}
      </div>

      {/* Location */}
      <div className="text-sm text-gray-500 mb-2">{location}</div>

      {/* Description */}
      <motion.div className="text-gray-600 mb-4">{description}</motion.div>

      {/* Major Contributions */}
      <motion.ul className="list-disc list-inside text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {majorContributions.map((contribution, index) => (
          <li key={index}>{contribution}</li>
        ))}
      </motion.ul>

      {/* Extracurricular Type */}
      <motion.div className="mt-4 text-xs uppercase text-gray-400">
        {extracurricularType}
      </motion.div>
    </motion.div>
  );
};
