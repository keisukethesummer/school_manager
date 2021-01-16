<template>
  <div>
    <div>
      <router-link to="/">HOME</router-link>
      <router-link to="/sign_up" v-if="!isSignedIn">新規登録はこちら</router-link>
      <router-link to="/sign_in" v-if="!isSignedIn">ログイン</router-link>
      <router-link to="/students" v-if="isSignedIn">生徒一覧</router-link>

      <!-- <p>アドレス名:{{ email }}さん -->
        <!-- <button @click="signOut">サインアウト</button> -->
      <!-- </p> -->
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase';
// // let currentUser = firebase.auth().currentUser

export default {
  computed: {
    isSignedIn() {
      return this.$store.getters.idToken !== null;
    }
  }
//   name: "Header",
//   data: {
//     notSignedIn: false,
//     function() {
//       return {
//         email: firebase.auth().currentUser.email
//     }
//   }
//       },
//   methods: {
//     signOut() {
//       firebase.auth().signOut().then(() => {
//         // this.$router.push('/')
//       })
//     }
//   }
}
</script>

<style scoped>

</style>