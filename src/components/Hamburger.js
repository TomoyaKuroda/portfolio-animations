import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { Link } from "gatsby";
import TransitionLink, {
  TransitionPortal
} from "gatsby-plugin-transition-link";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

// import dallas from "../images/dallas.webp";
// import austin from "../images/austin.webp";
// import newyork from "../images/newyork.webp";
// import sanfrancisco from "../images/sanfrancisco.webp";
// import beijing from "../images/beijing.webp";

// const cities = [
//   { name: "Dallas", image: dallas },
//   { name: "Austin", image: austin },
//   { name: "New York", image: newyork },
//   { name: "San Francisco", image: sanfrancisco },
//   { name: "Beijing", image: beijing }
// ];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = React.createRef();
  let line2 = React.createRef();
  let line3 = React.createRef();
  let info = useRef(null);

  const animationTest = () => staggerRevealClose(reveal2, reveal1);
  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.
      console.log("staggerRevealClose");
      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={el => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={el => (reveal2 = el)} className="menu-layer">
        <div
          ref={el => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li ref={el => (line1 = el)}>
                    <TransitionLink
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      exit={{
                        length: 1,
                        trigger: ({ exit, node }) => {
                          gsap.to(
                            [
                              node.querySelector(".menu-layer"),
                              node.querySelector(
                                ".menu-secondary-background-color"
                              )
                            ],
                            {
                              duration: 0.8,
                              height: 0,
                              ease: "power3.inOut",
                              stagger: {
                                amount: 0.07
                              }
                            }
                          );
                          gsap.to(node.querySelector(".content"), {
                            duration: 0,
                            opacity: 0
                          });
                        }
                      }}
                      entry={{
                        delay: 0, // new page appear
                        // length: 1,
                        trigger: ({ entry, node }) => {
                          let content = node.querySelector(".content");
                          content.style.opacity = "0";
                          // gsap.to([node.querySelector('.menu-layer'), node.querySelector('.menu-secondary-background-color')], {
                          //     duration: 0.8,
                          //     height: 0,
                          //     ease: "power3.inOut",
                          //     stagger: {
                          //       amount: 0.07
                          //     }
                          //   });
                          gsap.to(node.querySelector(".content"), {
                            delay: 0.5,
                            duration: 0.5,
                            opacity: 1,
                            ease: "power3.inOut"
                          });
                        }
                      }}
                      to="/"
                    >
                      Home
                    </TransitionLink>
                  </li>
                  <li ref={el => (line2 = el)}>
                    <TransitionLink
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      exit={{
                        length: 1,
                        trigger: ({ exit, node }) => {
                          gsap.to(
                            [
                              node.querySelector(".menu-layer"),
                              node.querySelector(
                                ".menu-secondary-background-color"
                              )
                            ],
                            {
                              duration: 0.8,
                              height: 0,
                              ease: "power3.inOut",
                              stagger: {
                                amount: 0.07
                              }
                            }
                          );
                          gsap.to(node.querySelector(".content"), {
                            duration: 0,
                            opacity: 0
                          });
                        }
                      }}
                      entry={{
                        delay: 0, // new page appear
                        // length: 1,
                        trigger: ({ entry, node }) => {
                          let content = node.querySelector(".content");
                          content.style.opacity = "0";
                          // gsap.to([node.querySelector('.menu-layer'), node.querySelector('.menu-secondary-background-color')], {
                          //     duration: 0.8,
                          //     height: 0,
                          //     ease: "power3.inOut",
                          //     stagger: {
                          //       amount: 0.07
                          //     }
                          //   });
                          gsap.to(node.querySelector(".content"), {
                            delay: 0.5,
                            duration: 0.5,
                            opacity: 1,
                            ease: "power3.inOut"
                          });
                        }
                      }}
                      to="/projects"
                    >
                      Projects
                    </TransitionLink>
                  </li>
                  <li ref={el => (line3 = el)}>
                    <TransitionLink
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      exit={{
                        length: 1,
                        trigger: ({ exit, node }) => {
                          gsap.to(
                            [
                              node.querySelector(".menu-layer"),
                              node.querySelector(
                                ".menu-secondary-background-color"
                              )
                            ],
                            {
                              duration: 0.8,
                              height: 0,
                              ease: "power3.inOut",
                              stagger: {
                                amount: 0.07
                              }
                            }
                          );
                          gsap.to(node.querySelector(".content"), {
                            duration: 0,
                            opacity: 0
                          });
                        }
                      }}
                      entry={{
                        delay: 0, // new page appear
                        // length: 1,
                        trigger: ({ entry, node }) => {
                          let content = node.querySelector(".content");
                          content.style.opacity = "0";
                          // gsap.to([node.querySelector('.menu-layer'), node.querySelector('.menu-secondary-background-color')], {
                          //     duration: 0.8,
                          //     height: 0,
                          //     ease: "power3.inOut",
                          //     stagger: {
                          //       amount: 0.07
                          //     }
                          //   });
                          gsap.to(node.querySelector(".content"), {
                            delay: 0.5,
                            duration: 0.5,
                            opacity: 1,
                            ease: "power3.inOut"
                          });
                        }
                      }}
                      to="/contact"
                    >
                      Contact me
                    </TransitionLink>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className="info">
                {/* <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p> */}
              </div>
              <div className="locations">
                {/* Locations: */}
                {/* Returning the list of cities */}
                {/* {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
