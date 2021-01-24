<template>
  <div>
    <main>
      <h2>管理员登陆</h2>
      <input type="text" name="name" placeholder="用户名" autocomplete="off" v-model="username"><br>
      <input type="password" name="password" placeholder="密码" autocomplete="off" v-model="password"><br>
      <button @click="check">提交</button><button>重置</button>
    </main>
  </div>
</template>

<script>
export default {
  name:'Login',
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    check(){

    }
  }
}
</script>

<style scoped>
  main{
    width: 500px;
    height: 300px;
    background: #409EFF;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  h2{
    color:white;
    text-align: center;
    margin: 0;
  }
  input:nth-of-type(1),input:nth-of-type(2){
    background: none;
    outline: none;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 15%;
    padding-left: 20px;
    background: #F2F6FC;
  }
  input:nth-of-type(1){
    top: 60px;
  }
  input:nth-of-type(2){
    top: 120px;
  }
  input::placeholder{
    color: #C0C4CC;
  }
  button:nth-of-type(1),button:nth-of-type(2){
    background: none;
    outline: none;
    border: none;
    width: 100px;
    height: 40px;
    position: absolute;
    top: 200px;
    color: white;
    background: #67C23A;
    border-radius: 20px;
  }
  button:nth-of-type(1){
    left: 20%;
  }
  button:nth-of-type(2){
    right: 20%;
  }
  button:nth-of-type(1):hover,button:nth-of-type(2):hover{
    background: #86E05A;
    cursor: pointer;
  }
</style>