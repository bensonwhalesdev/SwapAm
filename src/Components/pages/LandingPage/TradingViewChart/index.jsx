import React, { useEffect, useRef } from 'react';
import 'animate.css'

const TradingChart = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new window.TradingView.widget({
        container_id: 'tradingview_btc',
        autosize: true,
        symbol: 'BINANCE:BTCUSDT',
        interval: '30',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: false,
        withdateranges: true,
        details: false,
        studies: [],
        container: containerRef.current,
      });
    };

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[400px] bg-white shadow-md rounded-xl overflow-hidden animate__animated animate__fadeInRight" id="tradingview_btc" ref={containerRef} />
  );
};

export default TradingChart;
