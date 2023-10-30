import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import checkMark from "../../assets/icons/green-checkmark.png";
import Loader from "../Loader/Loader";
export default function ContactUsForm() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showReturnMessage, setShowReturnMessage] = useState(false);
  const [loader,setLoader] = useState(false);
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    setLoader(true);
    emailjs
      .sendForm(
        "service_f70lj5y",
        "template_pcaw0ki",
        form.current,
        "mKQbMcbtFMgGEllsi"
      )
      .then(
        (result) => {
          setLoader(false);
          console.log(result);
          displayMessage();
          setPhoneNumber("");
          setFullName("");
          setSubject("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const displayMessage = () => {
    setShowReturnMessage(true);
    setTimeout(() => {
      setShowReturnMessage(false);
    }, 2000);
  };
  return (
    <>
      {showReturnMessage ? (
        <div className="returnMessage">
          <div className="returnMessage__wrapper">
            <div className="returnMessage__imageWrapper">
              <img
                className="returnMessage__image"
                alt="icon"
                src={checkMark}
              />
            </div>
            <div className="returnMessage__infoContainer">
              <h1 className="returnMessage__label">SUCCESS!</h1>
              <span className="returnMessage__value">
                Your message has been sent successfuly!
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="contactusBlock">
        <h1 className="contactusBlock__title">Send Message</h1>
        <form ref={form} className="contactusBlock__form" onSubmit={submitForm}>
          <div className="contactusBlock__inputWrapper">
            <div className="contactusBlock__first-block">
              <input
                required
                type="text"
                name="fullName"
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="contactusBlock__inputField"
              />
              <input
                required
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="contactusBlock__inputField"
              />
            </div>
            <div className="contactusBlock__second-block">
              <input
                required
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contactusBlock__inputField"
              />
              <input
                required
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contactusBlock__inputField"
              />
            </div>
          </div>
          <textarea
            required
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contactusBlock__textArea"
          />
          <button className="contactusBlock__submitBtn" type="submit">
            Submit
          </button>
          {loader ? 
        <Loader/> : ''
        }
        </form>
      </div>
    </>
  );
}
