export function getStockData() {
   return {
      name: 'NVIDIA Corp',
      symbol: 'NVIDIA',
      price: (Math.random() * 3).toFixed(2),
      time: new Date().toLocaleDateString()
   }
}