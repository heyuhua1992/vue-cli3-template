<template>
<div>
  <div class="type1">type3</div>
  <div class="type2">adsf</div>
  <img class="" :src="$imgSrc('logo.png')">
  <div>{{ percent }}</div>
</div>
</template>

<script>
import PreLoadImg from '@/mixin/PreLoadImg'

export default {
  mixins: [ PreLoadImg ],
  data () {
    return {
      percent: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.type1{
  color: $color1;
}
.type2{
  color: green;
}
</style>
