<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <navbar />
    </div>
    <app-main />
  </div>
</template>

<script>
import { Navbar, AppMain } from './components/index.js'
export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  .fixed-header {
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    min-height: 60px;
    border-bottom: 1px solid #e8e9e7 !important;
  }
}
</style>
