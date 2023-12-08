import React from 'react'


const About = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
      About Us
    </h1>
    <div className="mb-6 md:mb-8">
      <img
        src="https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="About Us"
        className="w-48 md:w-64 mx-auto rounded-full shadow-lg"
      />
    </div>
    <p className="text-gray-600 text-base md:text-lg text-center">
      Welcome to our food delivery platform! We are dedicated to bringing you
      the best dining experiences from local restaurants straight to your
      doorstep. Our mission is to make food delivery fast, simple, and
      enjoyable.
    </p>
  </div>
  
  )
}

export default About