import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="/src/love pizza.jpg " style={{borderradius:"2px"}}
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Order pizza of your choice online
                      </h2>
                      <p className="mt-6 text-gray-600">
                      A perfectly baked pizza crust that is soft on the inside and crisp on the outside plays a considerable role in making a pizza lip-smacking and delicious. Even a little amount of sogginess or over-crispiness can disrupt the entire taste of a pizza base and, ultimately, the overall pizza. It is why Domino’s takes special care while baking its pizza crusts to perfection to please all pizza lovers around the world.!
                      </p>
                      
                  </div>
              </div>
          </div>
      </div>
  );
}