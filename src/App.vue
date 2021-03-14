<template>
  <div id="app">
    <Header />
    <CryptoTable :currencyData="currencyData" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import CryptoTable from "@/components/CryptoTable";
export default {
  name: "App",
  components: {
    Header,
    CryptoTable,
  },

  data() {
    return {
      currencyData: [],
    };
  },
  mounted() {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => {
        this.currencyData = data.data.map((currency) => ({
          ...currency,
          price: this.formatUsd(currency.price_usd),
          marketCap: this.formatUsd(currency.market_cap_usd),
          volume24h: this.formatUsd(currency.volume24),
          percentChange24h: this.formatPercentages(currency.percent_change_24h),
          percentChange7d: this.formatPercentages(currency.percent_change_7d),
          circulatingSupply:
            this.formatSupply(currency.csupply) + ` ${currency.symbol}`,
        }));
      });
  },
  methods: {
    formatUsd(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
    formatPercentages(value) {
      return value + "%";
    },
    formatSupply(value) {
      return new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
      }).format(value);
    },
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
}
</style>