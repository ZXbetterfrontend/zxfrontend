<template>
  <div class="goods-container">
    <div class="goods-item" v-for="(item,index) in goods" v-bind:key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{item.name}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click=pucharse(item)>购买</el-button>
        </div>
        <div class="img-container" @click="jumpToDetail(item)"><img class="img-base" :src="item.path"  alt=""></div>
      </el-card>
    </div>
    <el-dialog
      title="确认购买"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div class="good-detail">
        <div class="detail-left">
          <img class="img-detail-base" :src="selectedItem.path" alt="">
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
      <el-form label-position="right" label-width="80px" :model="formLabelAlign">
        <el-form-item label="配送方式">
          <el-radio v-model="radio" label="1">自提</el-radio>
        </el-form-item>
        <el-form-item label="选择网点">
          <el-select v-model="formLabelAlign.region" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="formLabelAlign.type"></el-input>
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
      options: [{
        value: '选项1',
        label: '选项1'
      }, {
        value: '选项2',
        label: '选项2'
      }, {
        value: '选项3',
        label: '选项2'
      }, {
        value: '选项4',
        label: '选项2'
      }, {
        value: '选项5',
        label: '选项2'
      }],
      radio: '1',
      selectedItem: '',
      counts: 1,
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
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
    pucharse(item) {
      this.dialogVisible = true
      this.selectedItem = item
    },
    handleClose() {

    },
    jumpToDetail(item) {
      this.$router.push({path: '/details', query: {data: item}})
    },
    confirmBuy() {
      this.dialogVisible = false
      this.$message({
          message: '购买成功，谢谢您',
          type: 'success'
        });
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
