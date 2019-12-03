<template>
  <div class="goods-container">
    <div class="goods-item" v-for="(item,index) in goods" v-bind:key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{item.name}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse(item.tag)>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" :src="item.path"  alt=""></div>
      </el-card>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确认购买</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>2020鼠年梅花型币</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse()>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/rats.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>守护之羽</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse()>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/fly.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>属你宝贝</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse()>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/baby.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>松鹤延年狼毫银毛笔</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse()>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/wof.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>中国经典钱币珍藏套装</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse()>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/classic.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>中信银行四十周年纪念币</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse()>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/40.jpg" alt=""></div>
      </el-card>
    </div>
    <div class="goods-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>中信金</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse()>购买</el-button>
        </div>
        <div class="img-container"><img class="img-base" src="../assets/goods/gold.jpg" alt=""></div>
      </el-card>
    </div> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      goods: [
        {
          name: '建国七十周年纪念币',
          tag: 'panda',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/panda.jpg'
        },
        {
          name: '2020鼠年梅花型币',
          tag: 'rats',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/rats.jpg'
        },
        {
          name: '守护之羽',
          tag: 'fly',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/fly.jpg'
        },
        {
          name: '属你宝贝',
          tag: 'baby',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/baby.jpg'
        },
        {
          name: '松鹤延年狼毫银毛笔',
          tag: 'wof',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/wof.jpg'
        },
        {
          name: '中国经典钱币珍藏套装',
          tag: 'classic',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/classic.jpg'
        },
        {
          name: '中信银行四十周年纪念币',
          tag: '40',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/40.jpg'
        },
        {
          name: '中信金',
          tag: 'gold',
          path: 'http://q1x2lsqiy.bkt.clouddn.com/gold.jpg'
        },
      ]
    }
  },
  methods: {
    pucharse(pid) {
      console.log(pid)
      this.dialogVisible = true
    },
    handleClose() {

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
