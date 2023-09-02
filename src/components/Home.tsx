import profilePic from '/profile-pic.avif';
import './Home.css';

function Home() {
  return (
    <section id="home">
      <div>
        <a href="https://www.linkedin.com/in/pjnalls" target="_blank">
          <img src={profilePic} className="profile-pic" alt="Preston's photo" />
        </a>
      </div>
      <h1>Preston Nalls</h1>
      <div className="card">
        <h2>Encouraging learning of both natural and programming languages.</h2>
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
