<template>
  <div id="regist">
    <header>
      <button @click="toggleStudentRegister">登记学生</button><button>登记课程</button>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Regist',
  methods:{
    toggleStudentRegister(){
      if(window.location.href.lastIndexOf('studentRegister')===-1){
        this.$router.push('regist/studentRegister')
      }
    }
  }
}
</script>

<style scoped>
  #regist{
    margin: 0 auto;
    width: 80vw;
    background: #606266;
    box-shadow: 5px 5px 5px 5px gray;
  }
  header{
    display: flex;
    justify-content: space-evenly;
  }
  header>button{
    background: none;
    border: none;
    outline: none;
    background: #409EFF;
    width: 100px;
    height: 40px;
    color: white;
    margin-top: 20px;
  }
  header>button:first-child{
    margin-left: 20%;
  }
  header>button:last-child{
    margin-right: 20%;
  }
  header>button:hover{
    cursor: pointer;
    background: #77B2EE;
  }
</style>