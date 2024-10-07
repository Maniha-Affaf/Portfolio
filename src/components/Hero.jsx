import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfilePic.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 py-2 lg:mb-20 xs:p-2">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 mb-2.5 xs:mb-8"> {/* Added margin-bottom for mobile */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-5xl py-4 font-thin tracking-tight xs:text-center lg:text-left lg:mt-8 lg:text-7xl">
              Maniha Affaf
            </h1>
            <span className="py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="max-w-xl font-light tracking-tighter sm:px-3 ">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6 mb-20">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile Pic"
              className="w-100 h-[400px] lg:w-100 lg:h-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
