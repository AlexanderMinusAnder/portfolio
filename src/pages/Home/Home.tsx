import './Home.css'
import code from "../../assets/code.png"

function Home() {

  return (
    <div className='home'>
      <div className='home__title'>
        <h1>Présentation</h1>
      </div>
      <div className='home__content'>
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
    </div>
  )
}

export default Home
