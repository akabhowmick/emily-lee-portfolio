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
    <div className="w-full bg-white p-2 md:w-1/2 lg:w-1/3 h-80">
      <div className="max-w-[320px] mx-auto">
        <div className="rounded overflow-hidden mb-8">
          <img src={imageUrl} alt="Blog" className="w-full " />
        </div>
        <div>
          <h3>
            <a
              href={link}
              className="font-semibold lg:text-xl xl:text-2xl inline-block text-dark hover:text-primary"
            >
              {title}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
