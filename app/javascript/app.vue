<template>
  <div id="app">
  <Header />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import Header from './packs/components/layouts/header';

export default {
  data: function () {
    return {
      message: "Hello Vue!"
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
