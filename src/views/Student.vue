<template>
  <div>
    <table>
      <tr>
        <th v-for="(value,index) of fields" :key="index">{{value}}</th>
      </tr>
      <tr v-for="(student) of set" :key="student.id">
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td>{{student.class}}</td>
        <td><button @click="studentClass(student.id)">查看</button></td>
      </tr>
    </table>
    <button @click="pagePrev">上一页</button><button @click="pageNext">下一页</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      fields:['学号','姓名','班级','查看课程'],
      users:{
        students:[],
      },
      page:0
      // all: Math.floor(this.users.students.length / 7) + this.users.students.length % 7 === 0 ? 0 : 1,
      // page: 1,
      // set: this.users.students.slice(0,this.users.student.length<=7?this.users.student.length:7)
    }
  },
  methods:{
    studentClass(id){
      this.$router.push(`/student/course/${id}`)
    },
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
    }
  },
  computed:{
      all(){
        // console.log(this.users.students.length)
        return (Math.floor(this.users.students.length / 10) + (this.users.students.length % 10 === 0 ? 0 : 1))
      },
      set(){
        return this.users.students.slice(this.page*10,this.users.students.length<=10?this.users.students.length:10*(this.page+1))
      } 
  },
  mounted(){
    this.$axios.get('http://localhost:3000/student')
              .then(res=>{
                this.users=res.data
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