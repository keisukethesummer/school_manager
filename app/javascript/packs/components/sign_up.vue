<template>
  <div class="signup">
    <h2>新規登録</h2>
    <label for="email">メールアドレス</label>
    <input type="text" id="email" v-model="email"><br/> <!--//v-modelで -->
    <label for="password">パスワード</label>
    <input type="password" id="password" v-model="password"><br/>
    <button v-on:click="signUp()">登録</button>
  </div>  
</template>

<script>
// import firebase from 'firebase'
import axios from '../axios_for_auth'

export default {
  data() { //v-modelで入力されたemailとpasswordを結びつけることで取得
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    signUp() { //axiosでAPIを叩くメソッド
      axios.post(
        '/accounts:signUp?key=AIzaSyD5xWv0BoG0RWCI3Zx4eGL11-hAcT7Anno',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      ).then((response) => {
        this.$store.commit('updateIdToken', response.data.idToken);
        this.$router.push('/');
        console.log(response); //返ってきたレスポンスをログに表示
        console.log(response.data); //返ってきたレスポンスをログに表示
        console.log(response.status); //200
      })
      .catch((err => {
        console.log(err)
      }))
      this.email ="";
      this.password ="";
    
      // firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      // .then((user) => {
      //   alert('アカウントを作成しました!ログイン画面へ移りますのでログインしてください', user.email);
      //   this.$router.push('/sign_in')
      // })
      // .catch(error => {
      //   alert(error.message)
      // })
    }
  }
  
}
</script>