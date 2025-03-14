

import "./App.css";
import "../styles/Homepage.css";
import TopBar from "../TopBar"; 

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <TopBar />
      </header>
      <main>
        <section id="etusivu">
          <h1>Etusivu</h1>
          <p>Yli 1000 kalalupaa helposti saatavilla</p>
        </section>

        <section id="tarkennettu-haku">
          <h2>Tarkennettu haku</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>

        <section id="yleiset-kysymykset">
          <h2>Yleiset kysymykset</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>

        <section id="tietoa-meista">
          <h2>Tietoa meistä</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>

        <section id="kalastonhoito-maksu">
          <h2>Kalastonhoito maksu</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button className="payment-button">Maksa kalastonhoito maksu</button>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
