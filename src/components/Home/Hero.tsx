import siteBg from "../../assets/site-bg.png";

function Hero() {
  return (
    <div className="relative pt-48 pb-12 w-full bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0 w-full">
        <img className="object-cover w-full h-full opacity-60" src={siteBg} alt="Hero Background" />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tighter text-white">
              <span className="font-serif italic font-normal text-4xl sm:text-7xl">Welcome to</span>
              <br />
              <span className="font-sans font-normal text-6xl sm:text-8xl">Angela Blogs</span>
            </h1>

            <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
              Navigating my high school journey with a passion for learning and a vision for the
              future. Preparing for a meaningful path in debate and honing my skills—one challenge
              at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
