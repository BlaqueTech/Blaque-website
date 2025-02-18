import Clipboard from "../assets/clipboards.png";
import Bright from "../assets/bright.png";
import Rocket from "../assets/rocket.png";
const Process = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 pb-12 md:px-28">
      <div className="flex flex-col items-center gap-4 text-center md:mx-[260px]">
        <p className="bg-gradient-to-r  from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl ">
          Why Us
        </p>
        <p className="md:text-[54px] text-[30px] leading-9 md:leading-none font-extrabold">
          Experience our simple design process
        </p>
        <p className="md:text-[22px] text-[20px] text-[#C2C7DC]">
          Uncover the essence of your brand, through our highly collaborative
          and intuitively structured design process.
        </p>
      </div>

      {/************************************************************************************* */}

      <div className="flex flex-col items-center gap-16 md:flex-row">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={Clipboard} alt="" className="h-16 p-4 " />
          </div>
          <p className="text-2xl font-semibold">Tailored Digital Solutions</p>
          <p className="text-xl text-[#C2C7DC]">
            Custom solutions designed to meet specific business needs.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={Bright} alt="" className="h-16 p-4 " />
          </div>
          <p className="text-2xl font-semibold">
            Scalable & Innovative Services
          </p>
          <p className="text-xl text-[#C2C7DC]">
            Solutions that grow with your business and embrace new technologies.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={Rocket} alt="" className="h-16 p-4 " />
          </div>
          <p className="text-2xl font-semibold">Collaborative Approach</p>
          <p className="text-xl text-[#C2C7DC]">
            We work closely with clients to understand their vision and deliver
            results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
