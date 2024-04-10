import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes";
import projectOneImg from "../public/images/project-one-uplift.png"
import projectTwoImg from "../public/images/project-two-envoy-frontend.png"
import projectThreeImg from "../public/images/project-two-envoy-frontend.png"

// Local Data
import data from "../data/portfolio.json";
import { useRouter } from "next/router";

function markWords(inputStr) {
  return inputStr.replace(/<([^>]*)>/g, <mark>$1</mark>)
}

export default function Home() {
  // Ref
  const contentContainerRef = useRef(null);
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const textFive = useRef();
  const [mounted, setMounted] = useState(false);
  const projectImgs = [projectOneImg, projectTwoImg, projectThreeImg];

  // Dark Mode Theme
  const { theme } = useTheme();
  const router = useRouter();
  const textColor = theme === 'dark' ? 'text-white' : 'text-current';

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

    // if (contentContainerRef.current) {
    //   contentContainerRef.current.scrollTo({
    //     top: workRef.current.offsetTop,
    //     left: 0,
    //     behavior: "smooth",
    //   })
    // }
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    // if (contentContainerRef.current) {
    //   contentContainerRef.current.scrollTo({
    //     top: aboutRef.current.offsetTop,
    //     left: 0,
    //     behavior: "smooth",
    //   })
    // }
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    // if (contentContainerRef.current) {
    //   contentContainerRef.current.scrollTo({
    //     top: contactRef.current.offsetTop,
    //     left: 0,
    //     behavior: "smooth",
    //   })
    // }
  };

  useEffect(() => {
    setMounted(true);
  }, [])

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current, textFive.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`content-container relative ${data.showCursor && "cursor-none"}`} ref={contentContainerRef}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="section pt-0 glass-bg">
        <div className="gradient-glass-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>
        <div className="container landing-container mb-10 mx-auto">
          <Header
            handleWorkScroll={handleWorkScroll}
            handleAboutScroll={handleAboutScroll}
            handleContactScroll={handleContactScroll}
          />
          <div className="laptop:mt-20 mt-10">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {/* {markWords(data.headerTaglineOne)} */}
                Hello, I&apos;m Rohan. 👋
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {/* {markWords(data.headerTaglineTwo)} */}
                I&apos;m an <mark className={`${textColor}`}>innovative</mark>,
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {/* {markWords(data.headerTaglineThree)} */}
                <mark className={`${textColor}`}>results-driven</mark>,
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {/* {markWords(data.headerTaglineFour)} */}
                <mark className={`${textColor}`}>full-stack developer</mark>,
              </h1>
              <h1
                ref={textFive}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {markWords(data.headerTaglineFive)}
              </h1>
            </div>
            <Socials className="mt-2 laptop:mt-5" handleContactScroll={handleContactScroll} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <div className="section" ref={workRef}>
          <div className="mt-10 laptop:mt-10 p-2 laptop:p-0">
            <h1 className="pt-30 text-2xl text-bold font-medium">Work.</h1>
            <div className="mt-5 laptop:mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-4">
              {data.projects.map((project, index) => (
                <WorkCard
                  key={project.id}
                  // img={project.imageSrc}
                  img={projectImgs[index]}
                  name={project.title}
                  description={project.description}
                  onClick={() => window.open(project.url)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="section w-full" ref={aboutRef}>
          <div className="mt-20 laptop:mt-20 p-2 laptop:p-0 w-full">
            <h1 className="pt-30 tablet:my-10 text-lg laptop:text-2xl text-bold font-medium">About.</h1>
            {mounted && (<p className="tablet:mt-10 mt-2 text-xl laptop:text-2xl w-full">
              {data.aboutpara.split('\n\n').map((paragraph, index) => (
                <div className={`${index === 0 ? "" : "mt-10"}`} key={index}>
                  {paragraph.split('\n').map((line, lineIndex) => (<p key={lineIndex}>{line}</p>))}
                </div>
              ))}
            </p>)}
          </div>
        </div>
        <div className="section w-full">
          <div className="footer mt-10">
            <Footer contactRef={contactRef} />
            <h1 className="text-sm text-bold mt-2 mt-5 p-2 laptop:p-0">
              Made by Rohan Agarwal, 2024.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
