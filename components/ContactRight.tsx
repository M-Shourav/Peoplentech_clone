"use client";
import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
const ContactRight = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    Captcha: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ScriptUrl =
    "https://script.google.com/macros/s/AKfycby1afiC29HPvdVajauGnZW_d4-cI0RriC61qP8p4-bdttlwDdD40WapM2pzKca7evLx/exec";

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("Message", formData.Message);
    form.append("Captcha", formData.Captcha);
    form.append("DateTime", currentDateTime);

    try {
      const response = await fetch(ScriptUrl, { method: "POST", body: form });
      if (response.ok) {
        setStatus("Success Your Message has been sent");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
          Captcha: "",
        });
      } else {
        setStatus("Error! Unable to send your message");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setStatus("");
      }, 2000);
    }
  };

  return (
    <>
      {status ? (
        <div className="py-10 flex flex-col gap-2 items-center justify-center">
          <p className="text-xl font-semibold text-green-500">{status}</p>
          <p className="text-base text-green-800 font-semibold max-w-[400px] text-center">
            Thank you for your time and will make sure to reach you out on your
            email:
            <span className="text-lg font-semibold text-green-500">
              {formData.Email}
            </span>{" "}
            as soon as possible
          </p>
        </div>
      ) : (
        <div className="w-full bg-slate-100/80 rounded-md p-5">
          <form className="flex flex-col gap-5" onSubmit={HandleSubmit}>
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
              <button type="submit" className="w-full text-2xl">
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactRight;
