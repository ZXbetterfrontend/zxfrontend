<template>
  <div>
    <div class="de-title">
      {{this.$route.query.data.name}}
    </div>
    <el-divider></el-divider>
    <div class="detail-line">
      <div>
        <img class="img-base" :src="alldetails.gpic">
      </div>
      <div class="line-right">
        <el-row class="single-line"  :gutter="20">
          <el-col :span="12"><div class="grid-label">商品名称</div></el-col>
          <el-col :span="12" ><div class="grid">{{alldetails.gname}}</div></el-col>
        </el-row>
        <el-row class="single-line"  :gutter="20">
          <el-col :span="12"><div class="grid-label">描述</div></el-col>
          <el-col :span="12" ><div class="grid">{{alldetails.gdescribe}}</div></el-col>
        </el-row>
        <el-row class="single-line"  :gutter="20">
          <el-col :span="12"><div class="grid-label">尺寸</div></el-col>
          <el-col :span="12" ><div class="grid">{{alldetails.gsize}}</div></el-col>
        </el-row>
        <el-row class="single-line"  :gutter="20">
          <el-col :span="12"><div class="grid-label">库存</div></el-col>
          <el-col :span="12" ><div class="grid">{{alldetails.gnum}}</div></el-col>
        </el-row>
        <el-row class="single-line"  :gutter="20">
          <el-col :span="12"><div class="grid-label">更新时间</div></el-col>
          <el-col :span="12" ><div class="grid">{{alldetails.gupdate}}</div></el-col>
        </el-row>
        <el-row class="single-line"  :gutter="20">
          <el-col :span="12"><div class="grid-label">价格</div></el-col>
          <el-col :span="12" ><div class="grid grid-price">￥ {{alldetails.gprice}}</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="12"><div class="grid-button"><el-button type="danger" @click="JumpTobuy">立即购买</el-button></div></el-col>
        </el-row>
      </div>
    </div>
    
    <div class="de-title">
        商品详情
    </div>
    <el-divider></el-divider>
    
    <div class="img-con">
      <div><img src="http://q1x2lsqiy.bkt.clouddn.com/4.jpg" alt=""></div>
      <div><span>正品保证：感谢您对本产品的支持，所有产品如实描述，黄金成色品质符合国家标准，支持正规珠宝检测机构复查，一物一证。</span></div>
      
    </div>
    <div class="img-con">
      <div><span>配送方式：仅支持网点自提。</span></div>
      <div><img src="http://q1x2lsqiy.bkt.clouddn.com/1.jpg" alt=""></div>
      
    </div>
    <div class="img-con">
      <div><img src="http://q1x2lsqiy.bkt.clouddn.com/2.jpg" alt=""></div>
      <div><span>克重误差：因物料差异，测量方式，工具和环境不同，请以收到货品克重为准。</span></div>
      
    </div>
    
    

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      good: '',
      alldetails: [{
        label: '商品名称',
        value: this.$route.query.data.name
      },
      {
        label: '规格',
        value: '139g'
      },
      {
        label: '产品系列',
        value: '纪念币典藏'
      },
      {
        label: '材质',
        value: 'Au999+Ag99'
      },
      {
        label: '发行量',
        value: '5300'
      },
      {
        label: '单价',
        value: '12300.00元'
      },]
    }
  },
  created() {
    
    // console.log(this.$route.query.data.hasOwnProperty("gid"))
    // if (!this.$route.query.data.hasOwnProperty("gid")) {
    //   this.$router.push('/home')
    // } else {
    //   this.good = this.$route.query.data
    //   this.initDetails()
    // }
    // console.log(this.$store.state.gid)
    this.initDetails(this.$store.state.gid)
    
  },
  methods: {
    JumpTobuy() {
      this.$router.push({path:'/shoppingcart', query:this.alldetails})
    },
    initDetails (id) {
      // const id = this.$route.query.data.gid
      this.$axios({
        url:'/api/goods/showGoodsInfo',
        params: {gid: id.toString()}
      }).then(res => {
        this.alldetails = res.data.msg
      })
    },
    
  }
}
</script>

<style>
.img-con {
  width: 100%;
  padding: 20px;
  border: none;
  display: flex;
  height: 600px;
}
.de-title {
  font-size: 28px;
  margin: 20px 0px;
  
}
.img-base {
  width: 400px;
  height: 360px;
}
.grid-label {
  text-align: right;
}
.detail-line {
  display: flex;

}
.line-right {
  margin-left: 40px;
}
.single-line {
  height: 40px;
  line-height: 40px;
}
.grid {
  min-width: 300px;
}
.grid-button {
  margin-top: 20px;
}
.grid-price {
  color: #F56C6C;
}
</style>
