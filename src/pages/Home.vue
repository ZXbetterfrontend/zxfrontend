<template>
  <div>
    <div class="header-bar">
      <el-row type="flex" justify="end">

        <el-col :span="2"><div class="grid-content shopping-cart ">
          <div class="shopping-cart " @click="jumpToCart"></div></div></el-col>
          <el-col :span="3">

          <div class="grid-content user-container" @click="jumpToMyinfo">
            <div><el-avatar icon="el-icon-user-solid"></el-avatar></div> 
            <div class="user-container">{{username}}</div>
          </div>
        </el-col>
      </el-row> 
    </div>

     <div class="goods-container">
        <div class="goods-left"></div>
        <div class="goods-middle">
          <transition>   
            <router-view></router-view>
          </transition>
        </div>
        <div class="goods-right"></div>
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
  },
  methods: {
    jumpToCart() {
      this.$router.push('/shoppingCart')
    },
    jumpToMyinfo() {
      this.$router.push('/myinfo')
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

.goods-container {
  /* margin: 75px 0 0 0; */
  padding: 55px 0 0 0;
  width: 100%;
  /* background-color: red; */
  display: flex;
}
.goods-left {
  /* background-color: yellowgreen; */
  height: 400px;
  min-width: 100px;
  flex-grow: 2;
}
.goods-middle {
 /* background-color: #eee; */
 width: 1200px;
 height: 400px;
 
}
.goods-right {
  /* background-color: yellowgreen; */
  height: 400px;
  min-width: 100px;
  flex-grow: 2;
}
</style>
