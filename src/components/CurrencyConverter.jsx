import { useState } from 'react'
import axios from 'axios'
import ExchangeRate from './ExchangeRate'

const CurrencyConverter = () => {

  const currencies = [
    'BTC','USD', 'LRC', 'ETH', 'XRP', 'LTC', 'ADA'
  ]
  const [chosenPri, setChosenPri] = useState('BTC')
  const [chosenSec, setChosenSec] = useState('USD')
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {to_currency: chosenSec, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPri},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_APIKEY
      }
    }

    axios.request(options).then((response) => {
      setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
      setResult(exchangeRate * amount)
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <section className="cc__main">
      <h2>Converter</h2>
      <table>
        <tbody>
          <tr>
            <td><p>Primary Currency</p></td>
            <td>
              <input
                type="number"
                name="currency-input-1"
                step=".01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
            <td>
              <select
                name="currency-option-1"
                value={chosenPri}
                onChange={(e) => setChosenPri(e.target.value)}
              >
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))};
              </select>
            </td>
          </tr>
          <tr>
            <td><p>Secondary Currency</p></td>
            <td>
              <input
                  type="number"
                  name="currency-input-2"
                  step=".01"
                  value={result}
                  disabled={true}
              />
            </td>
            <td>
              <select
                name="currency-option-2"
                value={chosenSec}
                onChange={(e) => setChosenSec(e.target.value)}
              >
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))};
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button 
        id="conversion"
        onClick={convert}
      >
        Calculate
      </button>
      <ExchangeRate
        exchangeRate={exchangeRate}
        chosenPri={chosenPri}
        chosenSec={chosenSec} 
      />
    </section>
  )
}

export default CurrencyConverter
