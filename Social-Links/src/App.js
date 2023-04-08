import './App.css';

function App() {
  function close(){
    let closed = document.querySelector("#popup");
      closed.style.display="none"
    console.log("Popup closed!")
  }
  function open(){
 let closed = document.querySelector("#popup");
      closed.style.margin="auto"
      closed.style.display="block"
    console.log("Popup Opend!")
  }
  return (
    <>
    <section class="animated-background">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </section>

    <a id="profilePicture" href="#popup" onClick={open}>
      <img src="./logo.jpeg" alt="Profile Picture"/>
    </a>

    <div class="overlay" id="popup">
      <div class="popup">
        <div class="popup-photo">
          <a href="./logo.jpeg" target="_blank" rel="noreferrer">
            <img src="./logo.jpeg" alt="Profile Picture"/>
          </a>
        </div>
        <div class="popup-quote">
          Hey Visitors,I 'm Prabhat. You might recognize me as MERN Stack Developer 👨‍💻
        </div>
        <a class="popup-close" onClick={close}>&times;</a>
      </div>
    </div>

    <div id="userName">
      Prabhat Patel
    </div>

    <div id="links">
      <a class="link" href="https://github.com/i-m-prabhat" target="_blank" rel="noreferrer">
        <i class="fab fa-github">&nbsp;</i>Github
      </a>
      <a class="link" href="https://www.linkedin.com/in/devprabhat" target="_blank" rel="noreferrer">
        <i class="fab fa-linkedin">&nbsp;</i>Linkedin
      </a>
      {/* <a class="link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <i class="fab fa-facebook">&nbsp;</i>Facebook
      </a> */}
      <a class="link" href="https://www.instagram.com/i_m_prabhat__/" target="_blank" rel="noreferrer">
        <i class="fab fa-instagram">&nbsp;</i>Instagram
      </a>
      <a class="link" href="https://twitter.com/i_m_prabhat__" target="_blank" rel="noreferrer">
        <i class="fab fa-twitter">&nbsp;</i>Twitter
      </a>
      <a class="link" href="https://www.youtube.com/@digitaljagran" target="_blank" rel="noreferrer">
        <i class="fab fa-youtube">&nbsp;</i>YouTube
      </a>
    </div>

    <div id="hashtag">
      ❤
      ❤
      ❤
      ❤
      ❤
    </div>
    </>
  );
}

export default App;
