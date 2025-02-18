import Insta from "../assets/instagram.png";
import FB from "../assets/facebook 1.png";
import Twitter from "../assets/twitter.png";
const Letstalk = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between px-4 lg:px-24 gap-12">
      <div className="flex flex-col  justify-start gap-16 h-full lg:w-1/2">
        <div className="flex flex-col justify-between gap-4">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Contact
          </p>
          <p className="md:text-6xl text-4xl font-extrabold">Get in touch</p>
          <p className="text-xl text-[#ADC6DD]">
            {`We'd`} love to hear from you. Fill in the form and well get back
            to you shortly.
          </p>
        </div>
        {/****************************** */}
        {/* <div className="grid grid-cols-2 grid-rows-2 gap-y-6 ">
          <div>
            <p className="text-lg font-bold">Los Angeles</p>
            <p className="text-[#ADC6DD]">
              123 West Kanye Street <br />
              Los Angeles, CA 90001
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">New York</p>
            <p className="text-[#ADC6DD]">
              789 North Weezy Street
              <br /> New York, NY 10001
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">San Francisco</p>
            <p className="text-[#ADC6DD]">
              456 East Drake Street <br />
              San Francisco, CA 94111
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">Miami</p>
            <p className="text-[#ADC6DD]">
              101 South Hova Street <br />
              Miami, FL 33101
            </p>
          </div>
        </div> */}
        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold ">Follow us</p>
          <div className="flex gap-6">
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-10 p-2">
              <img
                src={Insta}
                alt=""
                className="w-full h-full  object-contain"
              />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-10 p-2">
              <img src={FB} alt="" className="w-full h-full object-contain" />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-10 p-2">
              <img
                src={Twitter}
                alt=""
                className="w-full h-full object-contain "
              />
            </a>
          </div>
        </div>
      </div>

      {/********************************************************** */}

      <div
        className="flex flex-col items-center justify-center bg-[#23202A] h-full
      lg:w-1/2 w-full px-10  lg:px-20 py-12 rounded-3xl"
      >
        <form action="#" className="flex flex-col gap-6 w-full justify-center">
          <span className="flex flex-col gap-2">
            <label htmlFor="username">Name *</label>
            <input
              type="text"
              id="username"
              placeholder="John Doe"
              className="bg-[#18191F] text-white py-4 px-3 rounded-xl"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              required
              placeholder="john@email.com"
              className="bg-[#18191F] text-white py-4 px-3 rounded-xl"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="email">Email *</label>
            <input
              type="number"
              required
              placeholder="(123)456-789"
              className="bg-[#18191F] text-white py-4 px-3 rounded-xl"
            />
          </span>
          <span className="flex flex-col gap-2">
            <label htmlFor="msg">Message *</label>
            <textarea
              name=""
              id="msg"
              cols="30"
              rows="10"
              placeholder="Messsage"
              className="bg-[#18191F] text-white py-4 px-3 rounded-xl h-20"
            ></textarea>
          </span>
          <input
            type="submit"
            value={`Send message`}
            className="bg-white text-[#18191F] w-fit px-6 py-4 rounded-full font-medium"
          />
        </form>
      </div>
    </div>
  );
};

export default Letstalk;
