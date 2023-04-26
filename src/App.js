import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [nasaPic, setNasaPic] = useState("");
  const [imageDay, setİmageDay] = useState(true);
  const toggleİmage = () => {
    /* ADIM 4 */
    setİmageDay(!imageDay);
  };

  useEffect(() => {

    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=5Knl55n9q5i4pM5b6hFcsk8z1oxQ70zSC2GfaEgr")

      .then(res => setNasaPic(res.data))

      .catch(err => console.error(err));
    console.log(nasaPic);
  }, []);

  if (!nasaPic) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <h1 > Nasa  </h1>
        <nav>
          <ul>
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <p id="h2-üst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2> Astronomy Picture of the Day</h2>

          {imageDay && <div id='imageDay' className='pic'></div>}
          <img
            style={{ display: imageDay ? "block" : "none" }}
            src={nasaPic.url}
            alt={nasaPic.title}
          />

          <button id='toggleİmage' onClick={toggleİmage}>
            {imageDay ? "Gizle" : "Göster"}
          </button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;