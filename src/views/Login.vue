<template>
  <div class="row">
    <h1>Tebak Logo</h1>
    <div class="column">
        <form @submit.prevent="login">
            <input type="text" placeholder="Enter Username" id="username" name="username" required v-model="username">
            <button type="submit">Enter</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      return this.username
    }
  }
}
</script>

<style>

</style>
