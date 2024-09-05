import { useState } from 'react'
import StockData from './components/StockData'
import Resolution from './components/Resolution'
import { type ResolutionType } from './types'
import Symbol from './components/Symbol'

function App() {
  const [resolution, setResolution] = useState('intraday' as ResolutionType)
  const [symbol, setSymbol] = useState('IBM')
  return (
    <div>
      <div className="flex bg-gray-200 p-8 justify-between max-md:flex-col max-md:gap-8">
        <div>
          <h1 className="text-lg mb-2 max-md:mb-1">Choose the stock resolution</h1>
          <Resolution setResolution={setResolution} resolution={resolution} />
        </div>
        <div>
          <h1 className="text-lg mb-2 max-md:mb-1">Choose the stock symbol</h1>
          <Symbol setSymbol={setSymbol} symbol={symbol} />
        </div>
      
      </div>
       <StockData resolution={resolution} symbol={symbol} />
    </div>
  )
}

export default App
