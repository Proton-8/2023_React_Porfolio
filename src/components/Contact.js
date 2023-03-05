import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// const    clickHandler = () =>{
//   console.log("We have a click !!!")};
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_egi4vah",
        "template_62jo4fn",
        form.current,
        "user_mKp2h1I3qs8RuKuoeS7TP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    
    <section id="contact"  ><h3 >
    CONTACT ME </h3>
      <form ref={form} onSubmit={sendEmail}>
        <label> Name</label>
        <input type="text" name="user_name" />
        <label> Email</label>
        <input type="email" name="user_email" />
        <label> Message</label>
        <textarea name="message" />
        <input type="submit" color="333" value=" Send " />
      </form>

      {/* <button onClick={clickHandler}>TEST 123 </button> */}
    </section>
  );
};
