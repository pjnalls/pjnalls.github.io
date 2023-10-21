import './Works.scss';

function Works() {
  return (
    <section id="works">
      <h2>Works</h2>
      <div className="github">
        <a
          className="github-mark"
          href="https://github.com/pjnalls"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Link to works@pjnalls</div>
        </a>
        <br/>
        <iframe
          src="https://github.com/sponsors/pjnalls/button"
          title="Sponsor pjnalls"
          height="32"
          width="114"
          style={{ border: 0, borderRadius: '6px' }}
        ></iframe>
        <p>
          <a
            className="github-mark"
            href="https://github.com/pjnalls"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            🧑‍💻🧬 GitHub@pjnalls 📁⚛️
          </a>
        </p>
      </div>
      <br />
      <br />
      <br />
      <div>
        <a
          className="yt-mark"
          href="https://www.youtube.com/@djzhan"
          target="_blank"
          rel="noopener noreferrer"
        ><div>Link to Preston's YouTube profile</div>
        </a>
        <p>
          <a
            className="yt-mark"
            href="https://www.youtube.com/@djzhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            📻🎶 YouTube@djzhan 🎹🎧
          </a>
        </p>
      </div>
    </section>
  );
}

export default Works;
