<template>
  <div>
    <div class="de-title">
      {{this.$route.query.data.name}}
    </div>
    <el-divider></el-divider>
    <div class="detail-line">
      <div>
        <img class="img-base" :src="this.$route.query.data.path">
      </div>
      <div class="line-right">
        <el-row class="single-line" v-for="(item,index) in alldetails" :key="index" :gutter="20">
          <el-col :span="12"><div class="grid-label">{{item.label}}</div></el-col>
          <el-col :span="12" ><div class="grid">{{item.value}}</div></el-col>
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
      },

      ]
    }
  },
  created() {
    this.good = this.$route.query.data
  },
  methods: {
    JumpTobuy() {
      this.$router.push('/shoppingcart')
    }
  }
}
</script>

<style>
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

</style>
