import './Contact.scss';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <a
        className="linkedin-mark"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>Link to Preston's contact</div>
      </a>
      <p>
          Let's connect together
          <br/>
          on<a
        className="linkedin-mark"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}LinkedIn@pjnalls</a>! 🙂🌏🌍🌎
        </p>
    </section>
  );
}

export default Contact;
