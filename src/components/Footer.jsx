import { useEffect, useState } from "react";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer className="bg-dark">
      <div className="container px-lg-10 py-6 py-lg-4 d-flex justify-content-between align-items-center flex-md-row flex-column fw-bold text-center text-md-start">
        <div>Copyright © Tzuru Chen 2024</div>
        <div>
          <a
            href="https://pda.104.com.tw/profile/share/8sxK4Hve4tzCTsCpPGi7FfcIM6PozXcD"
            className="m-4 d-block d-md-inline-block"
            target="_block"
          >
            104 簡歷
          </a>
          <CopyToClipboard
            text="tzuruc@gmail.com"
            onCopy={() => setCopied(true)}
          >
            <a
              href=""
              id="emailCopy"
              className="d-block d-md-inline-block cursor-pointer"
              onClick={handleClick}
            >
              E-mail
            </a>
          </CopyToClipboard>
          {copied ? <span style={{ color: "#D6A43F" }}>已複製!</span> : null}
        </div>
      </div>
    </footer>
  );
};
