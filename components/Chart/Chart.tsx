import Image from 'next/image';
import Footer from '../shared/footer';
import Header from '../shared/header';

const Chart = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="trade-layout pt-22">
          <div className="left-section split">
            <div className="dropdown-container">
              <div className="dropdown-header">
                <div className="left-section-dropdown">
                  <span className="current-coin">
                    <Image alt="btc" width={20} height={20} src="/svg/bitcoin.svg" />
                    <span>Bitcoin (BTC) / USDT</span>
                    <span className="dropdown-arrow-box">▼</span>
                  </span>
                  <span className="change">
                    24h Change:
                    <span className="negative"> 2,280 (2.11%)</span>
                  </span>
                  <span className="hight">
                    <span>24h High:</span>
                    <span className="positive">111,290 (1.15%)</span>
                  </span>
                  <span className="low">
                    <span>24h Low:</span>
                    <span className="negative">106,710 (-2.98%)</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="chart-section border">
              <div className="tv_chart_wrapper position-relative">
                <div className="chart__watermark">
                  <Image
                    src="/images/FYBIT_black_horizontal.png"
                    className="logo-dark-img hidden"
                    alt="dark"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/FYBIT_white_horizontal.png"
                    className="logo-dark-img"
                    alt="light"
                    width={20}
                    height={20}
                  />
                </div>
                <div>{/* chart goes here */}</div>
              </div>
            </div>
            <div className="table-container"></div>
          </div>
          {/*other section*/}
          <div className="mobile-container"></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Chart;
