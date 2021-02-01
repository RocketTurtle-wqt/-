<template>
  <div>
    <header>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="/login" :disabled="this.$store.state.manager">登陆</el-menu-item>
        <el-menu-item index="/" :disabled="!this.$store.state.manager">注销</el-menu-item>
        <el-menu-item index="/student" :disabled="!this.$store.state.manager">学生信息</el-menu-item>
        <el-menu-item :index="registRoute" :disabled="!this.$store.state.manager">登记</el-menu-item>
      </el-menu>
    </header>
  </div>
</template>

<script>
export default {
  name:'TopSelect',
  data() {
    return {
      registRoute:'/regist'
    };
  },
  computed: {
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch:{
    $route:{
      handler(newVal, oldVal){
        if(newVal.path==='/login'&&oldVal.path!=='/login') this.$store.state.manager=!this.$store.state.manager
        if(newVal.path==='/regist/studentRegister'&&oldVal.path==='/regist') this.registRoute = newVal.path
        else this.registRoute = '/regist'
      }
    }
  }
}
</script>

<style scoped>

</style>