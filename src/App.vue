<template>
  <div id="app">
    <top-select></top-select>
    <router-view></router-view>
  </div>
</template>

<script>
import TopSelect from './components/TopSelect.vue'
export default {
  components: { TopSelect },
  name:'App',
}
</script>

<style scoped>

</style>