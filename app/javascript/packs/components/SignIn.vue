<template>
  <div class="signin">
    <h2>ログイン</h2>
    <label for="email">メールアドレス</label>
    <input type="text" id="email" v-model="email"><br/>
    <label for="password">パスワード</label>
    <input type="password" id="password" v-model="password"><br/>
    <button @click="SignIn">ログイン</button>
  </div>  
</template>

<script>
import firebase from 'firebase';
import axios from '../axios_for_auth';

export default {
  data() {
    return {
      email: "",
      password:""
    }
  },
  methods: {
    SignIn: function() {
      // axios.post(
      //   '/accounts:signInWithPassword?key=AIzaSyD5xWv0BoG0RWCI3Zx4eGL11-hAcT7Anno',
      //   {
      //     email: this.email,
      //     password: this.password,
      //     returnSecureToken: true //IDとtokenを返すかどうか。常にtrueである必要がある
      //   }
      // ).then(res => {
      //   console.log(res)
      //   this.$store.commit('updateIdToken', res.data.idToken)
      //   this.$router.push('/students');
      // })
      // .catch(err => console.log(err));

      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        console.log(res);
        const token = firebase.auth().currentUser.getIdToken(true)
        this.$store.commit('updateIdToken', token);
        console.log('state:',this.$store)
        this.$router.push('/students')
      }
      ).catch((err) => {
        console.log(err.message)
      })

      this.email = "";
      this.password = "";
    }
  }
}
</script>
