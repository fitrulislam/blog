<template>
<div class="container-fluid">
  <form class="form-horizontal">
    <div class="form-group">
      <label for="inputusername" class="col-sm-2 control-label">Username</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputusername" placeholder="Username" v-model="username">
      </div>
    </div>
    <div class="form-group">
      <label for="inputpassword" class="col-sm-2 control-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputpassword" placeholder="Password" v-model="password">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default" @click="signin">Sign in</button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signin () {
      axios.post('http://35.187.241.115:3000/user/signin', {
        username: this.username,
        password: this.password
      }, {})
        .then(response => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('status', 'connected')
          location.reload()
          this.$router.push('/admin/input')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.container-fluid {
  padding-top: 50px;
}

.form-horizontal {
  max-width: 500px;
  margin: 0 auto;
}
</style>
