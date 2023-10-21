import profilePic from '/p.logo.avif';
import './Home.scss';

function Home() {
  return (
    <section id="home">
      <div>
        <a
          href="https://www.linkedin.com/in/pjnalls"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={profilePic} className="profile-pic" alt="Preston's photo" />
        </a>
      </div>
      <h1>Preston Nalls</h1>
      <div className="card">
        <h2>
          <br/>
          Sr. Software Engineer
        </h2>
        <h2 className="mission">
          Promoting the joy of learning natural and programming languages of all
          kinds.<br/>
          <br/>
          ❤️ <a href={`/#onelove`}>#onelove</a> 🌏🌍🌎
        </h2>
      </div>
      <p className="message">
        Hi, I'm Preston!
        <br />
        <br />
        Click on my photo to go to my LinkedIn profile for connecting with and
        messaging me.
        <br />
        Otherwise, <a href="#about">learn more about me</a>.
      </p>
    </section>
  );
}

export default Home;
