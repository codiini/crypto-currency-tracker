<template>
  <div class="h-20 dark:bg-red-400 bg-white shadow-md mb-24 flex items-between justify-between px-12">
    <div class="logo p-4">
      <img
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=5c08a0b"
        alt=""
      />
    </div>
    <ToggleBtn />
  </div>
</template>

<script>
import ToggleBtn from "@/components/ToggleBtn"
export default {
  components:{
    ToggleBtn,
  }
};
</script>

<style scoped>
.logo {
  height: auto;
  width: 250px;
  display: block;
}
</style>