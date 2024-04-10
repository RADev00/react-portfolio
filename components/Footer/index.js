import React, { useState, useEffect } from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useTheme } from "next-themes";

const Footer = ({ contactRef }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <>
          <div className="w-full mt-5 laptop:mt-10 p-2 laptop:p-0">
            <div ref={contactRef}>
              <h1 className="pt-30 text-2xl text-bold font-medium">Contact.</h1>
              <div className="mt-5 laptop:mt-10">
                <h1 className="text-xl tablet:text-2xl laptop:text-4xl laptopl:text-8xl text-bold">
                  LET&apos;S WORK TOGETHER!
                </h1>
                {/* <h3 className="mt-5 text-lg laptop:text-2xl text-bold">
                  Schedule a call
                </h3> */}
                {/* <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
                  TOGETHER
                </h1> */}
                <div className="p-0">
                  <Button type="primary"><Link href="https://calendly.com/rohan__/">Schedule a call</Link></Button>
                </div>
                <h3 className="mt-5 text-lg laptop:text-2xl text-bold">
                  Get in touch.
                </h3>
                <div className="flex-col">
                  <div className="flex w-full justify-center align-middle flex-col">
                    <div className="w-full flex flex-col">
                      <label className="w-full text-md laptop:text-lg opacity-50">Title</label>
                      <div key="title" className="flex">
                        <input
                          disabled
                          onChange={(e) => {
                            setContactData({ ...contactData, title: e.target.value })
                          }}
                          className="w-3/5 p-2 rounded-md shadow-lg border-2"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full justify-center align-middle flex-col">
                    <div className="w-full flex flex-col">
                      <label className="w-full text-md laptop:text-lg opacity-50">Message</label>
                      <div key="message" className="flex">
                        <textarea
                          disabled
                          rows="6"
                          className="w-3/5 p-2 rounded-md shadow-lg border-2"
                          type="text"
                          onChange={(e) => {
                            console.log(e.target.value);
                            setContactData({ ...contactData, message: e.target.value });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    {/* <Button type="primary" onClick={console.log(contactData.message)}><Link href={`mailto:rohan.agarwal1@student.unsw.edu.au?subject=${contactData.title ? contactData.title : ""}&body=${contactData.message ? contactData.message : ""}`}>Send Message</Link></Button> */}
                    <Button type="primary"><Link href="https://www.linkedin.com/in/agarwal-r/">Send Message</Link></Button>
                  </div>
                </div>

                <div className="mb-10">
                  <Socials isEmail={false} />
                </div>
              </div>
            </div>
          </div>
        </>)}
    </>
  );
};

export default Footer;
