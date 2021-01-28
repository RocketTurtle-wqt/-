<template>
  <div id="studentRegister">
    <el-input v-model="id" placeholder="请输入学号"></el-input><br>
    <el-input v-model="name" placeholder="请输入姓名"></el-input><br>
    <el-input v-model="cla" placeholder="请输入班级"></el-input><br>
    <div>
      <el-button type="primary">提交</el-button><el-button type="success">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'StudentRegister',
  data() {
    return {
      id:'',
      name:'',
      cla:''
    }
  }
}
</script>

<style scoped>
  #studentRegister{
    width: 70%;
    max-width: 500px;
    margin: 20px auto 0 auto;
  }
  .el-input{
    margin-bottom: 20px;
  }
  #studentRegister>div{
    position: relative;
    height: 50px;
  }
  #studentRegister>div>button:first-child{
    position: absolute;
    left: 20%;
  }
  #studentRegister>div>button:last-child{
    position: absolute;
    right: 20%;
  }
</style>