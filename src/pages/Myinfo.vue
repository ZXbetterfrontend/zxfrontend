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
        <div class="name-right">kino</div>
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
    <div class="order">交易明细
      <div style="margin-top: 10px">
      <el-table :data="orderData" style="width: 100%">
        <el-table-column type="index" label="序号" width="50px"></el-table-column>
        <el-table-column prop="oid" label="订单号"></el-table-column>
        <el-table-column prop="ogid" label="商品名" width="200px" ></el-table-column>
        <el-table-column prop="ocount" label="商品数量" width="80px" ></el-table-column>
        <el-table-column prop="oprice" label="单价(人民币)"></el-table-column>
        <el-table-column prop="ototalprice" label="总价(人民币)"></el-table-column>
        <el-table-column prop="evaluate" label="订单评价">
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
      orderData: [],
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/api/order/history'
    }).then(res => {
      this.orderData = res.data.msg
    })
  },
  methods: {
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
</style>
