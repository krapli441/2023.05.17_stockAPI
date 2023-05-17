import axios from "axios";
const apiKey = "7MOEQVMZPPVTW225";

async function getStockInfo(symbol) {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    );

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getIntervalInfo(symbol) {
  try {
    const intervalResponse = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
    );
    console.log(intervalResponse.data);
  } catch (error) {
    console.error(error);
  }
}

getStockInfo("AAPL");

setInterval(() => {
  getIntervalInfo("AAPL");
}, 25000);

//
