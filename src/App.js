import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './App.css';
import backgroundImg from './img/background.png';
import fog7Img from './img/fog_7.png';
import mountain10 from './img/mountain_10.png'
import mountain7 from './img/mountain_7.png'
import mountain8 from './img/mountain_8.png'
import mountain9 from './img/mountain_9.png'
import mountain6 from './img/mountain_6.png'
import mountain5 from './img/mountain_5.png'
import mountain4 from './img/mountain_4.png'
import mountain3 from './img/mountain_3.png'
import mountain2 from './img/mountain_2.png'
import mountain1 from './img/mountain_1.png'
import fog6 from './img/fog_6.png'
import fog5 from './img/fog_5.png'
import fog4 from './img/fog_4.png'
import fog3 from './img/fog_3.png'
import fog2 from './img/fog_2.png'
import fog1 from './img/fog_1.png'
import blackShadow from './img/black_shadow.png'
import sunRays from './img/sun_rays.png'
import logo from './img/logo.png'

const App = () => {
  const main = useRef(null);
  const parallax_el = useRef([]);

  let xValue = 0;
  let yValue = 0;
  let rotateDegree = 0;

  const updateParallax = (cursorPosition) => {
    parallax_el.current.forEach((el) => {

      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      let speedz = el.dataset.speedz;
      let rotateSpeed = el.dataset.rotation

      let isInLeft =
        parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
      let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

      el.style.transform = `rotateY(${rotateDegree * rotateSpeed}deg) 
      translateX(calc(-50% + ${-xValue * speedx}px)) 
      translateY(calc(-50% + ${yValue * speedy}px)) 
      perspective(2300px) translateZ(${zValue * speedz}px)`
    })
  };
  updateParallax(0)

  useEffect(() => {
    parallax_el.current = Array.from(main.current.querySelectorAll('.parallax'));

    const timeline = gsap.timeline();

    Array.from(parallax_el)
      .filter((el) => !el.classList.contains("text"))
      .forEach((el) => {
        timeline.from(el, {
          top: `${el.offsetHeight / 2 + + el.dataset.distance}px`,
          duration: 3,
          ease: "power3.out"
        },
          "1"
        )
      })

    timeline.from(".text h1", {
      y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top,
      duration: 2,
    },
      "2.5"
    ).from(".text h2", {
      y: -150,
      opacity: 0,
      duration: 1.5,
    }, "3"
    )
      .from(".hide", {
        opacity: 0,
        duration: 1.5,
      }, "3")


    const handleMouseMove = (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;
      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
      updateParallax(e.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    if (window.innerWidth >= 725) {
      main.current.style.maxHeight = `${window.innerWidth * 0.6}px`;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div>
      <header className="hide">
        <nav>
          <img src={logo} alt="Travelo" className="logo" />
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li className="search">
              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li className="hamburger">
              <a href="#">
                <div className="bar"></div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main ref={main}>
        <div className="vignette hide"></div>
        <img
          src={backgroundImg}
          data-speedx="0.3"
          data-speedy="0.38"
          data-speedz="0"
          data-distance="-200"
          data-rotation="0"
          className="parallax bg-img"
        />

        <img src={fog7Img} data-speedx="0.27" data-speedy="0.27" data-speedz="0" data-distance="850" data-rotation="0" className="parallax fog-7" />
        <img src={mountain10} data-speedx="0.195" data-speedy="0.305" data-speedz="0" data-distance="1100" data-rotation="0" className="parallax mountain-10" />
        <img src={fog6} data-speedx="0.25" data-speedy="0.28" data-speedz="0" data-distance="1400" data-rotation="0" className="parallax fog-6" />
        <img src={mountain9} data-speedx="0.125" data-speedy="0.155" data-speedz="0.15" data-distance="1700" data-rotation="0.02" className="parallax mountain-9" />
        <img src={mountain8} data-speedx="0.1" data-speedy="0.1" data-speedz="0" data-distance="1800" data-rotation="0.02" className="parallax mountain-8" />
        <img src={fog5} data-speedx="0.16" data-speedy="0.105" data-speedz="0" data-distance="1900" data-rotation="0" className="parallax fog-5" />
        <img src={mountain7} data-speedx="0.1" data-speedy="0.1" data-speedz="0" data-distance="2000" data-rotation="0.09" className="parallax mountain-7" />
        <div className="text parallax" data-speedx="0.07" data-speedy="0.07" data-speedz="0" data-distance="0" data-rotation="0.11">
          <h2>China</h2>
          <h1>Zhangjiajie</h1>
        </div>
        <img src={mountain6} data-speedx="0.065" data-speedy="0.05" data-speedz="0.05" data-distance="2300" data-rotation="0.12" className="parallax mountain-6" />
        <img src={fog4} data-speedx="0.135" data-speedy="0.32" data-speedz="0" data-distance="2400" data-rotation="0" className="parallax fog-4" />
        <img src={mountain5} data-speedx="0.08" data-speedy="0.08" data-speedz="0.13" data-distance="2550" data-rotation="0" className="parallax mountain-5" />
        <img src={fog3} data-speedx="0.11" data-speedy="0.18" data-speedz="0" data-distance="2800" data-rotation="0" className="parallax fog-3" />
        <img src={mountain4} data-speedx="0.0" data-speedy="0.01" data-speedz="0" data-distance="3000" data-rotation="0" className="parallax mountain-4" />
        <img src={mountain3} data-speedx="0.04" data-speedy="0.018" data-speedz="0.32" data-distance="3200" data-rotation="0" className="parallax mountain-3" />
        <img src={fog2} data-speedx="0.15" data-speedy="0.0115" data-speedz="0" data-distance="3400" data-rotation="0" className="parallax fog-2" />
        <img src={mountain2} data-speedx="0.0235" data-speedy="0.013" data-speedz="0" data-distance="3800" data-rotation="0.15" className="parallax mountain-2" />
        <img src={mountain1} data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" data-distance="4000" data-rotation="0.2" className="parallax mountain-1" />
        <img src={sunRays} className="parallax sun-rays hide" />
        <img src={blackShadow} class="parallax black-shadow hide" />
        <img src={fog1} data-speedx="0.12" data-speedy="0.01" data-speedz="0" data-distance="4200" data-rotation="0" class="parallax fog-1" />


      </main>
    </div>
  );
}


export default App;
