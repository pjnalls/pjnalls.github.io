import profilePic from '/profile-pic.avif';
import './About.css';

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="bio">
        <p>
          As a international multilingual software engineer and author, my
          mission is to articulate and demonstrate how to learn technology in a
          foreign language and how to do it as well as possible. At the same
          time, it is to maximize the capacity for diversity, equity, and
          inclusion of people on a global and international scale, and to
          achieve bidirectional diplomatic reconciliation for fundamental world
          peace.
          <br/>
          <br/>
          Let's all promote both programming and natural-language
          learning for tech via #multilingualism for #manybenefits1action,
          together 🌎🌍🌏.
          <br/>
          <br/>
          Currently supporting English ⇄ Japanese ⇄ Chinese
          (Mandarin), English ⇄ Spanish, Japanese ⇄ Korean translations,
          localizations and/or internationalizations; learning Chinese, Korean,
          and Thai; planning to practice French pronunciation and learn to
          comprehend Sanskrit in the near future.
        </p>
        <div>
          <a href="https://www.linkedin.com/in/pjnalls" target="_blank">
            <img
              src={profilePic}
              className="about-pic"
              alt="Preston's photo"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
