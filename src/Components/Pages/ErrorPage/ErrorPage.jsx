import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, ScrollRestoration } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
        AOS.refresh();
    }, []);
    return (
        <div data-aos="zoom-in-up" className='font-roboto flex flex-col h-screen'>
            <ScrollRestoration />
            <Helmet>
        <title>WSP_Residence-404</title>
      </Helmet>
            <Header></Header>
            <div className='flex justify-center'>
                <div>
                    <img className='mt-5' src="https://i.ibb.co/KGfkypW/404.gif" alt="" />
                    <div className='flex justify-center'>
                        <Link to="/"><button className='py-2 px-10 bg-[#ECF1FF] text-[#092D32] mb-10 rounded font-semibold'>Back to home</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;