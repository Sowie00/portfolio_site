import React from "react";
import Link from "next/link";
import useInput from "../../hooks/use-input";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
const Contact = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredPhoneIsValid &&
      !enteredSubjectIsValid &&
      !enteredMessageIsValid
    ) {
      return;
    }

    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
    resetPhoneInput();
    resetSubjectInput();
  };
  ``;

  let nameInputClasses = "";
  let emailInputClasses = "";
  let subjectInputClasses = "";
  let phoneInputClasses = "";
  let messageInputClasses = "";

  if (nameInputHasError) {
    nameInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-red-300 bg-white";
  } else if (enteredNameIsValid) {
    nameInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-green-300 bg-white";
  } else {
    nameInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-indigo-500 bg-white";
  }

  if (phoneInputHasError) {
    phoneInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-red-300 bg-white";
  } else if (enteredPhoneIsValid) {
    phoneInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-green-300 bg-white";
  } else {
    phoneInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-indigo-500 bg-white";
  }

  if (emailInputHasError) {
    emailInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-red-300 bg-white";
  } else if (enteredEmailIsValid) {
    emailInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-green-300 bg-white";
  } else {
    emailInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-indigo-500 bg-white";
  }

  if (subjectInputHasError) {
    subjectInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-red-300 bg-white";
  } else if (enteredSubjectIsValid) {
    subjectInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-green-300 bg-white";
  } else {
    subjectInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-indigo-500 bg-white";
  }

  if (messageInputHasError) {
    messageInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-red-300 bg-white";
  } else if (enteredMessageIsValid) {
    messageInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-green-300 bg-white";
  } else {
    messageInputClasses =
      "border-2 rounded-lg focus:outline-none p-3 flex border-indigo-500 bg-white";
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Sourav Pandya</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's discuss!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#5651e1]">Connect With Me</p>
                <div className="flex items-center justify-start py-4">
                  <Link href="https://www.linkedin.com/in/sourav-pandya-a999a7204/">
                    <div className="rounded-full mx-3 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-indigo-500 ease-in duration-200">
                      <FaLinkedinIn color="#5651e1" />
                    </div>
                  </Link>
                  <Link href="https://github.com/Sowie00">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-indigo-500 ease-in duration-200">
                      <FaGithub color="#5651e1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={submitFormHandler}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="uppercase text-sm py-2 text-[#5651e1]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={nameChangedHandler}
                      onBlur={nameBlurHandler}
                      value={enteredName}
                      className={nameInputClasses}
                    />
                    {nameInputHasError && (
                      <p className="text-red-500">Name must not be empty!</p>
                    )}
                    {enteredNameIsValid && (
                      <p className="text-green-400 flex p-1">
                        Looks good
                        <div className="ml-2 flex items-center">
                          <FcCheckmark size={18} />
                        </div>
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="uppercase text-sm py-2 text-[#5651e1]"
                    >
                      phone number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      onChange={phoneChangedHandler}
                      onBlur={phoneBlurHandler}
                      value={enteredPhone}
                      className={phoneInputClasses}
                    />
                    {phoneInputHasError && (
                      <p className="text-red-500">
                        Phone number must be 10 digits and in the form
                        XXX-XXX-XXXX or XXX XXX XXXX
                      </p>
                    )}
                    {enteredPhoneIsValid && (
                      <p className="text-green-400 flex p-1">
                        Looks good
                        <div className="ml-2 flex items-center">
                          <FcCheckmark size={18} />
                        </div>
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label
                    htmlFor="email"
                    className="uppercase text-sm py-2 text-[#5651e1]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                    className={emailInputClasses}
                  />
                  {emailInputHasError && (
                    <p className="text-red-500">
                      Email field cannot be empty and must include '@'
                    </p>
                  )}
                  {enteredEmailIsValid && (
                    <p className="text-green-400 flex p-1">
                      Looks good
                      <div className="ml-2 flex items-center">
                        <FcCheckmark size={18} />
                      </div>
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label
                    htmlFor="subject"
                    className="uppercase text-sm py-2 text-[#5651e1]"
                  >
                    subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    onChange={subjectChangedHandler}
                    onBlur={subjectBlurHandler}
                    value={enteredSubject}
                    className={subjectInputClasses}
                  />
                  {subjectInputHasError && (
                    <p className="text-red-500">
                      Subject field cannot be empty!
                    </p>
                  )}
                  {enteredSubjectIsValid && (
                    <p className="text-green-400 flex p-1">
                      Looks good
                      <div className="ml-2 flex items-center">
                        <FcCheckmark size={18} />
                      </div>
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label
                    htmlFor="message"
                    className="uppercase text-sm py-2 text-[#5651e1]"
                  >
                    message
                  </label>
                  <textarea
                    className={messageInputClasses}
                    name="message"
                    id="message"
                    onChange={messageChangedHandler}
                    onBlur={messageBlurHandler}
                    value={enteredMessage}
                    rows="10"
                  ></textarea>
                  {messageInputHasError && (
                    <p className="text-red-500">
                      Message field cannot be empty!
                    </p>
                  )}
                  {enteredMessageIsValid && (
                    <p className="text-green-400 flex p-1">
                      Looks good
                      <div className="ml-2 flex items-center">
                        <FcCheckmark size={18} />
                      </div>
                    </p>
                  )}
                </div>
                <button
                  disabled={!formIsValid}
                  className="w-full p-4 mt-4 cursor-not-allowed"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:shadow-indigo-500 ease-in duration-300 animate-bounce">
              <HiOutlineChevronDoubleUp size={38} className="text-[#5651ee]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
