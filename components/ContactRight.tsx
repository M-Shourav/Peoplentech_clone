"use client";
import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";

const ContactRight = () => {
  return (
    <div className="w-full bg-slate-100/80 rounded-md p-5">
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-y-2">
          <p className="flex items-center gap-x-2 text-base font-normal tracking-wide text-gray-700">
            Name
            <span className="text-[8px] -mt-2">
              <FaStarOfLife />
            </span>
          </p>
          <input
            type="text"
            placeholder="Enter Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            className="w-full p-2 h-12 bg-white text-black rounded-md outline-none
            border border-gray-300 focus-visible:border-red-500"
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-y-2">
            <p className="flex items-center gap-x-2 text-base font-normal tracking-wide text-gray-700">
              phone number
              <span className="text-[8px] -mt-2">
                <FaStarOfLife />
              </span>
            </p>
            <input
              type="text"
              placeholder="Enter number"
              onChange={handleChange}
              name="Phone"
              value={formData.Phone}
              required
              className="w-full p-2 h-12 bg-white text-black rounded-md outline-none
            border border-gray-300 focus-visible:border-red-500"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="flex items-center gap-x-2 text-base font-normal tracking-wide text-gray-700">
              Email
              <span className="text-[8px] -mt-2">
                <FaStarOfLife />
              </span>
            </p>
            <input
              type="email"
              placeholder="Enter Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              className="w-full p-2 h-12 bg-white text-black rounded-md outline-none
            border border-gray-300 focus-visible:border-red-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="flex items-center gap-x-1 text-base font-normal tracking-wide text-gray-700">
            Message{" "}
            <span className="text-[8px] -mt-2">
              <FaStarOfLife />
            </span>
          </p>
          <textarea
            placeholder="Enter your Message"
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            required
            cols={30}
            rows={8}
            className="w-full p-2 h-12 bg-white text-black rounded-md outline-none
            border border-gray-300 focus-visible:border-red-500"
          />
        </div>
        <div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-normal tracking-wide text-gray-700">
              Captcha
            </p>
            <input
              type="text"
              placeholder="Enter captcha"
              name="Captcha"
              value={formData.Captcha}
              onChange={handleChange}
              required
              className="w-full p-2 h-12 bg-white text-black rounded-md outline-none
            border border-gray-300 focus-visible:border-red-500"
            />
          </div>
        </div>
        <div
          className="w-full flex items-center justify-center bg-skyColor
        text-white hover:bg-lightSky duration-300 py-4 rounded-md"
        >
          <button type="submit" className="text-2xl">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactRight;
