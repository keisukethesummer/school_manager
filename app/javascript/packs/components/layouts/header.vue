<template>
  <div>
    <div>
      <router-link to="/">HOME</router-link>
      <router-link to="/sign_up">新規登録はこちら</router-link>
      <router-link to="/sign_in">ログイン</router-link>

      <!-- <p>アドレス名:{{ email }}さん -->
        <!-- <button @click="signOut">サインアウト</button> -->
      <!-- </p> -->
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase';
// // let currentUser = firebase.auth().currentUser

// export default {
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
// }
</script>

<style scoped>

</style>