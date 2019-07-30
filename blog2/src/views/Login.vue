<template>
    <div class="login">
    <!-- <img  class="img" src="../assets/back.jpg" alt="" > -->
     <el-form ref="form" :model="form" label-width="100px">
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label-width="70px">
                    <span><font color="blue" size="4">后台管理系统</font></span>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label="账户：" prop="phone">
                      <el-input v-model="form.phone" size="small"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label="密码：" prop="password">
                      <el-input v-model="form.password" size="small"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item>
                      <el-button type="primary" @click="submit">登录</el-button>
                      <!-- <el-button @click="register">注册</el-button> -->
                  </el-form-item>
              </el-col>
          </el-row>
      </el-form>
    </div>
</template>

<script>
  import QS from 'qs';
    export default {
      name:'login',
      data() {
        return { 
            form:{
              phone:"",
              password:""
            },
            list:[]   
        };
      },
      methods: {
        submit(){
          if(this.phone === '' ){
            alert("用户名不能为空")
            return false;
          }
          if( this.password === ''){
             alert("密码不能为空")
             return false;
          }
          this.$axios.post('/api/user/login',QS.stringify(this.form))
          .then(res => {
            console.log(res.data);
            if(res.data.code == 0){
              this.$router.push({ path:'/account' })
            }else{
              this.$router.push({ path:'/login' });
              alert('用户名或密码错误')
            }
          })
          .catch(res =>{
            console.log(res.erro)
          })
        }
      },
      mounted(){
        
      //   let data = {
      //     currentPage:1,
      //     pagesize:10,
      //   }
      //   this.$axios({
      //     method:'post',
      //     headers:{ 'Content-Type': 'application/x-www-form-urlencoded'},
      //     // contentType:'application/json;charset=utf-8',
      //     // ContentType:'application/x-www-form-urlencoded',
      //     url:"/api/user/accountList",
      //     data:QS.stringify(data)
      //   }).then( res =>{
      //     console.log(res.data);
      //     list= res.data
      //   }).catch(res =>{
      //     console.log(res.erro);
      //   });
      }
    }
</script>
<style lang="less" scoped>
  .img{
    width: 100%;
    height: 100%;
    position: absolute;      
  } 
</style>

