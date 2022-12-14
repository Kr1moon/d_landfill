import styles from "../style";
import { discount, rat2 } from "../assets";
import GetStarted from './GetStarted'


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    {/* <div className="flex flex-row items-center py-[6px] px-4 bg-pnkL-gradient rounded-[10px] mb-2">
    <img 
    src={discount} 
    alt='discount'
    className="w-[32px] h-[32px]" />
    <p className={`${styles.paragraph} ml-2`}>
      <span className="text-white">20%
    </span> Discount For {' '}
    <span className="text-white">1 Month
    </span> Account 
    </p>   
    </div> */}
    <div className="flex flex-row justify-between items-center w-full">
      <h1 className="flex-1 font-inter font-medium ss:text-[82px] text-[52px] text-black ss:leading-[100px] leading-[65px]">
        Welcome to <br className="sm:block hidden" />
        {' '}
        <span className="text-black font-inter ss:text-[92px] 
        text-[52px]">
        Decentralized <br className="sm:block hidden" />
        </span> {' '}
        <span className="text-black font-inter ss:text-[92px] text-[52px]">
        Landfill
        </span> {' '}
      </h1>
      {/* <div className="ss:flex hidden md:mr-5 mr-0 px-5">
      <GetStarted />
      </div> */}
    </div>
<p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
Give your smart contracts
a second chance!
</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={rat2} alt='billing' className="w-[100%] h-[100%] absolute z-[5] object-contain" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted />
    </div>
    </section>
  )


export default Hero;