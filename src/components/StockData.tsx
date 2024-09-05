import React from "react";
import { type ResolutionType, type StockData } from "../types";
import useQuery from "../hooks/useQuery";
import StockDataRow from "./StockDataRow";

type Props = {
  resolution: ResolutionType;
  symbol: string;
};

const Resolution = {
  daily: "TIME_SERIES_DAILY",
  weekly: "TIME_SERIES_WEEKLY",
  monthly: "TIME_SERIES_MONTHLY",
  intraday: "TIME_SERIES_INTRADAY",
};

const Interval = {
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  intraday: "5min",
};

const StockData: React.FC<Props> = ({ resolution, symbol }) => {
  let key = `Time Series (${Interval[resolution]})`;
  if (resolution === "weekly" || resolution === "monthly") {
    key = `${Interval[resolution]} Time Series`;
  }

  const { data, loading, error } = useQuery<StockData>({
    queryString: `?function=${Resolution[resolution]}&symbol=${symbol}&interval=5min`,
    key,
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        {symbol} <span className="capitalize">{resolution}</span> Stock Data{" "}
        {resolution === "intraday" && `-(5min Interval)`}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">Time</th>
              <th className="border border-gray-200 px-4 py-2">Open</th>
              <th className="border border-gray-200 px-4 py-2">High</th>
              <th className="border border-gray-200 px-4 py-2">Low</th>
              <th className="border border-gray-200 px-4 py-2">Close</th>
              <th className="border border-gray-200 px-4 py-2">Volume</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              Object.keys(data).map((time) => (
                <StockDataRow key={time} time={time} data={data[time]} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(StockData);
