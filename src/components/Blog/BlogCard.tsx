// BlogCard component for individual blog cards
export const BlogCard = ({
  title,
  imageUrl,
  link,
}: {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) => {
  return (
    <div className="w-full  md:w-1/2 lg:w-1/3 h-70 md:h-70 rounded-md m-4">
      <a
        href={link}
        className="font-semibold lg:text-xl xl:text-2xl inline-block text-dark hover:scale-110 transform transition-transform duration-300 m-0 p-2 bg-orange-100"
      >
        <div className="rounded overflow-hidden">
          <img src={imageUrl} alt={`${title} art image`} className="w-full " />
        </div>
      </a>
      {/* <div className="mx-auto flex flex-col items-center">
        <div className="rounded overflow-hidden">
          <img src={imageUrl} alt="Blog" className="w-full " />
        </div>
        <div>
          <h3 className="text-center">
            <a
              href={link}
              className="font-semibold lg:text-xl xl:text-2xl inline-block text-dark hover:text-primary text-black underline m-0 p-2"
            >
              {title}
            </a>
          </h3>
        </div>
      </div> */}
    </div>
  );
};
