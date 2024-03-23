import React, { useContext, useEffect, useState } from 'react'
import { lightGreen, lightBlue, mint } from '../assets/style/colors'
import "../assets/style/home.css";
import logo from "../assets/images/logo.png";
import rachel from "../assets/images/rachel.jpg";
import glyph from "../assets/images/sun.png";
import { IconAt } from '@tabler/icons-react';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

import Marquee from 'react-fast-marquee'

import {WLTextV2, WLHeaderV2 } from "../libraries/Web-Legos/components/Text";
import {WLImageV2} from "../libraries/Web-Legos/components/Images.jsx"
import { Loading, Modal, Spacer, Text } from '@nextui-org/react';

import {WaveBottom, WaveTop} from "../libraries/Web-Legos/components/Waves"

import {Accordion, Input, Paper, Textarea} from "@mantine/core"
import { CurrentSignInContext } from '../App';
import { AuthenticationManager } from '../libraries/Web-Legos/api/auth.ts';

import { ANDCMailManager } from '../App';
import { FormResponse } from '../libraries/Web-Legos/api/admin.ts';

import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  
  const [sectionColors, setSectionColors] = React.useState({
    home: lightGreen,
    about: lightBlue,
    contact: "#9da897"
  })


  const [recaptchaModalOpen, setRecaptchaModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {currentSignIn} = useContext(CurrentSignInContext);
  const {authenticationManager} = useContext(AuthenticationManager.Context)
  
  const [userCanEditText, setUserCanEditText] = useState(false);
  const [userCanEditImages, setUserCanEditImages] = useState(false);
  
  useEffect(() => {
    authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    authenticationManager.getPermission(currentSignIn, "siteImages").then(p => setUserCanEditImages(p));
  }, [currentSignIn, authenticationManager]);

  
  const [splashLoaded, setSplashLoaded] = useState(false);

  const Splash = () => {

    const Logo = () => (
      <img src={logo} alt="logo-full" style={{maxWidth: 500, maxHeight: 500, height:"100%", width: "100%", filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.5)"}}/>
    )

    return (
      <section id="home" className="d-flex flex-lg-row flex-column align-items-center justify-content-center w-100" style={{minHeight: 800, backgroundColor: sectionColors.home}}>
        <div className="container">
          <div className="row px-2 py-5 d-flex flex-row align-items-center justify-content-center">
            <div className="col-xxl-5 col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
              <Logo />
              { !splashLoaded && <Loading type="points" size='lg' /> }
            </div>
            <div className="col-lg-6 col-12 py-3 flex-column align-items-center justify-content-center loadable-transition" style={{width: splashLoaded ? null : 0, opacity: splashLoaded ? 1 : 0}}>
              <div className="d-flex flex-column gap-2" style={{maxWidth: 800}}>
                <hgroup className='text-left' style={{padding: 0}}>
                  <WLHeaderV2 h1 editable={userCanEditText} firestoreId="main-header" setLoaded={setSplashLoaded} style={{height: splashLoaded ? null : 0}} />
                  <div className="coaching-line" />
                  <WLTextV2 editable={userCanEditText} firestoreId="main-subtitle" style={{height: splashLoaded ? null : 0}} />
                </hgroup>
                <div className="d-flex flex-row align-items-start justify-content-center justify-content-lg-start gap-2 pt-2">
                  <button className="coaching-button">Learn More</button>
                  {/* <button className="coaching-button">My Apps</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const About2 = () => {
    return (
      <section id="about" className="w-100 d-flex flex-column align-items-center pb-5" style={{backgroundColor: sectionColors.about, position: "relative"}}>
        <WaveBottom color={sectionColors.home}/>
        <div className="d-flex gap-5 flex-row align-items-center justify-content-center px-3 pt-5" style={{maxWidth: 1400}}>
          <WLImageV2 editable={userCanEditImages} firestoreId="about-headshot" style={{height: "100%", maxHeight: 500}} alt="Rachel Dayanim" className='d-none d-lg-block' />
          <div className="text-left">
            <WLHeaderV2 h1 align="center" editable={userCanEditText} firestoreId="about-header" />
            <div className="coaching-line" />
            <WLTextV2 editable={userCanEditText} firestoreId="about-blurb" />
          </div>
        </div>
        <img src={rachel} style={{height: "100%", maxHeight: 500, marginTop:"2rem"}} alt="Rachel Dayanim" className='d-block d-lg-none' />
      </section>
    )
  }

  const WhyCoaching2 = () => {
    
    const WhyPaper = ({id}) => (
      <div className="p-2 col-6 col-md-4 col-xl-3">
        <Paper shadow="sm" radius="xs" withBorder p="xl" className='why-paper h-100 d-flex flex-column align-items-center justify-content-center'>
          <WLTextV2 size={20} firestoreId={id} editable={userCanEditText} />
        </Paper>
      </div>
    )

    return (
      <section className="w-100 d-flex flex-column align-items-center justify-content-center" id="why-coaching" style={{zIndex: 2, position: "relative"}}>
        <WaveBottom color={sectionColors.about} flipX />
        <section className="d-flex flex-column w-100 align-items-center justify-content-center px-2 px-lg-5">
          <WLHeaderV2 h1 editable={userCanEditText} firestoreId="why-coaching-header"/>
          <div className="container d-flex flex-column align-items-center">
            <div className="coaching-line"/>
            <WLTextV2 size={24} editable={userCanEditText} firestoreId="why-coaching-subtitle" />
            <div className="row w-100 d-flex flex-row justify-content-center" >
              <WhyPaper id="card-navigate" />
              <WhyPaper id="card-discover" />
              <WhyPaper id="card-direction" />
              <WhyPaper id="card-overcome" />
              <WhyPaper id="card-accountable" />
              <WhyPaper id="card-organized" />
              <WhyPaper id="card-create" />
              <WhyPaper id="card-achieve" />
            </div>
          </div>
        </section>
        <Spacer y={1} />
        <img src={glyph} alt="glyph" style={{minWidth: 150, maxWidth: 300}} data-testid="wl-glyph-section-glyph" />
        <section id="services" className='w-100 d-flex flex-column align-items-center py-5 px-2'>
          <WLHeaderV2 editable={userCanEditText} firestoreId="services-header" />
          <div className="coaching-line" style={{maxWidth: 1000}} />
          <Accordion variant='contained' style={{maxWidth: 1000, width: "100%"}}>
            <Accordion.Item key="coaching" value="coaching">
              <Accordion.Control style={{fontSize:"24px"}}>Coaching</Accordion.Control>
              <Accordion.Panel>
                <WLTextV2 align="left" editable={userCanEditText} firestoreId="services-coaching" />
                <div className="w-100 d-flex justify-content-center">
                  <button className="coaching-button">Sign Up</button>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key="workshops" value="workshops">
              <Accordion.Control style={{fontSize:"24px"}}>Workshops and Training</Accordion.Control>
              <Accordion.Panel>
                <WLTextV2 align="left" editable={userCanEditText} firestoreId="services-workshops" />
                <div className="container">
                  <div className="row w-100">
                    <div className="p-2 col-12 col-md-4">
                      <WLTextV2 editable={userCanEditText} firestoreId="services-workshops-example-1" />
                    </div>
                    <div className="p-2 col-12 col-md-4">
                      <WLTextV2 editable={userCanEditText} firestoreId="services-workshops-example-2" />
                    </div>
                    <div className="p-2 col-12 col-md-4">
                      <WLTextV2 editable={userCanEditText} firestoreId="services-workshops-example-3" />
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <button className="coaching-button">Sign Up</button>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key="courses" value="courses">
              <Accordion.Control style={{fontSize:"24px"}}>Courses</Accordion.Control>
              <Accordion.Panel>
                <WLTextV2 align="left" editable={userCanEditText} firestoreId="services-courses" />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </section>
      </section>
    )
  }

  const Contact = () => {
    
    const ThankYou = () => (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <MarkEmailReadOutlinedIcon style={{fontSize: 64}} />
        <WLTextV2 firestoreId="thank-you" editable={userCanEditText} />
      </div>
    )

    const tickerItems = ["Organize", "Manage Your Time", "Plan", "Prioritize", "Initiate", "Maintain Focus"]

    const FormContent = () => {
      if (formSubmitted) {
        return <ThankYou />
      }
      return [
        <Input key="name-input" id="name" placeholder="Your Name" size='lg' aria-label='Your Name' className='kiwi w-100' />,
        <Input key="email-input" id="email" placeholder="Your Email" size='lg' aria-label='Your Email' className='kiwi w-100' leftSection={<IconAt size={16} />} />,
        <Textarea key="message-input" id="message" placeholder="Message" size='lg' aria-label='Message' className='kiwi w-100' />,
        <button key="submit-button" className='coaching-button' onClick={() => setRecaptchaModalOpen(true)}>Let's Connect</button>
      ]
    }

    return (
      <section id="contact" className="d-flex flex-column align-items-center justify-content-center w-100 pb-5" style={{backgroundColor: sectionColors.contact, position: "relative"}}>
      <WaveTop flipY color={"white"} />
        <Spacer y={2} />
        <div style={{maxWidth: 1000}} className='mt-3 gap-2 px-2 px-md-3 w-100 d-flex flex-column align-items-center'>
          <WLTextV2 size={24} editable={userCanEditText} firestoreId="contact-quote" />
          <Spacer y={0.5} />
          <form style={{backgroundColor: "white", }} className='shadow w-100 p-2 p-md-3 d-flex flex-column align-items-center gap-2'>
            <FormContent />
          </form>
          <Spacer y={1} />
        </div>
        <div className="w-100 pt-4">
          <Marquee autoFill>
            {tickerItems.map((tickerItem, index) => (<Text className='px-5' size="$2xl" key={index}>{tickerItem}</Text>))}
          </Marquee>
        </div>
      </section>
    )
  }

  const CaptchaModal = () => {
    
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;

    function sendForm() {
      function getEmailBody() {
        const body = `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Message: ${message}`;
        return body;
      }

      console.log(getEmailBody());

      ANDCMailManager.sendMail(
        `New ANewDayCoaching Contact Form Submission from ${name}`,
        getEmailBody()
      );

      const res = new FormResponse();
      res.content["Name"] = name;
      res.content["Email"] = email;
      res.content["Message"] = message;
      res.shortStrings.formId = "contact";
      res.shortStrings.formTitle = "Contact";
      res.sendFormData();
    }

  function handleCaptchaComplete(v) {
    if (v.length < 1) {
      setRecaptchaModalOpen(false);
      return;
    }
    sendForm();
    setFormSubmitted(true);
    setRecaptchaModalOpen(false);
  }

    return(<Modal
      blur
      open={recaptchaModalOpen}
      onClose={() => setRecaptchaModalOpen(false)}
      closeButton
    >
      <Modal.Body      
        className="d-flex flex-column w-100 align-items-center text-center py-3"
      >
        <Text>
          Prove that you're human:
        </Text>
        <ReCAPTCHA
          onChange={handleCaptchaComplete}
          sitekey="6LfuCIwmAAAAAOx25tZVJk5Jrw4hjjYWBPHU4IhU"
        />
      </Modal.Body>
    </Modal>)
  }
  
  return [
    <Splash />,
    <About2 />,
    <WhyCoaching2 />,
    <CaptchaModal />,
    <Contact />,
  ]
}
