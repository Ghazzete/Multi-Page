import React from 'react';

function About() {
  return (
    <div>
      <section className='about' style={{ backgroundImage: "url('/images/about-image.jpg')" }}>
        <div className='about-content'>
          <h2 className='fade-in'>About Us</h2>
          <p>
            Welcome to Watch World, where time meets elegance. At Watch World, 
            we are passionate about curating a collection of premium watches that blend style,
            craftsmanship, and functionality. Whether you&apos;re searching for a timeless classic or a modern design,
            our selection caters to all tastes and occasions. We believe a watch is more than just an accessory – it’s a statement, 
            a tradition, and a reflection of your personality. Our mission is to provide our customers with exceptional quality 
            and unmatched service, ensuring every experience is as timeless as our watches. Explore our world, where every second counts!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
