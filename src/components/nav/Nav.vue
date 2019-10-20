<template>
  <div :class="$style.navigation">
    <ul :class="$style.navContainer">
      <router-link to="/" tag="li">Home</router-link>
      <router-link to="/about" tag="li">About</router-link>
    </ul>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Nav extends Vue {
}
</script>

<style lang="scss" module>
@import '@scss/components/nav/nav.scss';
</style>