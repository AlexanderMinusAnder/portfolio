import './Home.css'
import code from "../../assets/code.png"
import react from "../../assets/react.svg"
import angular from "../../assets/angular.svg"
import vuejs from "../../assets/vuejs.svg"
import nodejs from "../../assets/nodejs.svg"
import django from "../../assets/django.svg"
import spring from "../../assets/spring.svg"
import postgresql from "../../assets/postgresql.svg"
import mysql from "../../assets/mysql.svg"

function Home() {

  return (
    <div className='home'>

      <div className='home__title'>
        <h1>Présentation</h1>
      </div>
      <div className='home__content--introduction'>
        <img src={code} />
        <div className='home__text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div className='home__title'>
        <h1>Stack technique</h1>
      </div>
      <div className='home__content'>
        <h2>Front-End</h2>
        <div className='home__stack-container'>
          <div className='home__stack'>
            <p>React</p>
            <img src={react} />
          </div>
          <div className='home__stack'>
            <p>Angular</p>
            <img src={angular} />
          </div>
          <div className='home__stack'>
            <p>VueJS</p>
            <img src={vuejs} />
          </div>
        </div>

        <h2>Back-End</h2>
        <div className='home__stack-container'>
          <div className='home__stack'>
            <p>Node.js</p>
            <img src={nodejs} />
          </div>
          <div className='home__stack'>
            <p>Django</p>
            <img src={django} />
          </div>
          <div className='home__stack'>
            <p>Spring Boot</p>
            <img src={spring} />
          </div>
        </div>

        <h2>Base de données relationnelles</h2>
        <div className='home__stack-container'>
          <div className='home__stack'>
            <p>PostgreSQL</p>
            <img src={postgresql} />
          </div>
          <div className='home__stack'>
            <p>MySQL</p>
            <img src={mysql} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
