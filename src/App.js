import Newsfeed from './components/Newsfeed'
import CurrencyConverter from './components/CurrencyConverter'
import Homebg from './assets/1112880.jpg'

function App() {
  return (
    <main className="App" style={{ backgroundImage: `url(${Homebg})` }}>
      <div className="container">
        <div class="row cc__title">
          <div class="column">
            <h1>CryptoConvert</h1>
          </div>
        </div>
        <div className="row">
          <div className="double-column">
            <section className="cc_converter-main">
             <CurrencyConverter />
            </section>
          </div>
          <div className="column">
            <section className="cc_newsfeed-main">
              <Newsfeed />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
