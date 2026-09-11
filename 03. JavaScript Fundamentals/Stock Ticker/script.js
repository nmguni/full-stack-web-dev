// import { getStockData } from "./fakeStockAPI.js";

function getStockData() {

   return {
      name: 'NVIDIA Corp',
      symbol: 'NVIDIA',
      price: (Math.random() * 3).toFixed(2),
      time: new Date().toLocaleDateString()
   }
}

setInterval(() => {
   const stockData = getStockData()
   renderStockTicker(stockData)
}, 1500);


let prePrice = null



function renderStockTicker() {
   const stockDisplayName = document.querySelector('#name')
   const stockDisplaySymbol = document.querySelector('#symbol')
   const stockDisplayPrice = document.querySelector('#price')
   const stockDisplayPriceIcon = document.querySelector('#price-icon')
   const stockDisplayTime = document.querySelector('#time')

   const { name, symbol, price, time } = getStockData()

   const priceDirectionIcon = price > prePrice ? 'green.svg' : price < prePrice ? 'red.svg' : 'grey.svg'

   const priceIconElement = document.createElement('img')
   priceIconElement.classList.add("icon-img")
   priceIconElement.src = `icons/${priceDirectionIcon}`;
   priceDirectionIcon.alt = "Price direction icon"
   stockDisplayPriceIcon.innerHTML = ''
   stockDisplayPriceIcon.appendChild(priceIconElement)

   stockDisplayName.innerText = name
   stockDisplaySymbol.innerText = symbol
   stockDisplayPrice.innerText = price
   stockDisplayTime.innerText = time


   prePrice = price

   console.log(name);
}

// renderStockTicker()

// render stock data every 5 seconds

