// BlogCard component for individual blog cards
export const BlogCard = ({
  date,
  title,
  description,
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
    <div className="w-full bg-white p-6 md:w-1/2 lg:w-1/3">
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <img src={imageUrl} alt="Blog" className="w-full" />
        </div>
        <div>
          <span className="rounded inline-block text-center py-1 text-xs leading-loose font-semibold text-black mb-5">
            {date}
          </span>
          <h3>
            <a
              href={link}
              className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
            >
              {title}
            </a>
          </h3>
          <p className="text-base text-body-color">{description}</p>
        </div>
      </div>
    </div>
  );
};
