<template>
  <div :class="[letter !== ' ' ? 'logo-letter' : 'space']">
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'LogoLetter',
  props: ['letter']
}
</script>
