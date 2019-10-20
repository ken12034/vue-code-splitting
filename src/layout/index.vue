<template>
  <div class="layout">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Nav:() => import(/* webpackChunkName: "nav" */"@components/nav"),
  }
})
export default class Layout extends Vue {
}
</script>
