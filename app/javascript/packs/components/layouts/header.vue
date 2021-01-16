<template>
  <div>
    <div>
      <router-link to="/">HOME</router-link>
      <router-link to="/sign_up" v-if="!isSignedIn">新規登録はこちら</router-link>
      <router-link to="/sign_in" v-if="!isSignedIn">ログイン</router-link>
      <router-link to="/students" v-if="isSignedIn">生徒一覧</router-link>

      <button @click="signOut" v-if="isSignedIn">ログアウト</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // ログイン中かどうかbooleanで返却
    isSignedIn() {
      return this.$store.getters.idToken !== null;
    }
  },
  methods: {
    // ログアウト機能
    signOut() {
      this.$store.commit('updateIdToken', null);
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>