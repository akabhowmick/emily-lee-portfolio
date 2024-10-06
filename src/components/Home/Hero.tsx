function Hero() {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-60"
          src="https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="tracking-tighter text-white">
              <span className=" font-serif italic font-normal text-7xl">Welcome to</span>
              <br />
              <span className="font-sans font-normal text-8xl">Angela Blogs</span>
            </h1>
            <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
              Sharing insights and experiences on the art of debate. Empowering students to elevate
              their skills and excel in public speaking, argumentation, and critical thinking, one
              post at a time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
