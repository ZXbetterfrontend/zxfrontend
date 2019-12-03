<template>
  <div>
    <div class="header-bar">
      <el-row type="flex" justify="end">
        
        <el-col :span="2"><div class="grid-content shopping-cart ">
          <div class="shopping-cart el-icon-shopping-cart-full"></div></div></el-col>
          <el-col :span="3">
          <div class="grid-content user-container">
            <div><el-avatar icon="el-icon-user-solid"></el-avatar></div> 
            <div class="user-container">{{username}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: 'kino'
    }
  }
}
</script>

<style>
.header-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: #2d3a4b;
  box-shadow: 0px 0px 6px rgba(1,1,1,0.2);
}
.grid-content  {
  margin: 10px 0px 0px 20px;
}
.colortemp {
  background-color: red;
}
.user-container {
  display: flex;
  align-items: center;
}
.user-container div {
  margin: 0px 0px 0px 20px;
  color: #eee;
}
.shopping-cart {
  height: 100%;
  color: #eee;
  font-size: 31px
}
</style>
