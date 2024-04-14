import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  return (
    <div data-aos="fade-zoom-in" className="bg-[#181D24] mt-auto">
      <footer className="footer p-10 container m-auto text-white gap-10 grid grid-cols-12">
        <div className="col-span-3 flex flex-col items-center w-full">
          <h6 className="text-white font-semibold text-[16px] mb-2">WSP RESIDENCE</h6>
          <div className="rounded-full">
            <img className="p-2 w-[70px]" src="/src/assets/footer-logo.png" alt="" />
          </div>
          <p className="text-[#7A7A7A] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis, omnis quisquam, minus quibusdam amet dignissimos exercitationem inventore praesentium eos nesciunt odio molestias, saepe ab deleniti nulla ratione id commodi?</p>
        </div>
        <div className="col-span-3 flex flex-col items-center w-full">
          <h6 className="text-white font-semibold text-[16px] mb-2">Pages</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Details</a>
          <a className="link link-hover">Profile</a>
        </div>
        <div className="col-span-3 flex flex-col items-center w-full">
          <h6 className="text-white font-semibold text-[16px] mb-2">Contact</h6>
          <div className="flex items-center gap-2">
            <span><FaRegBuilding /></span>
            <a className="link link-hover"> 3755 Commercial St SE Salem</a>
          </div>
          <div className="flex items-center gap-2">
            <span><FaPhoneAlt /></span>
            <a className="link link-hover">(305) 555-4446</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[18px]"><MdOutlineEmail /></span>
            <a className="link link-hover">youremails@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[18px]"><FaSkype /></span>
            <a className="link link-hover">yourskypeid</a>
          </div>
        </div>
        <div className="col-span-3 flex flex-col items-center w-full">
          <h6 className="text-white font-semibold text-[16px] mb-2">Social</h6>
          <div className="grid grid-cols-12 gap-5">
            <div className="rounded col-span-3 flex bg-[#101419] justify-center p-2">
              <h1 className="text-[25px] text-white cursor-pointer"><FaFacebookF /></h1>
            </div>
            <div className="rounded col-span-3 flex bg-[#101419] justify-center p-2">
              <h1 className="text-[25px] text-white cursor-pointer"><FaXTwitter /></h1>
            </div>
            <div className="rounded col-span-3 flex bg-[#101419] justify-center p-2">
              <h1 className="text-[25px] text-white cursor-pointer"><FaWhatsapp /></h1>
            </div>
            <div className="rounded col-span-3 flex bg-[#101419] justify-center p-2">
              <h1 className="text-[25px] text-white cursor-pointer"><FaTiktok /></h1>
            </div>
            <div className="rounded col-span-3 flex bg-[#101419] justify-center p-2">
              <h1 className="text-[25px] text-white cursor-pointer"><SlSocialDribbble /></h1>
            </div>
            <div className="rounded col-span-3 flex bg-[#101419] justify-center p-2">
              <h1 className="text-[25px] text-white cursor-pointer"><SlSocialLinkedin /></h1>
            </div>
           
          </div>
        </div>
      </footer>
      <div className="bg-[#101419]">
        <div className="flex justify-between container m-auto py-5 text-white ">
            <div>
              <h1 className="text-[#7A7A7A]">Copyright. All Rights Reserved.</h1>
            </div>
            <div className="flex gap-5">
              <h1 className="text-[#7A7A7A]">Terms of Use</h1>
              <p className="text-[#7A7A7A]">Privacy Policy</p>
            </div>
      </div>
      </div>
    </div>
    
  );
};

export default Footer;
