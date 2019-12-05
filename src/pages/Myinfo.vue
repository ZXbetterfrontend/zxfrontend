<template>
  <div>

    <div class="myinfo">我的账户
      <div class="user-detail">
      <div class="id">
        <img src="http://q1x2lsqiy.bkt.clouddn.com/%E6%88%91%E7%9A%84%E8%B4%A6%E6%88%B7.png" style="float:left; height:25px; margin-right: 5px;">
        <div class="id-left">我的账号:</div>
        <div class="id-right">123456</div>
      </div>
      <div class="name">
        <img src="http://q1x2lsqiy.bkt.clouddn.com/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%20%281%29.png" style="float:left; height:25px; margin-right: 5px;">
        <div class="name-left">我的姓名:</div>
        <div class="name-right">{{username}}</div>
      </div>
      <div class="rank">
        <img src="http://q1x2lsqiy.bkt.clouddn.com/%E7%AD%89%E7%BA%A7.png" style="float:left; height:25px; margin-right: 5px;">
        <div class="rank-left">我的等级:</div>
        <div class="rank-right">青铜</div>
      </div>
      <div class="score">
        <img src="http://q1x2lsqiy.bkt.clouddn.com/%E7%A7%AF%E5%88%86%20%281%29.png" style="float:left; height:25px; margin-right: 5px;">
        <div class="score-left">我的积分:</div>
        <div class="score-right">100</div>
      </div>
      <div class="property">
        <img src="http://q1x2lsqiy.bkt.clouddn.com/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86.png" style="float:left; height:25px; margin-right: 5px;">
        <div class="property-left">我的资产:</div>
        <div class="property-right">100，000元</div>
      </div>
    </div>
    </div>
    <div class="recommend">产品推荐
      <div class="block">
        <el-carousel height="200px" style="width: 400px" indicator-position="outside">
          <el-carousel-item v-for="(item,index) in goods" :key="index">
            <el-row>

              <el-col :span="24"><img class="img-container" @click="jumpToDetail(item)" :src="item.path"></el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
    <div class="order">交易明细
      <div style="margin-top: 10px">
      <el-table :data="orderData" style="width: 100%">
        <el-table-column type="index" label="序号" width="50px"></el-table-column>
        <el-table-column prop="oid" label="订单号"></el-table-column>
        <el-table-column prop="ogid" label="商品名" width="200px" ></el-table-column>
        <el-table-column prop="ocount" label="商品数量" width="80px" ></el-table-column>
        <el-table-column prop="oprice" label="单价(人民币)"></el-table-column>
        <el-table-column prop="ototalprice" label="总价(人民币)"></el-table-column>
        <el-table-column prop="rank" label="订单评价">
          <div class="block">
            <el-rate
              :value="randomstar()"
              :colors="colors">
            </el-rate>
          </div>
        </el-table-column>
    </el-table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      orderData: [],
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
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
      ],

    }
  },
  methods: {
    jumpToDetail(item) {
      this.$router.push({path: '/details', query: {data: item}})
    }
  },
  mounted() {
    this.getinfo()
    this.$axios({
      method: 'get',
      url: '/api/order/history'
    }).then(res => {
      this.orderData = res.data.msg
      this.orderData.forEach(ele => {
        ele.rank = this.randomstar()
      })
    })
  },
  methods: {
    getinfo() {
      this.username = this.$store.state.name
    },
    randomstar() {
      return (Math.floor(Math.random()*2) + 3)
    }
  }
}
</script>

<style>
  .myinfo{
    padding-left: 20px;
    padding-top:40px;
    font-size: 25px;
    width:600px;
    position:relative;
  }
  .recommend{
    position: absolute;
    right: 300px;
    top: 95px;
    font-size: 25px;
  }
  .order{
    padding-left: 20px;
    font-size: 25px;
    padding-top:20px;
  }
  .user-detail{
    padding-left: 55px;
  }
  .id{
    font-size: 20px;
    margin-bottom: 10px;
    padding-top: 10px;
  }
  .id-left{
    float:left;
  }
  .name{
    font-size: 20px;
    margin-bottom: 10px;
   }
  .name-left{
    float:left;
  }
  .rank{
    font-size: 20px;
    margin-bottom: 10px;
  }
  .rank-left{
    float: left;
  }
  .score{
    font-size: 20px;
    margin-bottom: 10px;
  }
  .score-left{
    float: left;
  }
  .property{
    font-size: 20px;
    margin-bottom: 10px;
  }
  .property-left{
    float: left;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 2px;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img-container {
    width: 400px;
    height: 200px;
    z-index: 100;
  }
</style>
