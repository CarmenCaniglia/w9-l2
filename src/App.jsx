import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import book from "../src/Books/fantasy.json"


function App() {
  return <div>
    <header>
    <MyNav customText='La migliore libreria del Web!'/>
    <Welcome/>
    </header>
    <main>
    <SingleBook/>
    <BookList books={book}/>
    </main>
    <footer>
    <Footer/>
    </footer>
  </div>;
}

export default App;
