<template>
  <div class="player-card">
    <div class="score">
      {{score}}
    </div>
    <div class="player-avatar">
        <img :src=avatar alt="">
    </div>
    <div class="player-name">
      <h2>{{name}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: ['name', 'score'],
  computed: {
    avatar () {
      const url = `https://avatars.dicebear.com/api/bottts/${this.name}.svg`
      return url
    }
  }
}
</script>

<style>

</style>
