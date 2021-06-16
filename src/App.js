import './App.css';
import Header from './StaticPageElements/Header';
import Footer from './StaticPageElements/Footer';
import MainContainer from './MainBlock/Containers/MainContainer'

function App(props) {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
