export const Info = () => {
  return (
    <>
      <section className="mainContent">
        <section id="container--infoPage">
          <section className="container--infoPageContent">
            <p className="infoPageTitle">Seeking Internship Opportunity</p>
            <p className="infoPageText">
              Right now, I am actively pursuing a full-time 10-week internship
              in web development for the autumn of 2024. I am looking for a
              place to apply my skills and continue to learn and grow within the
              industry. I am particularly interested in working in back-end. If
              you are interested in discussing internship opportunities, please
              feel free to contact me at{" "}
              <a
                href="mailto:elsa.eriksson@medieinstitutet.se"
                target="_blank"
                className="mailInInfo"
              >
                elsa.eriksson@medieinstitutet.se
              </a>
              .
            </p>
            <p className="infoPageTitle">About my education</p>
            <p className="infoPageText">
              Currently, I am learning skills such as database management,
              responsive website design, back-end API development, development
              towards e-commerce platforms, and system support and integration
              with third-party systems. My training covers both front-end and
              back-end development, with a particular emphasis on back-end
              technologies. My resume, attached below, shows my earlier
              experiences and represents what I will have learned by the time
              the internship starts.
            </p>
            <p className="infoPageText">
              By merging the best of my past experiences in Information Design
              with what I am learning now, I aim to become more proficient in
              web development, and I hope this will lead to refining my skills
              in the field.
            </p>
            <section
              className="container--WebsiteLink"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://elsasportfolio.netlify.app/CV_ElsaEriksson_En.pdf",
                  "_blank"
                );
              }}
            >
              <span className="websiteLink">Resume</span>
              <span className="websiteArrow">
                <i className="fa-solid fa-arrow-up"></i>
              </span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
