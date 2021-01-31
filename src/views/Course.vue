<template>
  <div>
    <table>
      <tr>
        <th v-for="(x,index) of fields" :key=index>{{x}}</th>
      </tr>
      <tr v-for="(x,index) of set" :key=x.id>
        <td>{{x.id}}</td>
        <td>{{x.name}}</td>
        <td>{{x.classroom}}</td>
        <td><button @click="deleteCourse(index)">删除</button></td>
      </tr>
    </table>
    <button @click="pagePrev">上一页</button><button @click="pageNext">下一页</button>
  </div>
</template>

<script>
import {url} from '../config/url.js'

export default {
  name: 'Course',
  data() {
    return {
      fields:['课程id','课程名称','教室','操作'],
      courses:{
        course:[]
      },
      page:0
    }
  },
  methods:{
    pagePrev(){
      if(this.page>0){
        this.page--
        console.log(this.page)
      }
    },
    pageNext(){
      // console.log(this.all)
      if(this.page<this.all-1){
        this.page++
        console.log(this.page)
      }
    },
    deleteCourse(index){
      let shuju={
        id:this.courses.course[this.page*10+index].id
      }
      this.$axios.post(`${url}deletecourse`,this.$qs.stringify(shuju))
              .then(res=>{
                this.courses=res.data
              }).catch(err=>{
                console.log(`${err} 请求失败`)
              })
      this.courses.course.splice(this.page*10+index,1)
    }
  },
  computed:{
      all(){
        // console.log(this.users.students.length)
        return (Math.floor(this.courses.course.length / 10) + (this.courses.course.length % 10 === 0 ? 0 : 1))
      },
      set(){
        return this.courses.course.slice(this.page*10,this.courses.course.length<=10?this.courses.course.length:10*(this.page+1))
      } 
  },
  mounted(){
    console.log(this.$route.params.stuid)
        this.$axios.get(`${url}course`,{params:{id:this.$route.params.stuid}})
              .then(res=>{
                this.courses.course=res.data
              }).catch(err=>{
                console.log(`${err} 请求失败`)
              })
  }
}
</script>

<style scoped>
    div{
    width: 80vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  table{
    width: 100%;
    position: absolute;
    border-collapse: collapse;
  }
  table td,table th{
    width: 25%;
    border: 1px solid black;
    padding: 10px;
  }
  table button{
    background: none;
    outline: none;
    border: none;
    width: 50%;
    color: white;
    background: #67C23A;
    border-radius: 20px;
    padding: 5px;
    display: block;
    margin: 0 auto;
  }
  table button:hover{
    background: #86E05A;
    cursor: pointer;
  }
    div>button{
    background: none;
    outline: none;
    border: none;
    width: 100px;
    height: 40px;
    position: absolute;
    top: 550px;
    color: white;
    background: #67C23A;
    border-radius: 20px;
  }
  div>button:hover{
    background: #86E05A;
    cursor: pointer;
  }
  div>button:nth-of-type(1){
    left: 10%;
  }
  div>button:nth-of-type(2){
    right: 10%;
  }
</style>