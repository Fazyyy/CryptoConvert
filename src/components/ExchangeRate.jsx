const ExchangeRate = ({ exchangeRate, chosenPri, chosenSec }) => {
  return (
    <div>
      <p>Exchange Rate: <span>{exchangeRate}</span></p>
      <p>{chosenPri} to {chosenSec}</p>
    </div>
  )
}

export default ExchangeRate
