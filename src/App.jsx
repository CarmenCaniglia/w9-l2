import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";


function App() {
  return <div>
    <header>
    <MyNav customText='La migliore libreria del Web!'/>
    <Welcome/>
    </header>
    <main>
    <AllTheBooks/>
    </main>
    <footer>
    <Footer/>
    </footer>
  </div>;
}

export default App;
