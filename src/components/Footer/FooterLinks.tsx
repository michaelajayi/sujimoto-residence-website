import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../public/logo.svg";

const FooterLinks = () => {
  return (
    <div className='w-[80%] flex flex-col justify-center items-start md:items-center py-10 space-y-10'>
      <Image src={logo} alt='logo' priority />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 items-start justify-center'>
        <p className='font-works-sans text-[10px] tracking-[2px] uppercase text-[#989898] md:justify-self-center'>
          &copy; Sujimoto Residence {new Date().getFullYear()}.
        </p>
        <p className='font-work-sans text-[10px] tracking-[2px] uppercase text-[#989898] md:justify-self-center'>
          The Sujimoto Residences is your first choice for luxury shortlet
          apartment located in Africa’s most exclusive neighborhood
        </p>
        <div className='flex flex-col space-y-2 text-center md:text-start text-[#989898] uppercase font-work-sans tracking-[2px] text-[10px] md:justify-self-center'>
          <p className='text-start'>Contact</p>
          <div className='flex flex-col space-y-1 items-start md:items-center'>
            <p className='text-[#989898] font-work-sans tracking-[2px] text-[10px]]'>
              <a href='tel:+234 809 8521 646'>+234 818 3125 555</a>
            </p>
            <p className='text-[#989898] font-work-sans tracking-[2px] text-[10px]'>
              <a href='tel:+234 817 9618 616'>+234 908 8193 904</a>
            </p>
          </div>
        </div>
        <div className='flex space-x-3 text-white justify-start md:justify-center items-start md:items-center md:justify-self-center'>
          <a
            href='https://www.instagram.com/sujimotoresidences/'
            target='_blank'
            className='cursor-pointer grid place-content-center px-2 py-2 aspect-square rounded-full border border-[#989898]'
          >
            <FaInstagram className='icon' color='#989898' size={20} />
          </a>
          <a
            href='https://twitter.com/ResidencebyS'
            target='_blank'
            className='cursor-pointer grid place-content-center px-2 py-2 aspect-square rounded-full border border-[#989898]'
          >
            <FaTwitter color='#989898' size={20} />
          </a>
          <a
            href='https://www.facebook.com/sujimotoresidence'
            target='_blank'
            className='cursor-pointer grid place-content-center px-2 py-2 aspect-square rounded-full border border-[#989898]'
          >
            <FaFacebookF color='#989898' size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
