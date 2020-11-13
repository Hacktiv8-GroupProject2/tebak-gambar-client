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
        <img src="https://i.imgur.com/w5AOsXU.jpg" alt="">
        <!-- ceritanya logonya ada 3 Letter -->
        <div class="logo-letters">
          <LogoLetter/>
          <LogoLetter/>
          <LogoLetter/>
        </div>
      </div>
      <div class="score-board">
      </div>
    </div>
    <div class="player">
      <!-- ceritanya ada 4 player -->
      <PlayerCard name="sikomo" score=2></PlayerCard>
      <PlayerCard name="sibudi" score=15></PlayerCard>
      <PlayerCard name="siandi" score=5></PlayerCard>
      <PlayerCard name="sikamp" score=66></PlayerCard>
    </div>
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
import LogoLetter from '../components/LogoLetter'

export default {
  name: 'Home',
  components: {
    PlayerCard,
    LogoLetter
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

</style>
