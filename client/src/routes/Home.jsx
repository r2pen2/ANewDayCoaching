import React, { useState } from 'react'
import { lightGreen, lightBlue } from '../assets/style/colors'
import "../assets/style/home.css";
import logo from "../assets/images/logo.png";
import rachel from "../assets/images/rachel.png";
import glyph from "../assets/images/crystal.png";

import {WLTextV2, WLHeaderV2} from "../libraries/Web-Legos/components/Text";
import { Spacer } from '@nextui-org/react';

import {WaveBottom, WaveTop} from "../libraries/Web-Legos/components/Waves"

export default function Home() {
  
  const [sectionColors, setSectionColors] = React.useState({
    home: lightGreen,
    about: lightBlue
  })
  
  const Splash = () => {

    const Logo = () => (
      <img src={logo} alt="logo-full" style={{maxWidth: 500, maxHeight: 500, height:"100%", width: "100%", filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.5)"}}/>
    )

    return (
      <section id="home" className="d-flex flex-lg-row flex-column align-items-center justify-content-center w-100" style={{minHeight: 800, backgroundColor: sectionColors.home}}>
        <div className="container">
          <div className="row px-2 d-flex flex-row align-items-center justify-content-center">
            <div className="col-xxl-5 col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
              <Logo />
            </div>
            <div className="col-xxl-5 col-lg-6 col-12 py-3 flex-column align-items-center justify-content-center">
              <div className="d-flex flex-column gap-2" style={{maxWidth: 800}}>
                <hgroup className='text-left' style={{padding: 0}}>
                  <WLHeaderV2 h1>
                    One on one virtual and in person coaching for emerging adults: High School, College and postgraduate students.
                  </WLHeaderV2>
                  <div className="coaching-line" />
                  <WLTextV2>
                    Our coaches are committed to helping students reach their full potential by developing essential executive function skills. By partnering with our coaches, students can expect to enhance their organization, time management, task initiation and planning skills, empowering them to excel in their academics and beyond. We are here to provide personalized guidance tailored to meet the unique needs of each individual.
                  </WLTextV2>
                </hgroup>
                <div className="d-flex flex-row align-items-start justify-content-center justify-content-lg-start gap-2 pt-2">
                  <button>Book Now</button>
                  <button>My Apps</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const About = () => {
    return (
      <section id="about" className="w-100" style={{backgroundColor: sectionColors.about, position: "relative"}}>
        <WaveBottom color={sectionColors.home}/>
        <div className="d-flex gap-5 flex-row align-items-center justify-content-center" style={{paddingInline: 250}}>
          <img src={rachel} style={{height: "100%", maxHeight: 500}} alt="Rachel Dayanim" />
          <div className="text-left">
            <WLHeaderV2 h1>About Rachel</WLHeaderV2>
            <div className="coaching-line" />
            <WLTextV2>
              Rachel is the founder of A New Day Coaching, cultivating an innovative “work smarter, not harder” approach to mentorship for teens and college students with ADHD and executive function challenges. Rachel has also designed curricula on the topic of special needs and has presented at a wide array of conferences for several regional organizations on topics such as Executive Function and Learning Differences.
              Rachel has dedicated her career to education and supporting students across multiple disciplines and spectrums of need. She strongly believes in the value of every client and their remarkable potential to succeed. She prioritizes building meaningful relationships: “I hold a deep love for teaching, but I love learning from my clients too. I want to develop a sense of trust with each client, as it is an essential component in generating meaningful change.”
              In addition to coaching, Rachel was the Director of Support Services at a private school in Brookline, MA. She was also previously a Senior Coach at Beyond Booksmart. and currently works as a Collegiate Life Specialist at Focus Collegiate in Boston, MA.
            </WLTextV2>
          </div>
        </div>
        <Spacer y={2} />
        <div className="d-flex gap-5 flex-row align-items-center justify-content-center" style={{paddingInline: 250}}>
          <div className="w-50">
            <WLHeaderV2 h1>Co-Active Approach</WLHeaderV2>
            <div className="coaching-line" />
            <WLTextV2 align="left">
              Rachel takes a “co-active” approach to coaching, a model founded on the belief that every client is naturally creative, resourceful, and whole. “Every individual has an inherent desire to succeed,” she says, “But they sometimes lack the requisite skills to do so. I consistently strive to understand each student’s own agenda and work around that framework instead of imposing my own.”
            </WLTextV2>
          </div>
          <div className="w-50">
            <WLHeaderV2 h1>Education and Interests</WLHeaderV2>
            <div className="coaching-line" />
            <WLTextV2 align="left">
              Rachel holds a Master of Arts in Special Education from Columbia University, where she specialized in learning disabilities. She also has a Bachelor of Arts degree in Early Childhood and Elementary Education from Yeshiva University. She holds a coaching certification from (JST) coaching. She lives in Newton, Massachusetts and enjoys spending time outdoors, experimenting with new recipes and playing mahjongg.
            </WLTextV2>
          </div>
        </div>
      </section>
    )
  }

  const WhyCoaching = () => {
  
    const Left = () => (
      <div className="d-flex flex-column align-items-center justify-content-center py-2" style={{maxWidth: 650}}>
        <WLHeaderV2 h1>Why Coaching?</WLHeaderV2>
        <div className="coaching-line" />
        <WLTextV2>
          The choice to engage with a coach requires dedication and commitment from both the client and their family. Investing in a team member to support the student and family can help to preserve the relationship and family. Your coach is here as a bridge between you and your child. They can ask the hard questions without the same emotional involvement. Every parent should have the opportunity to to celebrate their child so that their strengths will shine.
        </WLTextV2>
      </div>
    )
    
    const Right = () => (
      <div className="d-flex flex-column align-items-center justify-content-center py-2" style={{maxWidth: 650}}>
        <WLHeaderV2 h1>Our Approach</WLHeaderV2>
        <div className="coaching-line" />
        <WLTextV2>
          At A New Day Coaching, we combine the educational elements of academic tutoring with the benefits of ADHD coaching. This helps us to better understand the individual strengths and challenges of each of our clients. It also enables us to create a program that maximizes these strengths while targeting the specific areas that are in need of support. At New Day Coaching, our approach is a holistic one. We view the client as creative, resourceful and whole, and we aim to create learning opportunities and share tools  that are transferable beyond academics.
        </WLTextV2>
      </div>
    )
  
    return (
      <section className="w-100 d-flex flex-column align-items-center justify-content-center py-2 px-2 px-xl-5" id="why-coaching" style={{zIndex: 2}}>
        <section className="wl-glyph-section-two-items-no-actions d-none d-xl-flex align-items-center justify-content-center wl-gap-3">
            <Left />
            <div className="wl-glyph-section-two-items-no-actions-glyph-container d-flex flex-column align-items-center justify-content-center">
              <img src={glyph} alt="glyph" style={{minWidth: 150, maxWidth: 300}} data-testid="wl-glyph-section-glyph" />
            </div>
            <Right />
          </section>
          <section className="wl-glyph-section-two-items-no-actions d-flex flex-column d-xl-none">
            <div className="wl-glyph-section-two-items-no-actions-md-container container-fluid">
              <div className="row">
                <section className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center"><Left /></section>
                <section className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center"><Right /></section>
              </div>
            </div>
            <div className="wl-glyph-section-two-items-no-actions-glyph-container">
              <img src={glyph} alt="glyph" style={{minWidth: 150, maxWidth: 300}} data-testid="wl-glyph-section-glyph" />
            </div>
          </section>
      </section>
    )
  }
  
  return [
    <Splash />,
    <About />,
    <WhyCoaching />
  ]
}
