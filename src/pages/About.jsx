import profilePic from '../assets/images/Owl.jpg'

export default function About() {
    return (
      <div className='mainCard'>
        <h1 id="about-me-h1">About Me</h1>
        <section id="about-me">
            <img id="avatar" src={profilePic} alt="Michael Jandres"/>
            <p>
                Welcome to my site! My name is Michael Jandres. I am a student developer based enrolled in a full-stack coding bootcamp course through the University of Minnesota.
                <br />
                <br />
                I am currently working as a Senior Supply Chain Analyst at a Navalwarfare Center in Carderock, MD. I'm learning to code to expand my skillset and to pursue a career in software development.
                <br />
                <br />
                Outside of programming, I enjoy watching sports and hear all different types of music. I also enjoy hearing podcasts and watching horror movies.
            </p>
        </section>
      </div>
    );
}