<template>
  <div>
    <div>
      <router-link to="sign_up">新規登録はこちら</router-link>
      <router-link to="sign_in">ログイン</router-link>
    </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>