import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
// import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { globalHistory } from "@reach/router"
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import { gsap } from "gsap";

const Header = () => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    // Listening for page changes.
    // props.location.state.prevPath.listen(() => {
        // if(props.location.pathname!==props.location.state.prevPath)
        console.log('globalHistory.location.pathname',globalHistory.location.pathname)
      setState({ clicked: false, menuName: "Menu" });
    // });
  }, [globalHistory.location.pathname]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <TransitionLink

                      exit={{
                        length: 1,
                        trigger: ({ exit,node }) =>{
                            gsap.to([node.querySelector('.menu-layer'), node.querySelector('.menu-secondary-background-color')], {
                                duration: 0.8,
                                height: 0,
                                ease: "power3.inOut",
                                stagger: {
                                  amount: 0.07
                                }
                              });
                              gsap.to(node.querySelector('.content'), {
                                duration: 0,
                                opacity: 0,
                              });

                        
                      }}}
                      entry={{
                        delay: 0, // new page appear
                        // length: 1,
                        trigger: ({ entry, node }) => {
                            let content = node.querySelector('.content')
                            content.style.opacity='0'
                            // gsap.to([node.querySelector('.menu-layer'), node.querySelector('.menu-secondary-background-color')], {
                            //     duration: 0.8,
                            //     height: 0,
                            //     ease: "power3.inOut",
                            //     stagger: {
                            //       amount: 0.07
                            //     }
                            //   });
                            gsap.to(node.querySelector('.content'), {
                                delay: .5,
                                duration:.5,
                                opacity: 1,
                                ease: "power3.inOut",
                              });
                        }
                      }}
                      to='/'>
                      Tomoya Kuroda
                    </TransitionLink>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
