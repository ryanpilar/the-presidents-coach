import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';          // useParams allows the '/post/:id' to work

// Core Components
import NavBarMain from "components/navbars/NavBarMain.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderError from "components/headers/HeaderError.js";


import SEO from "components/seo/SEO";

function NotFound() {

  const [clickedProgram, setClickedProgram] = useState({color: useParams().color})

  const [icons, setIcons] = useState({
    on: "fas fa-star",
    off: "fas fa-chevron-circle-down",
  })

  const [iconStyle, setIconStyle] = useState({
    onIcon: {
      background: 'transparent',
      // boxShadow: "0 5px 10px rgba(0,0,0,.2)",
      textShadow: '2px 2px 4px rgba(0,0,0,.6)',
      padding: '1rem .5rem 0 2rem',},

    offIcon: {
      padding: '1rem .5rem 0 1.8rem', 
      paddingLeft: 'auto', 
      color:'#d2d2d2'
    },
      
  })
  const [ isGlowing, setIsGlowing ] = useState({
    coachOne: false,
    coachTwo: false,
    coachThree: false,
  })

  const [ glowCards, setGlowCards ] = useState({
    glowColor: '#ff68a2',
    ribbonColor: '#f29dc0',

    coachOne: {
      isGlowing: false,
      ribbonBorder: '#a0ebf8',
    },
    coachTwo: {
      isGlowing: true,
      ribbonBorder: '#a9ecd0',
    },
    coachThree: {
      isGlowing: false,
      ribbonBorder: '#fdc5b8',
    },
  })



  const changeGlow = (searchTerm) => {
    console.log('eeeee', searchTerm)
    resetGlow(searchTerm)

    if (searchTerm === 'coachOne') {setIsGlowing({coachOne: !isGlowing.coachOne})}
    if (searchTerm === 'coachTwo') {setIsGlowing({coachTwo: !isGlowing.coachTwo})}
    if (searchTerm === 'coachThree') {setIsGlowing({coachThree: !isGlowing.coachThree})}
 
  }
  const resetGlow = (e) => {
    setIsGlowing({coachOne: false})
    setIsGlowing({coachTwo: false})
    setIsGlowing({coachThree: false})
  }

  useEffect(() => {
    document.body.classList.add("profile-page");
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  
  useEffect( () => {
    const setUsersChoice = () => {
    
     
      if (clickedProgram.color === 'blue') {
        setIsGlowing({coachOne: true})
      }
      else if (clickedProgram.color === 'green') {
        setIsGlowing({coachTwo: true})
      } 
      else if (clickedProgram.color === 'orange') {
      setIsGlowing({coachThree: true})
      }
      else {
        
      }
    }

    setUsersChoice()

  }, []) 
 

  return (
    <>

      {/* SEO w/ React Helmet */}
      <SEO
        title={`The President's Coach | 404 Error, Ooops!`}
        // title={`Curated Coaching Programs`}
        description={
          "Mitch is an award winning executive coach"
        }
      />
        

      <div className='presentation-page'>
        {/* <DemoNavbar type="transparent" /> */}

        <NavBarMain type="primary" />
        <div className="wrapper">
          {/* <Header2 /> */}
          <HeaderError  />
          {/* <Feature6 /> */}
          

          {/* <Accordion1 /> */}

          <DemoFooter />
        </div>
      </div>
    </>
  );
}

export default NotFound;
