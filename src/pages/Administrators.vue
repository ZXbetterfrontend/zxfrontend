<template>
  <div class="admin-con">
    <!-- 页面头部信息 -->
 
      <div class="header-bar">
        <el-row :span="2" type="flex" justify="end">

          <el-col :span="1" :offset="5">
             <el-image
               style="width: 40px; height: 40px;float: right;text-align: center;margin-top:8px;margin-right: 10px "
               :src="url"
               :fit="fits"
             ></el-image>
          </el-col>

          <el-col :span="15"  style="color: #FFFFFF; margin: auto;font-size:x-large">中信银行贵金属理财宝</el-col>

          <el-col :span="7" >
            <div class="grid-content user-container" style="float: right;margin-right: 20px;margin-top: 6px">
              <div>
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
              <div class="user-container">{{username}}</div>
              <div> <el-button type="text" @click="exita()">退出</el-button> </div>
            </div>
          </el-col>
        </el-row>
      </div>
  <div class="con-con">
    <el-menu @select="jumpto" default-active="1" class="el-menu-vertical-demo"  text-color="#eee" background-color="#2d3a4b">
    <el-menu-item index="1">
      <i class="el-icon-s-order"></i>
      <span slot="title">订单历史</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-pie-chart"></i>
      <span slot="title">数据统计</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-edit"></i>
      <span slot="title">商品编辑</span>
    </el-menu-item>
  </el-menu>

  <div class="route-con-admin">
    <transition >
      <router-view></router-view>
    </transition>
  </div>
  </div>
  
  

    <!-- 销售产品列表模块
    <div type="flex" class="admin-content">
      <el-table :data="saleHistory" class="admin-content-table">
        <el-table-column label="商品名称" prop="productName"></el-table-column>
        <el-table-column label="产品ID" prop="productId"></el-table-column>
        <el-table-column label="订单号" prop="orderNum"></el-table-column>
        <el-table-column label="用户名称" prop="userName"></el-table-column>
        <el-table-column label="购买数量" prop="purchaseNum"></el-table-column>
        <el-table-column label="售出单价" prop="sellPrice"></el-table-column>
        <el-table-column label="售出日期" prop="sellDate"></el-table-column>
   
      </el-table>
      <div class="page-controler">
          <el-pagination @current-change="pagechange" class="page-self"
      layout="prev, pager, next"
      :total="saleHistory.length">
      </el-pagination>
      </div>
     
    </div>

      图例显示模块 -->
      <!-- <el-row type="flex" justify="center">
        <el-col :span="1"></el-col>
        <el-col :span="12">
          <div id="myChart" :style="{width: '640px', height: '480px'}"></div>
        </el-col>
        <el-col :span="12">
          <div id="funnelchart" :style="{width: '640px', height: '480px'}"></div>
        </el-col>
      </el-row>

      <el-row class="add-info-bar">
        <el-col align-items="left" style="color: #FFFFFF; margin-left: 10px; float: left;font-size:x-large">添加产品</el-col>
      </el-row>

     
     <el-row>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="输入商品名称" clearable></el-input>
          </el-form-item>
          
          <el-form-item label="商品规格" prop="spec">
            <el-input v-model="ruleForm.spec" placeholder="输入商品规格" clearable></el-input>
          </el-form-item>
          <el-form-item label="商品系列" prop="series">
            <el-input v-model="ruleForm.series" placeholder="输入商品系列" clearable></el-input>
          </el-form-item>
          <el-form-item label="商品材质" prop="texture">
            <el-input v-model="ruleForm.texture" placeholder="输入商品材质" clearable></el-input>
          </el-form-item>
          <el-form-item label="商品发行量" prop="num">
            <el-input v-model="ruleForm.num" placeholder="商品发行量" clearable></el-input>
          </el-form-item>
          <el-form-item label="商品单价" prop="price">
            <el-input v-model="ruleForm.price" placeholder="输入商品单价" clearable></el-input>
          </el-form-item>
         
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>

        </el-form>
      </el-row> -->
  </div>
</template>


<script type="text/javascript">
export default {
  data () {
// 与验证声明相关的变量
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品名称'));
      } else {
        if (this.ruleForm.name !== '') {
          this.$refs.ruleForm.validateField('name');
        }
        callback();
      }
    };
    /*
    var validateSpec = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品规格'));
      } else {
        if (this.ruleForm.spec !== '') {
          this.$refs.ruleForm.validateField('spec');
        }
        callback();
      }
    };
    var validateSpec = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品系列'));
      } else {
        if (this.ruleForm.series !== '') {
          this.$refs.ruleForm.validateField('series');
        }
        callback();
      }
    };
    var validateSpec = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品材质'));
      } else {
        if (this.ruleForm.texture !== '') {
          this.$refs.ruleForm.validateField('texture');
        }
        callback();
      }
    };
    var validateSpec = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品发行量'));
      } else {
        if (this.ruleForm.num !== '') {
          this.$refs.ruleForm.validateField('num');
        }
        callback();
      }
    };
    var validatePrice = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品价格'));
      } else {
        if (this.ruleForm.price !== '') {
          this.$refs.ruleForm.validateField('price');
        }
        callback();
      }
    };
    */
// 与验证声明相关的变量end

    return {
      //产品添加模块begin
      ruleForm: {
        username: '',
        name: '', // 商品名称
        /*
        spec: '', // 商品规格
        series: '', // 商品系列
        texture: '', // 商品材质
        num: '', // 商品发行量
        price: '' // 商品价格
        */
      },
      rules: { // 验证规则声明
        name: [{ validator: validateName, trigger: 'blur' }],
        /*
        spec: [{ validator: validateSpec, trigger: 'blur' }],
        series: [{ validator: validateSeries, trigger: 'blur' }],
        texture: [{ validator: validateTexture, trigger: 'blur' }],
        num: [{ validator: validateNum, trigger: 'blur' }],
        price: [{ validator: validatePrice, trigger: 'blur' }]
        */
        // 验证声明结束
      },
      //产品添加模块end

      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: 'Administrator',
      fits: 'fill',
      url: 'http://q1x2lsqiy.bkt.clouddn.com/logo.png',
      saleHistory: [{
        productName: '守护之羽',
        productId: '13488',
        orderNum: '20191204',
        userName: 'Handsome',
        purchaseNum: '2',
        sellPrice: '8888',
        sellDate: '2019-11-25',
        Operation: ''
      },
      {
        productName: '松鹤延年狼毫银毛笔',
        productId: '13477',
        orderNum: '20191206',
        userName: 'Handsome',
        purchaseNum: '5',
        sellPrice: '6666',
        sellDate: '2019-11-26',
        Operation: ''
      },
      {
        productName: '中国经典钱币珍藏套装',
        productId: '13466',
        orderNum: '20191207',
        userName: 'Handsome',
        purchaseNum: '5',
        sellPrice: '1234',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信银行四十周年纪念币',
        productId: '13433',
        orderNum: '20191209',
        userName: 'Handsome',
        purchaseNum: '9',
        sellPrice: '3333',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信银行四十周年纪念币',
        productId: '13433',
        orderNum: '20191209',
        userName: 'Handsome',
        purchaseNum: '9',
        sellPrice: '3333',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信银行四十周年纪念币',
        productId: '13433',
        orderNum: '20191209',
        userName: 'Handsome',
        purchaseNum: '9',
        sellPrice: '3333',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信银行四十周年纪念币',
        productId: '13433',
        orderNum: '20191209',
        userName: 'Handsome',
        purchaseNum: '9',
        sellPrice: '3333',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信银行四十周年纪念币',
        productId: '13433',
        orderNum: '20191209',
        userName: 'Handsome',
        purchaseNum: '9',
        sellPrice: '3333',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信银行四十周年纪念币',
        productId: '13433',
        orderNum: '20191209',
        userName: 'Handsome',
        purchaseNum: '9',
        sellPrice: '3333',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信银行四十周年纪念币',
        productId: '13433',
        orderNum: '20191209',
        userName: 'Handsome',
        purchaseNum: '9',
        sellPrice: '3333',
        sellDate: '2019-11-27',
        Operation: ''
      },
      {
        productName: '中信金',
        productId: '13455',
        orderNum: '20191210',
        userName: 'Handsome',
        purchaseNum: '11',
        sellPrice: '9999',
        sellDate: '2019-11-28',
        Operation: ''
      }],
      currentPageData: [],
    } 
  }, 
  created() {
    this.username = this.$store.state.name
    this.getallhistory()
  },
  methods:{
    // 获取所有历史订单
    getallhistory() {
      this.$axios.get('/api/order/history').then(res => {
        console.log(res.data)
      })
    },
    // 获取销售折线图数据
    getLineData() {
      this.$axios.get()
    },
    // 页码变化 
    pagechange(index) {
      console.log(index)
      
    },
    exita:function(){
      this.$store.commit('clearname')
      this.$store.commit('cleargid')
      this.$router.push('/')
    },
    // 产品添加信息函数提交重置begin
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }, //产品添加信息函数提交重置end,
    jumpto(index) {
      console.log(index)
      if (index == 1) {
        this.$router.push('/administrators')
      } else if(index ==2) {
        this.$router.push('/analysis')
      }
    }
  }, //methods end

  mounted() {
    // this.drawLine();
    // this.funnelChart();
  },

} // export
</script>

// 页面样式规划
<style type="text/css">
.admin-con {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.con-con {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  padding: 60px 0 0 0;
  overflow: hidden;
}
  
  .route-con-admin {
    flex-flow: 2;
    /* background-color: red; */
    padding: 10px 0px 0px 20px;
    z-index: 100000;
    width: 100%;
  }







  .page-controler {
    width: 100%;
    margin: 20px 0px;
    
  }
  .page-self {
    margin-right: 0;
    text-align: right;
  }
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
  .add-info-bar {/* 添加产品样式*/
    width: 100%;
    height: 40px;
    position: relative;
    background-color: #2d3a4b;
    box-shadow: 0px 0px 6px rgba(1,1,1,0.2);
    z-index: 100;
  }
  .demo-ruleForm{
    column-width: auto;
  }
  .grid-content  {
    margin: 0px 0px 0px 20px;
  }
  .colortemp {
    background-color: red;
  }
  .user-container {
    display: flex;
    align-items: center;
  }
  .user-container div{
    margin: 0px 0px 0px 20px;
    color: #eee;
  }
  .shopping-cart {
    height: 100%;
    color: #eee;
    font-size: 31px
  }
  .el-menu-vertical-demo{
    padding: 60px 0 0 0;
     width: 200px;
    min-height: 400px;
    height: 100%;
    z-index: 3000;
    
    color: #eee;
  }
  .el-menu {
    border-right: none;
  }
</style>
