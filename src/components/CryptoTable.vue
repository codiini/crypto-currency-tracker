<template>
  <table class="shadow-lg bg-white mx-auto w-11/12">
    <thead>
      <tr>
        <th class="bg-blue-100 border text-left px-6 py-4">#</th>
        <th class="bg-blue-100 border text-left px-6 py-4">Name</th>
        <th class="bg-blue-100 border text-left px-6 py-4">Price</th>
        <th class="bg-blue-100 border text-left px-6 py-4">24h %</th>
        <th class="bg-blue-100 border text-left px-6 py-4">7d %</th>
        <th class="bg-blue-100 border text-left px-6 py-4">Market Cap</th>
        <th class="bg-blue-100 border text-left px-6 py-4">Volume(24h)</th>
        <th class="bg-blue-100 border text-left px-6 py-4">
          Circulating Supply
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(currency, index) in currencyData" :key="index">
        <td>{{ index + 1 }}</td>
        <div class="flex">
          <td class="flex p-2 items-center text-base text-black my-3">
            <cryptoicon :symbol="currency.symbol" size="30" class="mx-3" />{{
              currency.name
            }}
            <small class="ml-3 text-gray-500">{{ currency.symbol }}</small>
          </td>
        </div>

        <td>{{ currency.price }}</td>
        <td
          :class="{
            red: currency.percent_change_24h < 0,
            green: currency.percent_change_24h > 0,
          }"
        >
          <i
            :class="{
              fas: true,
              'fa-arrow-up': currency.percent_change_24h > 0,
              'fa-arrow-down': currency.percent_change_24h < 0,
            }"
          >
          </i>
          {{ currency.percentChange24h }}
        </td>
        <td
          :class="{
            red: currency.percent_change_7d < 0,
            green: currency.percent_change_7d > 0,
          }"
        >
          <i
            :class="{
              fas: true,
              'fa-arrow-up': currency.percent_change_7d > 0,
              'fa-arrow-down': currency.percent_change_7d < 0,
            }"
          ></i>
          {{ currency.percentChange7d }}
        </td>
        <td>{{ currency.marketCap }}</td>
        <td>{{ currency.volume24h }}</td>
        <td>{{ currency.circulatingSupply }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["currencyData"],
  return: {},
};
</script>

<style scoped>
td {
  text-align: center;
}
tr {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
table {
  font-size: 14px;
}
.red {
  @apply text-red-600;
}
.green {
  @apply text-green-600;
}
</style>