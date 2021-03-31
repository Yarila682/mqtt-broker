import './App.css';
import Header from './StaticPageElements/Header';
import Footer from './StaticPageElements/Footer';
import Main from './MainBlock/Main'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
