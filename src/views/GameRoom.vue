<template>
  <div class="two-row-container">
    <div class="soal-header">
      <h1>Tebak Logo</h1>
    </div>
    <div class="soal">
      <div class="countdown">
        <span class="box second-num"></span>
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
}
</script>

<style scoped>
  body{
    margin: 0;
    background: #262626;
}

.countdown {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.countdown span {
    font-family: grenze;
    font-weight: bold;
    color: rgb(248, 224,4);
    border: 5px solid #262626;
    border-radius: 25px;
    box-shadow: 2px 1px 12px #262626;
    margin: 0 10px;
    padding: 0 30px;
}

.box {
    display: inline-block;
    overflow: hidden;
    height: 1em;
    line-height: 1em;
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