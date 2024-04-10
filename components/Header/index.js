import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";
// Local Data
import data from "../../data/portfolio.json";
import moonImg from "../../public/images/moon.svg";
import sunImg from "../../public/images/sun.svg";
import menuImg from "../../public/images/menu.svg"
import menuWhiteImg from "../../public/images/menu-white.svg"
import cancelImg from "../../public/images/cancel.svg"
import cancelWhiteImg from "../../public/images/cancel-white.svg"

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mt-5">
      {mounted && (
        <Popover className="block tablet:hidden mt-5">
          {({ open }) => (
            <>
              <div className="flex items-center justify-between p-2 laptop:p-0">
                <h1
                  onClick={() => router.push("/")}
                  className="font-medium p-2 laptop:p-0 link"
                >
                  {name} &apos;24.
                </h1>

                <div className="flex items-center">
                  {data.darkMode && (
                    <Button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <div className="relative h-6 w-6">
                        <Image
                          src={theme === "dark" ? moonImg : sunImg}
                          alt="Theme Icon"
                          layout="fill"
                        />
                      </div>
                      {/* <img src={theme === "dark" ? moonImg : sunImg} alt="Theme Icon" className="h-6 w-6" /> */}
                    </Button>
                  )}

                  <Popover.Button>
                    <div className="relative h-5 w-5">
                      <Image
                        src={!open ? (theme === "dark" ? menuWhiteImg : menuImg) : (theme == "light" ? cancelImg : cancelWhiteImg)}
                        alt="Menu Icon"
                        layout="fill"
                      />
                    </div>
                    {/* <img src={!open ? (theme === "dark" ? menuWhiteImg : menuImg) : (theme == "light" ? cancelImg : cancelWhiteImg)} alt="Menu Icon" className="h-5 w-5" /> */}
                  </Popover.Button>
                </div>
              </div>
              <Popover.Panel
                className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"
                  } shadow-md rounded-md`}
              >
                {!isBlog ? (
                  <div className="grid grid-cols-1">
                    <Button onClick={handleWorkScroll}>Work</Button>
                    <Button onClick={handleAboutScroll}>About</Button>
                    {showBlog && (
                      <Button onClick={() => router.push("/blog")}>Blog</Button>
                    )}
                    {showResume && (
                      <Button
                        onClick={() =>
                          // window.open("https://www.linkedin.com/in/agarwal-r/")
                          router.push("/resume")
                        }
                      >
                        Resume
                      </Button>
                    )}

                    <Button
                      onClick={handleContactScroll}
                    >
                      Contact
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1">
                    <Button onClick={() => router.push("/")} classes="first:ml-1">
                      Home
                    </Button>
                    {showBlog && (
                      <Button onClick={() => router.push("/blog")}>Blog</Button>
                    )}
                    {showResume && (
                      <Button
                        onClick={() => router.push("/resume")}
                        classes="first:ml-1"
                      >
                        Resume
                      </Button>
                    )}

                    <Button
                      onClick={handleContactScroll}
                    >
                      Contact
                    </Button>
                  </div>
                )}
              </Popover.Panel>
            </>
          )}
        </Popover>
      )
      }
      {
        mounted && (
          <div
            className={`nav-bar w-[100%] top-0 mt-10 pl-4 pr-2 rounded-3xl ${theme === "dark" ? "bg-none" : "bg-white"} border-2 border-nav-border shadow-xl h-20 hidden flex-row items-center justify-between dark:text-white top-0 z-50 tablet:flex`}
          >
            <h1
              onClick={() => router.push("/")}
              className="font-medium cursor-pointer mob:p-2 laptop:p-0"
            >
              {name} &apos;24.
            </h1>
            {!isBlog ? (
              <div className="flex">
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>
                {showBlog && (
                  <Button onClick={() => router.push("/blog")}>Blog</Button>
                )}
                {showResume && (
                  <Button
                    onClick={() => router.push("/resume")}
                    classes="first:ml-1"
                  >
                    Resume
                  </Button>
                )}
                <Button
                  onClick={handleContactScroll}
                >
                  Contact
                </Button>
                {mounted && theme && data.darkMode && (
                  <Button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <div className="relative h-6 w-6">
                      <Image
                        src={theme === "dark" ? moonImg : sunImg}
                        alt="Theme Icon"
                        layout="fill"
                      />
                    </div>
                    {/* <img src={theme === "dark" ? "/images/moon.svg" : "/images/sun.svg"} alt="Theme Icon" className="h-6 w-6" /> */}
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex">
                <Button onClick={() => router.push("/")}>Home</Button>
                {showBlog && (
                  <Button onClick={() => router.push("/blog")}>Blog</Button>
                )}
                {showResume && (
                  <Button
                    onClick={() => router.push("/resume")}
                    classes="first:ml-1"
                  >
                    Resume
                  </Button>
                )}

                <Button onClick={handleContactScroll}>
                  Contact
                </Button>

                {mounted && theme && data.darkMode && (
                  <Button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <div className="relative h-6 w-6">
                      <Image
                        src={theme === "dark" ? moonImg : sunImg}
                        alt="Theme Icon"
                        layout="fill"
                      />
                    </div>
                  </Button>
                )}
              </div>
            )}
          </div>)
      }
    </div >
  );
};

export default Header;
