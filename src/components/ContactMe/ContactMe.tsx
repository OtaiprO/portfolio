import "./ContactMe.css";
import { ContactMeCard } from "./ContactMeCard/ContactMeCard";

export const ContactMe = () => {
  return (
    <section id="contacts-section" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div>
          <ContactMeCard
            iconUrl={`${process.env.PUBLIC_URL}/assets/images/email-icon.png`}
            text="AbdulmalikAlotaibi333@gmail.com"
          />
        </div>
        {/* <div>
          <ContactForm />
        </div> */}
        <div>
          <ContactMeCard
            iconUrl={`${process.env.PUBLIC_URL}/assets/images/github-icon.png`}
            text="Github.com/OtaiprO"
          />
        </div>
      </div>
      <div className="contact-content">
        <div>
          <ContactMeCard
            iconUrl={`${process.env.PUBLIC_URL}/assets/images/linkedin-icon.png`}
            text="www.linkedin.com/in/abdulmalek-alotaibi"
          />
        </div>
        <div>
          <ContactMeCard
            iconUrl={`${process.env.PUBLIC_URL}/assets/images/phone-icon.png`}
            text="+46 790 525 727"
          />
        </div>
      </div>
    </section>
  );
};
