import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBook from "../src/Books/fantasy.json"
import AddComment from "./components/AddComment";


function App() {
  return <div>
    <header>
    <MyNav customText='La migliore libreria del Web!'/>
    <Welcome/>
    </header>
    <main>
      <AddComment/>
    {/* <SingleBook book={fantasyBook[0]}/> */}
    <BookList manyBooks={fantasyBook}/>
    {/* manyBooks è un array */}
    </main>
    <footer>
    <Footer/>
    </footer>
  </div>;
}

export default App;
