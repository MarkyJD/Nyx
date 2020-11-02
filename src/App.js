import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      
      <div className="header">
        <Header />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main">
        <Main />  
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
