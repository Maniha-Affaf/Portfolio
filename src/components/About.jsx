import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-12 text-center text-3xl xs:my-20 xs:text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center mb-6 lg:mb-0">
          <img className="rounded-2xl max-w-xs xs:max-w-xs lg:max-w-full" src={aboutImg} alt="About Pic" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex xs:justify-start lg:justify-start">
          <p className="my-2 max-w-xl py-6 px-4 xs:text-left sm:text-left lg:text-left font-light">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
