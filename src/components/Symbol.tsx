import { Dispatch, SetStateAction, useState } from 'react'
import Dropdown from './Dropdown'
import useQuery from './useQuery';
import { SearchItem, StockSymbol } from '../types';

type Props = {
    symbol: string;
    setSymbol: Dispatch<SetStateAction<string>>
}
const Symbol = ({setSymbol, symbol}:Props ) => {
    const [searchKeyword, setSearchKeyword] = useState('')

    const {data, loading, error} = useQuery<StockSymbol[]>({
        queryString: searchKeyword ? `?function=SYMBOL_SEARCH&keywords=${searchKeyword}` : null,
        key: 'bestMatches'
    });
   
  return (
    <div>
        <Dropdown 
            items={(data || []).map(d => ({label: d["1. symbol"], value: d["1. symbol"]})) as SearchItem[]} 
            status = {{loading, error}}
            defaultValue={{label: "IBM", value: "IBM"}} 
            handleSearch={(data) => {
                setSearchKeyword(data);
            }}
            callback={(data) => {
                if(data.value === symbol) return
                setSymbol(data.value)
            }}
        />
    </div>
  )
}

export default Symbol