<template>
  <div class="goods-container">
    <div class="goods-item" v-for="(item,index) in goods" v-bind:key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{item.gname}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse(item)>立即购买</el-button>
        </div>
        <div class="img-container" @click="jumpToDetail(item)"><img class="img-base" :src="item.gpic"  alt=""></div>
      </el-card>
    </div>
    <el-dialog
      title="确认购买"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      >
      <div class="good-detail">
        <div class="detail-left">
          <img class="img-detail-base" :src="selectedItem.gpic" alt="">
        </div>
        <div class="detail-right">
          <div class="first-line">
            {{selectedItem.name}}
          </div>
          <div class="second-line">
            <span class="label-counts">数量</span>
            <div class="detail-counts"><el-input-number size="small"  v-model="counts" :min="1" :max="10" label="数量"></el-input-number></div>
          </div>
        </div>

      </div>
      <el-form label-position="right" label-width="80px">
        <el-form-item label="商品id">
          <div >{{selectedItem.gid}}</div>
        </el-form-item>
        <el-form-item label="配送方式">
          <el-radio v-model="radio" label="1">自提</el-radio>
        </el-form-item>
        <el-form-item label="选择网点">
          <el-select v-model="region" placeholder="请选择">
            <el-option
              v-for="item in alldress"
              :key="item.bid"
              :label="item.bname"
              :value="item.bid">
            </el-option>
          </el-select>
        </el-form-item>
    
       
          <el-form-item label="">
            <el-checkbox v-model="agreement" >本人已阅读并同意<a style="color:red">《购买协议》</a></el-checkbox>
          </el-form-item>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmBuy" :disabled="!agreement">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      agreement: false,
      options: [],
      radio: '1',
      selectedItem: '',
      counts: 1,
      region: '',
      dialogVisible: false,
      goods: [],
      alldress: []
    }
  },
  mounted() {
    // this.$forceUpdate()
    this.getAllGoods()
    this.getAllAddress()
  },
  methods: {
    getAllGoods() {
      this.$axios.get('api/goods/showAllGoods').then(res => {
        // console.log(res)
        this.goods = res.data.msg
      })
    },
    pucharse(item) {
      this.dialogVisible = true
      this.selectedItem = item
    },
    handleClose() {
      this.selectedItem = ''
      this.dialogVisible = false
      this.region = ''
      this.counts = 1
    },
    jumpToDetail(item) {
      this.$store.commit('setgid',item.gid)
      this.$router.push({path: '/details', query: {data: item}})
    },
    confirmBuy() {
      
      const pid = this.selectedItem.gid
      const count = this.counts
      const bid = this.region

      this.$axios.post('/api/order/add',
        {
          pid: pid,
          count: count,
          bid: bid
        }
      ).then(res => {
        if (res.data.code === 0) {
          this.$message({
          message: res.data.msg,
          type: 'error'
          });
        } else if (res.data.code === 1) {
         this.$message({
          message: '购买成功，谢谢您',
          type: 'success'
        });
        }
      })
      this.dialogVisible = false
      this.handleClose()
    },
    getAllAddress() {
      this.$axios.get('/api/branch/all').then(res => {
        this.alldress = res.data.msg
      })
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
  overflow: hidden;
}
.img-base {
  width: 390px;
  height: 300px;
  position: relative;
  top: -70px;
}
.el-card__body {
  padding: 20px 0px 0px 0px;
}
.good-detail{
  display: flex;
  align-items: center;
}
.detail-left {
  width: 100px;
  height: 100px;
}
.img-detail-base {
  width: 100px;
  height: 100px;
}
.detail-right{
  height: 120px;
  width: 350px;
  margin-left: 20px;
}
.label-counts {
  position: absolute;
  top: 8px;
}
.detail-counts {
  display: inline-block;
  margin-left: 40px;
}
.first-line {
 width: 100%;
 height: 60px;
 padding: 0 0 0 40px;
 line-height: 60px;
}
.second-line {
  position: relative;
}
</style>
