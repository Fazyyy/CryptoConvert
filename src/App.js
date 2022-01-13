import Newsfeed from './components/Newsfeed'
import CurrencyConverter from './components/CurrencyConverter'
import Homebg from './assets/1112880.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Homebg})` }}>
      <div className="container">
        <div className="row">
          <div className="double-column">
            <CurrencyConverter />
          </div>
          <div className="column">
            <Newsfeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
