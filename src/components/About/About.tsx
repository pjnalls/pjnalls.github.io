import profilePic from '/p.logo.avif';
import './About.scss';

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="bio">
        <p>
          As a international multilingual senior software engineer, 
          polyglot, and writer, I do my best to promote the joy of learning natural and
          programming languages of all kinds. At the same time, it is to
          maximize the capacity for diversity, equity, and inclusion of people
          on a global and international scale, and to achieve bidirectional
          diplomatic reconciliation for fundamental world peace.
          <br />
          <br />
          Let's all promote both programming and natural-language learning for ❤️<a href={`/#onelove`}>#onelove</a>— together
          <br />
          🌎🌍🌏.
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/pjnalls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={profilePic} className="about-pic" alt="Preston's photo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
