import { useState, useEffect, useRef } from "react";
import './otp.css';

export const OtpComponent = () => {
  const [otp, newOtp] = useState();
  const [verfied, setVerfied] = useState(false);
  const [otpVal, setOtpVal] = useState([]);
  const textBase = useRef(null);

  // generate random otp for each first render

  useEffect(() => {
    newOtp(Math.floor(1000 + Math.random() * 9000));
  }, []);

  const clearAll = () => {
    textBase.current.classList.remove("otp-error");
    textBase.current.childNodes.forEach((child) => {
      child.value = ""; 
    });
    setOtpVal([]);
    setVerfied(false);
  };

  const getOtp = () => {
    if (parseInt(otpVal.join("")) === otp) {
      textBase.current.classList.remove("otp-error");
      setVerfied(true);
    } else {
      textBase.current.classList.add("otp-error");
    }
  };

  const focusNext = (e) => {
    const childCount = textBase.current.childElementCount;
    const currentIndex = [...e.target.parentNode.children].indexOf(e.target);
    if (currentIndex !== childCount - 1) {
      e.target.nextSibling.focus();
    } else {
      const values = [];
      textBase.current.childNodes.forEach((child) => {
        values.push(child.value);
      });
      if (values.length !== 0) {
        setOtpVal(values);
      }
    } 
  };

  useEffect(() => {
    if (otpVal.length === textBase.current.childElementCount) {
      getOtp();
    }
  }, [otpVal]);

  return (
    <div className="base">
      {!verfied ? (
        <>
          <h1> Enter OTP : {otp}</h1>
          <div className="otp-base" ref={textBase}>
            {new Array(4).fill(null).map((input) => {
              return <input type="text" onChange={(e) => focusNext(e)} />;
            })}
          </div>

          <button
            className={`button ${otpVal.length > 0 && "show"}`}
            onClick={() => clearAll()}
          >
            clear otp
          </button>
        </>
      ) : (
        <> verified</>
      )}
    </div>
  );
};

