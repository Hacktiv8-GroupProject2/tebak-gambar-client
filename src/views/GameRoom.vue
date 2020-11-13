<template>
  <div class="two-row-container">
    <div class="soal-header">
      <h1>Tebak Logo</h1>
    </div>
    <div class="soal">
      <div class="countdown">
        <h3>Timer : {{ timer }}</h3>
      </div>
      <div class="soal-logo">
        <img :src=image alt="">
        <div class="logo-letters">
          <LogoLetter v-for="(letter, index) in answer" :key="index" :letter=letter>
          </LogoLetter>
        </div>
      </div>
      <div class="score-board">
      </div>
    </div>
    <div class="player">
      <h4 v-if="isWrong">Wrong!</h4>
      <div class="answer">
        <input type="text" v-model="player_answer" @keyup.enter="sendAnswer">
      </div>
      <p>press ENTER to answer</p>
      <!-- ceritanya ada 4 player -->
      <div class="players">
        <PlayerCard :name=player.username :score=player.points v-for="player in player_list" :key="player.id"></PlayerCard>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
import LogoLetter from '../components/LogoLetter'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      image: '',
      answer: '',
      player_answer: '',
      isWrong: false,
      correct_answer: ''
    }
  },
  computed: {
    ...mapState({
      player_list: 'player_list'
    })
  },
  components: {
    PlayerCard,
    LogoLetter
  },
  methods: {
    sendAnswer () {
      if (this.player_answer.toLowerCase().trim() !== this.correct_answer.trim()) {
        this.isWrong = true
      } else {
        this.$socket.client.emit('changeQuestion')
        this.player_answer = ''
        this.isWrong = false
      }
    }
  },
  sockets: {
    question (payload) {
      this.image = payload.image
      this.answer = payload.answer.split('')
      this.correct_answer = payload.answer.toLowerCase()
    },
    updatePlayers (payload) {
      this.$store.commit('setPlayerLists', payload)
    }

  },
  created () {
    this.$socket.client.emit('getQuestion')
  }
  // methods: {
  //   timer() {

  //   }
  // }
}
</script>
<style scoped>
.countdown {
  position: absolute;
  top: 50%;
  right: 20%;
}

.countdown span {
    font-family: grenze;
    font-weight: bold;
    color: rgb(248, 224,4);
    border: 5px solid blue;
    border-radius: 25px;
    box-shadow: 2px 1px 12px blue;
    margin: 0 10px;
    padding: 0 30px;
}

.box {
    display: inline-block;
    overflow: hidden;
    height: 1em;
    line-height: 1em;
    font-weight: bold;
    font-size: 16em;
}
.box.after {
    position: relative;
    white-space: pre;
    content: "0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A \9";
}
.box.second-num:after {
    animation: count 1s steps(10) infinite;
}

@keyframes count {
    0% {
        top: 0;
    }
    100% {
        top: -10em;
    }
}
</style>
