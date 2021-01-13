<template>
  <div class="signup">
    <h2>新規登録</h2>
    <label for="email">メールアドレス</label>
    <input type="text" id="email" v-model="email"><br/>
    <label for="password">パスワード</label>
    <input type="password" id="password" v-model="password"><br/>
    <button v-on:click="signUp">登録</button>
  </div>  
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('アカウントを作成しました!');
      })
      .catch(error => {
        alert(error.message)
      })
    }
  }
  
}
</script>