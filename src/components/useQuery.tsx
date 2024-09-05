import { useCallback, useEffect, useState } from 'react'
import {debounce} from 'lodash';

type Props = {
    queryString: string | null;
    key?: string;
}
const useQuery = <T,>({queryString, key}: Props) => {
    
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStockData = useCallback(debounce(async (query: string) => {
        try {
          setLoading(true);
          const response = await fetch(query);
          const data = await response.json();
          if(data.Information) return setError(data.Information)
          console.log('data', data);
          if(key){
            setData(data[key] as T);
          } else {
            setData(data)
          }
        } catch (error) {
          setError('Failed to fetch data');
        } finally {
            setLoading(false)
        }
      }, 500), [queryString, key]);

    useEffect(() => {
        if(!queryString) return
        const queryKey = `https://www.alphavantage.co/query`
        const query = `${queryKey}${queryString}&apikey=${import.meta.env.VITE_API_KEY || 'your_api_key'}`
        fetchStockData(query);
      }, [queryString]);

    return { data, loading, error }
}

export default useQuery