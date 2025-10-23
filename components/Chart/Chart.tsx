import Image from 'next/image';
import Footer from '../shared/footer';
import Header from '../shared/header';
import { ArrowDown, ArrowUp, Star } from 'lucide-react';

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
            <div className="table-container">
              <div className="tabs">
                <button className="tab active">Positions</button>
                <button className="tab">Open Orders</button>
                <button className="tab">Closed Positions</button>
                <button className="tab">Realised PnL</button>
              </div>
              <div className="tab-content">
                <table className="positions-table">
                  <thead>
                    <tr>
                      <th>Sybmol</th>
                      <th>Amount</th>
                      <th>Leverage</th>
                      <th>Price</th>
                      <th>Loss Cut</th>
                      <th>Stop Loss Price</th>
                      <th>Sell (Limit) Price</th>
                      <th>Sell (Market) Price</th>
                      <th>Unrealised PnL (%)</th>
                      <th>Fees (%)</th>
                      <th>Expiration (UTC)</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
          {/*other section*/}
          <div className="mobile-container">
            <div className="trade-section">
              <div className="account-email">
                <span>maxmad.mum@st.edu.ng</span>
                <span className="hidden">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </span>
              </div>
              <div className="tabs">
                <button className="tab">BTC</button>
                <button className="tab">ETH</button>
                <button className="tab active">USDT</button>
              </div>

              <form className="placeOrder">
                <div className="tab-order-content">
                  <div className="tab-pane active">
                    <div className="l-list">
                      <div className="form-group">
                        <label>Balance:0.00000USDT</label>
                      </div>
                      <div className="form-group1">Available: 0.00000USDT</div>
                      <div className="form-group1">
                        <div className="form-groupminmax">
                          <label>Min: 5.00 USDT</label>
                          <label>Max: 150,00.00 USDT</label>
                        </div>
                      </div>
                      <div className="order-type">
                        <button type="button" className="order-type-btn">
                          Limit
                        </button>
                        <button type="button" className="order-type-btn">
                          Market
                        </button>
                      </div>
                      <div className="l-list__item">
                        <div className="input-group placeOrder__inputAmount">
                          <div className="input-group-prepend">
                            <span className="input-group-text placeOrder__inputAmountTitle">
                              <span>Amount </span>/<span className="all-btn"> All</span>
                            </span>
                          </div>
                          <input
                            disabled
                            className="placeOrder__inputAmountValue input-number"
                            step={0.0001}
                            type="number"
                            maxLength={13}
                          />
                          <div className="input-number-stepper">
                            <div className="step-btn --up">
                              <ArrowUp />
                            </div>
                            <div className="step-btn --down">
                              <ArrowDown />
                            </div>
                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text placeOrder__inputAmountSuffix">
                              USDT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slider-container">
                        <input
                          type="range"
                          className="slider"
                          min={0}
                          max={100}
                          step={1}
                          disabled
                        />
                        <div className="slider-labels">
                          <span>0%</span>
                          <span>25%</span>
                          <span>50%</span>
                          <span>75%</span>
                          <span>100%</span>
                        </div>
                      </div>
                      <div className="l-list__item">
                        <div className="input-group placeOrder__inputamount">
                          <div className="input-group-prepend">
                            <span className="input-group-text placeOrder__inputAmountTitle">
                              <span>Stop Loss</span>
                            </span>
                          </div>
                          <input
                            className="placeOrder__inputAmountValue input-number"
                            step={0.0001}
                            type="number"
                            maxLength={13}
                          />
                          <div className="step-btn --up">
                            <ArrowUp />
                          </div>
                          <div className="step-btn --down">
                            <ArrowDown />
                          </div>
                        </div>
                        <div className="input-group-append">
                          <span className="input-group-text placeOrder__inputAmountSuffix">
                            USDT
                          </span>
                        </div>
                      </div>
                      <div className="l-list__item">
                        <div className="input-group placeOrder__inputAmount"></div>
                      </div>
                      <div className="placeOrder__leverage">
                        <div className="leverageBar">
                          <div className="leverageBar__wrapper">
                            <div className="slider-container">
                              <input type="range" className="slider" />
                              <div className="slider-labels">
                                <span>1x</span>
                                <span>5x</span>
                                <span>10x</span>
                                <span>25x</span>
                                <span>50x</span>
                                <span>75x</span>
                                <span>100x</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buy-sell-buttons">
                  <button type="button" className="buy-btn active">
                    <span>Buy Order</span>
                    <br />
                    <span className="font-semibold">UP</span>
                  </button>
                  <button type="button" className="sell-btn">
                    <span>Sell Order</span>
                    <span className="font-semibold">Down</span>
                  </button>
                </div>
                <div className="section">
                  <div className="auto-sell">
                    <h3>Auto-Sell Setting:</h3>
                    <div className="toggle-buttons">
                      <button className="toggle-btn active">OFF</button>
                      <button className="toggle-btn ">100%</button>
                      <button className="toggle-btn ">200%</button>
                      <button className="toggle-btn ">300%</button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="mobile-positions-table">
                <div className="mobile-positions-table-header"> Positions </div>
                <div className="mobile-table-container">
                  <table className="positions-table table-list">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Amount (USDT)</th>
                        <th>Unrealised PnL</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={4} className="text-center">
                          No data is available in the table
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mobile-positions-table">
                <div className="mobile-positions-table-header">Open Orders</div>
                <div className="mobile-table-container">
                  <table className="positions-table table-list">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={4} className="text-center">
                          No data is available in the table
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pricing">
                <div className="fybit-index">
                  <span>FYBIT Index</span>
                  <span className="index-value">110,043</span>
                </div>
                <h4>Pricing Sources:</h4>
                <ul className="pricing-list">
                  <li>
                    <span>Bitfinex</span>
                    <span>110,110</span>
                  </li>
                  <li>
                    <span>HTX</span>
                    <span>109,985</span>
                  </li>
                  <li>
                    <span>Binance</span>
                    <span>109,980</span>
                  </li>
                  <li>
                    <span>Coinbase</span>
                    <span>110,045</span>
                  </li>
                  <li>
                    <span>Bybit</span>
                    <span>109,995</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Chart;
