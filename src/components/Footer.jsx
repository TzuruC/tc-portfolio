import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    const emailCopy = document.querySelector("#emailCopy");
    if (emailCopy) {
      emailCopy.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(emailCopy.data);
      });
    }

    return () => {
      if (emailCopy) {
        emailCopy.removeEventListener("click", (e) => {
          e.preventDefault();
          console.log(emailCopy.data);
        });
      }
    };
  }, []);

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
          <a
            href=""
            id="emailCopy"
            className="d-block d-md-inline-block"
            data-text="tzuruc@gmail.com"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
};