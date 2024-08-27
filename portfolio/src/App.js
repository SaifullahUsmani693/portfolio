import './App.css';
import  saifullahusmani from './saifullahusmani.jpg';

function App() {
  return (
    <div class="container">
     <img src={saifullahusmani} alt="Saif Ullah Usmani"
            style={{display: 'block', margin: '0 auto', borderRadius: "50%", maxWidth: "200px"}} />
    
    <header>
        <h1>Saif Ullah Usmani</h1>
        <p>Freelance Web Developer | SaaS Developer | Entrepreneur</p>
    </header>

    <section>
        <h2>About Me</h2>
        <p>I'm Saif Ullah Usmani, a freelance web developer with a passion for programming, innovation, and teaching. 
            I've been working in the field since 2019, specializing in SaaS development and entrepreneurship. 
            I love creating solutions that make people's lives easier and businesses more efficient.</p>
    </section>

    <section>
        <h2>Portfolio</h2>
        <ul>
            <li><a target="_blank" href="https://app.a2pgenerator.com/">A2P Generator</a></li>
            <li><a target="_blank" href="https://freelancesaifi.pythonanywhere.com/">Complete CRM from scratch</a></li>
        </ul>
    </section>

    <section>
        <h2>Content:</h2>
        <p>Blog: <a href="https://dev.to/saifullahusmani/complete-web-development-roadmap-122m"
                target="_blank" rel="noopener noreferrer">Complete web development roadmap</a></p>
        <p>YouTube Channel: <a href="https://www.youtube.com/saifullahusmani" target="_blank" rel="noopener noreferrer">Saif Ullah Usmani</a></p>
    </section>

    <section>
        <h2>Interests & Hobbies</h2>
        <ul>
            <li>Programming</li>
            <li>Innovation</li>
            <li>Teaching</li>
        </ul>
    </section>
    
    <section>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:freelance.saifullahusmani@gmail.com">freelance.saifullahusmani@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/923258490826" target="_blank" rel="noopener noreferrer">+92 325 8490826</a></p>
    </section>
</div>
  
  );
}

export default App;
