import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowDown, ArrowUp } from 'lucide-react';

const MarketSection = () => {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 60000); // update every 60s
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className='bg-[#18392F] mt-20'>
      <div className="px-4 py-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Current Market Prices</h2>
          <input type="text" placeholder="Search for crypto" value={query} 
          onChange={(e) => setQuery(e.target.value)} className="border border-white px-4 py-2 text-white rounded-md shadow-sm focus:outline-none focus:ring-2"/>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#295C4C]">
          <table className="min-w-full text-sm">
            <thead className="bg-[#1F453A] text-[#B6D5C9] font-semibold text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Coin Pair</th>
                <th className="p-4">Last Price</th>
                <th className="p-4">24H Change</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin) => (
                <tr key={coin.id} className="border-t border-[#295C4C] hover:bg-[#20483D] transition">
                  <td className="p-4 flex items-center gap-3">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <div>
                      <div className="font-semibold text-white">{coin.symbol.toUpperCase()}</div>
                      <div className="text-xs text-gray-300">{coin.name}</div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">/ USDT</td>
                  <td className="p-4 text-white">${coin.current_price.toFixed(4)}</td>
                  <td className="p-4">
                    <span className={`flex items-center gap-1 font-medium ${
                      coin.price_change_percentage_24h >= 0 ? 'text-green-400': 'text-red-400' }`} >
                      {coin.price_change_percentage_24h >= 0 ? (
                        <ArrowUp size={14} />
                      ) : (
                        <ArrowDown size={14} />
                      )}
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
