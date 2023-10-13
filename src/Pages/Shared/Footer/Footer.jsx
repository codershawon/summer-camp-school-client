import React from 'react';
import Container from '../Container';
import { AiFillGoogleCircle, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
      <div className='bg-base-200'>
<Container>
  <footer className="footer p-10 text-base-content">
    <div>
      <span className="footer-title">Explore</span>
      <a className="link link-hover">Home</a>
      <a className="link link-hover">Classes</a>
      <a className="link link-hover">Camps</a>
      <a className="link link-hover">Workshops</a>
    </div>
    <div>
      <span className="footer-title">About Us</span>
      <a className="link link-hover">Mission</a>
      <a className="link link-hover">Our Team</a>
      <a className="link link-hover">Testimonials</a>
      <a className="link link-hover">Gallery</a>
    </div>
    <div>
      <span className="footer-title">Contact</span>
      <a className="link link-hover">Phone: (123) 456-7890</a>
      <a className="link link-hover">Email: info@artisanscamp.com</a>
      <a className="link link-hover">Location: 123 Main St, City, State</a>
    </div>
  </footer>
  <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
    <div className="items-center grid-flow-col">
    <img className='h-14 w-14' src="https://i.ibb.co/2hYBMPs/8955297-removebg-preview.png" alt="" />
      <p>Artisans' Camp</p>
    </div>
    <div className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
        <a>
        <button
        className="btn btn-circle btn-outline"
      >
        <AiFillGoogleCircle className="w-9 h-9" />
      </button>
        </a>
        <a>
        <button
        className="btn btn-circle btn-outline"
      >
        <AiOutlineTwitter className="w-9 h-9" />
      </button>
        </a>
        <a>
        <button
        className="btn btn-circle btn-outline"
      >
        <AiFillLinkedin className="w-9 h-9" />
      </button>
        </a>
      </div>
    </div>
  </footer>
</Container>
</div>

    );
};

export default Footer;