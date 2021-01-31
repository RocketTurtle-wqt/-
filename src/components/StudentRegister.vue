<template>
  <div id="studentRegister">
    <el-input v-model="id" placeholder="请输入学号"></el-input><br>
    <el-input v-model="name" placeholder="请输入姓名"></el-input><br>
    <el-input v-model="cla" placeholder="请输入班级"></el-input><br>
    <div>
      <el-button type="primary" @click="registStudent">提交</el-button><el-button type="success">重置</el-button>
    </div>
  </div>
</template>

<script>
import {url} from '../config/url.js'

export default {
  name:'StudentRegister',
  data() {
    return {
      id:'',
      name:'',
      cla:''
    }
  },
  methods:{
    registStudent(){
      let dat=this.$qs.stringify({
        id:this.id,
        name:this.name,
        cla:this.cla
      })
      this.$axios.post(url+'addStudent',dat)
                 .then(res=>{
                   if(res.data==='success'){
                     alert('添加成功')
                   }else{
                     alert('添加学生失败，可能是学号重复')
                   }
                 })
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