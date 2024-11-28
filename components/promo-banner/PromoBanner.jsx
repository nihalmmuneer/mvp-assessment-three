import React from 'react'

const PromoBanner = () => {
  return (
    <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-full max-w-[800px] mx-auto">
    <div className="relative w-full h-[300px] overflow-hidden">
      <img
        src="/promo-banner.png"
        alt="promo-banner"
        className="absolute top-0 w-full h-full"
      />

      <div className="absolute flex items-center flex-col top-14 left-16 text-white font-semibold text-2xl p-4 rounded-md w-[80%]">
        <h2 className="text-3xl font-davidLibre font-semibold text-center">
          Get Our Promo Code by <br />
          Subscribing To our Newsletter
        </h2>

        <div className="bg-white p-1 rounded-lg mt-4">
          <div className="flex items-center gap-28 justify-between">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full max-w-[250px] p-2 rounded-lg text-sm placeholder:text-xs font-medium"
            />
            <button
              type="button"
              className="bg-orange-500 text-xs text-white font-semibold px-4 py-2 rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PromoBanner