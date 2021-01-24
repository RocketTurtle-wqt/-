<template>
  <div>
    <header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" @click="login">登陆</el-menu-item>
        <el-menu-item index="2" @click="firstPage">注销</el-menu-item>
      </el-menu>
    </header>
  </div>
</template>

<script>
export default {
  name:'TopSelect',
    data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login(){
      this.$router.push('login')
    },
    firstPage(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>