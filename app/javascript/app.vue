<template>
  <div id="app">
  <Header />
    <!-- <p>{{ message }}</p> -->
    <router-view/>
  </div>
</template>

<script>
import Header from './packs/components/layouts/Header';

export default {
  data: function () {
    return {
      // message: "Hello Vue!"
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
