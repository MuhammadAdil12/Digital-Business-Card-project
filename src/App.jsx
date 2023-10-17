import './App.css'
import img3 from "./images/profile-pic.jpg"
function App() {

  return (
    <div className='parentDiv'>
        <div className='heroImg'>
          <img src={img3} />
        </div>
        <h1>Adil Potter</h1>
        <h4>Junior frontEnd Developer</h4>
        <a href="https://adilportfolio.vercel.app/"><h5 className='myWebsiteTag'>My website</h5></a>
        <div className='btnDiv'>
          <a href="mailto: adilpotter12@gmail.com" className='emailBtn'><div className='mailIconBtn'><i className="fa-solid fa-envelope"></i></div>Email</a>
          <a href="https://www.linkedin.com/in/muhammad-adil-2bab8a292/" className='linkedinBtn'><div className='linkedIconBtn'><i className="fa-brands fa-linkedin"></i></div>LinkedIn</a>
        </div>
        <h3 className='aboutTag'>About</h3>
        <h5>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h5>
        <h3>Interests</h3>
        <h5>Food expert. Music. Reader. Internet fanatic. Bacon buff. Loving traveling. Coffee fanatic.</h5>
        <footer>
          <a href="mailto: adilpotter12@gmail.com"><div className='footerIcon'><i className="fa-solid fa-envelope"></i></div></a>
          <a href="https://www.linkedin.com/in/muhammad-adil-2bab8a292/"><div className='footerIcon'><i className="fa-brands fa-linkedin"></i></div></a>
          <a href="https://github.com/MuhammadAdil12"><div className='footerIcon'><i className="fa-brands fa-github"></i></div></a>
        </footer>
    </div>
  )
}

export default App

