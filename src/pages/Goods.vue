<template>
  <div class="goods-container">
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>建国七十周年纪念币</span>
          <el-button style="float: right; padding: 3px 0" type="text">详细</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/panda.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>2020鼠年梅花型币</span>
          <el-button style="float: right; padding: 3px 0" type="text">详细</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/rats.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>守护之羽</span>
          <el-button style="float: right; padding: 3px 0" type="text">详细</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/fly.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>属你宝贝</span>
          <el-button style="float: right; padding: 3px 0" type="text">详细</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/baby.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>松鹤延年狼毫银毛笔</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/wof.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>中国经典钱币珍藏套装</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/classic.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>中信银行四十周年纪念币</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/40.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>中信金</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/gold.jpg" alt=""></div>
      </el-card>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style>
.goods-container {
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-wrap:  wrap;
}
.goods-item {
  width: 390px;
  height: 300px;
  margin: 5px
  /* background-color: aqua; */
}
.img-container {
  width: 390px;
  height: 200px;
}
.img-base {
  width: 390px;
  height: 200px;
}
.el-card__body {
  padding: 20px 0px 0px 0px;
}
</style>
