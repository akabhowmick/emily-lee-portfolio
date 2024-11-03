interface pageBannerInfoType {
  alt: string;
  src: string;
  title: string;
  subtitle: string;
}

export const SubPageTitle = ({ pageBannerInfo }: { pageBannerInfo: pageBannerInfoType }) => {
  const { alt, src, title, subtitle } = pageBannerInfo;

  return (
    <div className="relative">
      <img alt={alt} className="w-full h-64 object-cover opacity-65" src={src} />
      <div className="absolute inset-0 flex flex-col items-center justify-end text-blue-900">
        <div className="bg-white mb-2 py-4 px-8">
          <h1 className="text-4xl text-center font-bold p-2">{title}</h1>
          <p className="text-lg text-center p-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
