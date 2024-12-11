import resume from '../assets/files/Michael-Jandres-Resume.pdf';

export default function Resume() {
    return (
      <div className='mainCard'>
        <h1>My Resume</h1>
        <div id="my-proficiencies">
          <h2>My Proficiencies:</h2>
          <div>
            <section>
              <h3>Advanced:</h3>
              <ul>
                <li>Microsoft Excel</li>
                <li>Navy ERP/SAP</li>
                <li>Catalog Maintenance</li>
                <li>HTML</li>
              </ul>
            </section>

            <section>
              <h3>Intermediate:</h3>
              <ul>
                <li>Web-API</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </section>

            <section>
              <h3>Learning:</h3>
              <ul>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>React</li>
              </ul>
            </section>
          </div>
        </div>
        <a href={resume} id="resume-download-link" download>Click here to download a copy of my resume! 📥</a>
        <iframe
          id="resume-iframe"
          src={resume}
          width="90%"
          height="90%"
          title="PDF Viewer"
        />
      </div>
    );
}
  