<template>
  <div class="home-contianer">
    <div class="header-bar">
      <el-row type="flex" justify="end">

           <el-col :span="2"  >

             <el-image
               style="width: 40px; height: 40px;float: right;text-align: center;margin-top:8px;margin-right: 10px "

               :src="url"
               :fit="fit"

             ></el-image>

          </el-col>


          <el-col :span="15"  style="color: #FFFFFF; margin: auto;font-size:x-large">中信银行贵金属理财宝</el-col>


          <el-col :span="7" >

          <div class="grid-content user-container" @click="jumpToMyinfo" style="float: right;margin-right: 10px;margin-top: 8px" >
            <div><el-avatar icon="el-icon-user-solid"></el-avatar></div>
            <div class="user-container">{{username}}</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="goods-container">
      <div class="goods-left"></div>
      <div class="goods-middle">
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </div>
      <div class="goods-right"></div>
    </div>

    <div @click="jumpToHome" class="home-button el-icon-s-home">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: 'kino',
      transitionName:'',
      fits: ['fill'],
      url: 'http://q1x2lsqiy.bkt.clouddn.com/logo.jpg',
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
	    //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
  methods: {
    jumpToCart() {
      this.$router.push('/shoppingCart')
    },
    jumpToMyinfo() {
      this.$router.push('/myinfo')
    },
    jumpToHome() {
      this.$router.push('/home')
    },

  }
}
</script>

<style>
.home-contianer {
  position: relative;
}
.header-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: #2d3a4b;
  box-shadow: 0px 0px 6px rgba(1,1,1,0.2);
  z-index: 1000;
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
  cursor: pointer;
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

.home-button {
  position: fixed;
  bottom: 50px;
  right: 100px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #C0C4CC;
  font-size: 24px;
  text-align: center;
  line-height: 37px;
  color: #fff;
  cursor: pointer;
}






.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
