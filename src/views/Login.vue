<template>
  <div class="row">
    <h1>Tebak Logo</h1>
    <div class="column">
        <form @submit.prevent="login">
            <input type="text" placeholder="Enter Username" id="username" name="username" required v-model="username">
            <button class="btn btn-primary btn-sm"
             @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')"
             type="submit">Enter</button>
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
  sockets: {
    connect () {
      console.log('connected')
    },
    connected (payload) {
      this.$store.commit('setCurrentUser', payload.current_player)
      this.$store.commit('setPlayerLists', payload.player_list)
      this.$router.push('/play')
    },
    roomFull () {
      console.log('ruangan penuh')
    }
  },
  methods: {
    login () {
      this.$socket.client.emit('connected', { username: this.username })
    },

    playSound (sound) {
      if (sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    }
  }
}
</script>

<style>

</style>
