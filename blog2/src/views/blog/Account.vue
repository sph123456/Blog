<template>
  <div class="accountList">
<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>账户管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>
    </div>
</template>

<script>
  export default {
    data() {
      return { 
        data:{
          list:[]
        }    
      };
    },
    methods: {
      login(){
        if(this.phone==null||this.password == null){
          alert("用户名或密码不能为空")
        }else{

        }
      }
    },
    mounted(){
      
      this.$axios({
        methods:'post',
        headers:{ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
        url:"/api/user/accountList",
        data:{
          currentPage:"1",
          pageSize:"10",
        }
      }).then( res =>{
        console.log(data);
        list= res.data
      }).catch(res =>{
        console.log(erro);
      });
    }
  }
</script>
<style lang="less" scoped>
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

 .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
   
  }
</style>

