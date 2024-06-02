import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content max-w-base flex flex-col items-center justify-center gap-y-6 text-center sm:my-10 lg:col-span-1 lg:items-start lg:justify-start lg:text-left">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter text-gray-900 md:text-6xl lg:text-7xl">
              <span className="block pb-2 xl:inline">Welcome to </span>
              <span className="block animate-text bg-gradient-to-r from-blue-600 via-blue-500 to-black bg-clip-text pb-2 text-transparent xl:inline">IntelliSense</span>
              <span className="block pb-2 xl:inline"> Platform</span>
            </h1>
          </div>
          <div className="max-w-md text-lg text-gray-900 sm:text-lg md:text-xl">
            <p>
              <div className="inline-block animate-text bg-gradient-to-r from-black via-blue-500 to-blue-600 bg-clip-text font-bold text-transparent">Delivering</div> Custom Websites and&nbsp;
              <div className="inline-block animate-text bg-gradient-to-r from-black via-blue-500 to-blue-600 bg-clip-text font-bold text-transparent"> AI Chatbots</div>.
            </p>
            <p>
              Tailored to your needs.
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center md:justify-start">
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-5 lg:flex-row lg:justify-start">
                <Link to="/register">
                  <button className="shimmer-button relative flex w-full overflow-hidden rounded-lg p-0.5 before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:rounded-full before:p-[700px]">
                    <div className="h-full w-full p-2 whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-3 py-3 text-lg font-semibold text-white hover:bg-blue-700 md:px-6 md:text-lg">
                      Get Started
                    </div>
                  </button>
                </Link>
                <Link to="/demo" className="whitespace-nowrap sm:text-md group inline-flex w-fit items-center justify-center rounded-md border border-transparent px-3 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:px-6 md:text-lg">
                  Get a Demo
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="ml-2 inline-block h-6 w-6 transition-all delay-100 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2>About Us</h2>
        <p>IntelliSense is dedicated to providing innovative web solutions and AI-powered chatbots that enhance user experience and drive business growth.</p>
      </section>
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <h3>Custom Websites</h3>
            <p>We create beautiful, responsive websites that are tailored to your business needs. Our websites are optimized for performance and user experience.</p>
          </div>
          <div className="service">
            <h3>AI Chatbots</h3>
            <p>Our AI chatbots provide seamless interaction with your customers, offering instant support and enhancing customer satisfaction.</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"IntelliSense transformed our online presence with a stunning website and an intelligent chatbot. Highly recommend!" - Client A</p>
          </div>
          <div className="testimonial">
            <p>"The AI chatbot developed by IntelliSense has significantly improved our customer service. Fantastic work!" - Client B</p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>Email: contact@intellisense.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
