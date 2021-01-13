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

export default {
  methods: {
    SignIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(alert('ログイン成功！')
      ).catch(
        alert(error.message)
      )
    }
  }
}
</script>
