<template>
  <div id="app">
    <index-component />
  </div>
</template>

<script>
import IndexComponent from './components/IndexComponent.vue'

export default {
  data: function () {
    return {}
  },
  components: {
    IndexComponent
  }
}
</script>

<style scoped>
#app {
    text-align: center;
  }
</style>
