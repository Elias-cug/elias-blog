<template>
  <section class="app-main">
    <router-view key="" />
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 80px;
}
</style>
