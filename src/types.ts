export type StockData ={
    [key: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  }

export type SearchItem = Record<'label' | 'value', string>

export type DropdownProps = {
    items: SearchItem[];
    defaultValue?: SearchItem;
    hasSearch?: boolean;
    callback?: (data: SearchItem) => void;
    handleSearch?: (data: string) => void;
    status?: { loading: boolean, error: string | null };
}

export type ResolutionType =  'daily' |  'weekly' | 'monthly' | 'intraday';

export type StockSymbol = Record<"1. symbol" | "2. name" | "3. type" | "4. region" | "5. marketOpen" | "6. marketClose" | "7. timezone" | "8. currency" | "9. matchScore", string>