import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <>
      <section className="mainContent">
        <section className="container--contactPage">
          <section className="container--contactPageContent">
            <section
              className="container--contactPageContent__email"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "mailto:elsa.eriksson@medieinstitutet.se",
                  "_blank"
                );
              }}
            >
              <span className="contactPageIcon">
                <IoMailOutline />
              </span>
              <span className="contactPageText">
                elsa.eriksson@medieinstitutet.se
              </span>
            </section>
            <section
              className="container--contactPageContent__gitHub"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/ElsaEriksson/", "_blank");
              }}
            >
              <span className="contactPageIcon">
                <FaGithub />
              </span>
              <span className="contactPageText">ElsaEriksson</span>
            </section>
            <section
              className="container--contactPageContent__linkedin"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://se.linkedin.com/in/elsa-eriksson-9b008022a?trk=public_profile_samename-profile",
                  "_blank"
                );
              }}
            >
              <span className="contactPageIcon">
                <FaLinkedin />
              </span>
              <span className="contactPageText">Elsa Eriksson</span>
            </section>
            <section
              className="container--contactPageContent__instagram"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.instagram.com/ettfotografi/",
                  "_blank"
                );
              }}
            >
              <span className="contactPageIcon">
                <FaInstagram />
              </span>
              <span className="contactPageText">ettfotografi</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
