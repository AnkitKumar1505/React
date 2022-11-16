import Header from "./header";
import "./App.css";
import Filter from "./filter";
import Card from "./card";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />

      <div class="main_container">
        <Filter />
        <Card />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
