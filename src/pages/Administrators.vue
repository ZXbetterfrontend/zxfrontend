<template>
  <div>
    <!-- 页面头部信息 -->
    <table>
      <div class="header-bar">
        <el-row type="flex" justify="end">
          <el-col align-items="left" style="color: #FFFFFF; margin: auto;float:left;font-size:x-large">中信银行贵金属理财宝</el-col>
          <!-- <el-col :span="2">
            <div class="grid-content shopping-cart ">
              <div class="shopping-cart el-icon-shopping-cart-full">
              </div>
            </div>
          </el-col> -->
          <el-col :span="5" >
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
    </table>

    <!-- 销售产品列表模块 -->
    <div type="flex" class="admin-content">
      <el-table :data="info" class="admin-content-table">
        <el-table-column label="商品名称" prop="productName"></el-table-column>
        <el-table-column label="产品ID" prop="productId"></el-table-column>
        <el-table-column label="订单号" prop="orderNum"></el-table-column>
        <el-table-column label="用户名称" prop="userName"></el-table-column>
        <el-table-column label="购买数量" prop="purchaseNum"></el-table-column>
        <el-table-column label="售出单价" prop="sellPrice"></el-table-column>
        <el-table-column label="售出日期" prop="sellDate"></el-table-column>
        <el-table-column label="操作" prop="Operation">
          <template slot-scope="scope">
             <el-button type="text" @click="operate1">删除</el-button>
             <el-button type="text" @click="operate2">功能1</el-button>
             <el-button type="text" @click="operate3">功能2</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

      <!-- 图例显示模块 -->
      <el-row type="flex" justify="center">
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

      <!-- 添加产品信息模块 -->
     <!-- <el-row>
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
      info: [{
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
        productName: '中信金',
        productId: '13455',
        orderNum: '20191210',
        userName: 'Handsome',
        purchaseNum: '11',
        sellPrice: '9999',
        sellDate: '2019-11-28',
        Operation: ''
      }],
    } // return end
  }, // data() end

  methods:{
    exita:function(){
      this.$router.push('/')
    },
    operate1: function() {
      alert('delete successfully!')
    },
    operate2: function() {
      alert('Function1 work successfully!')
    },
    operate3: function() {
      alert('Function2 work successfully!')
    },

    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          title: {
            text: '产品销售情况',
            left: 'center',
           },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
            }
          },
          toolbox: {
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          grid: {
            x: 100,
            y: 70,
            x2: 20,
            y2: 30,
          },
          xAxis: {
            type: 'category',
            data: ['May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
      }); // myChart
    }, // drawLine

    funnelChart(){
      // 基于准备好的dom，初始化echarts实例
      let funnelchart = this.$echarts.init(document.getElementById('funnelchart'))
      // 绘制图表
      funnelchart.setOption({
        title: {
          text: '漏斗图',
          subtext: '',
          left: '5%',

        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ['中信金','纪念币','钱币','银毛笔','守护羽']
        },
        calculable: true,
          series: [
            {
                name:'漏斗图',
                type:'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    {value: 60, name: '守护羽'},
                    {value: 40, name: '银毛笔'},
                    {value: 20, name: '钱币'},
                    {value: 80, name: '纪念币'},
                    {value: 100, name: '中信金'}
                ]
            }
          ]
      }); // myChart
    }, // drawLine

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
    } //产品添加信息函数提交重置end
  }, //methods end

  mounted() {
    this.drawLine();
    this.funnelChart();
  },

} // export
</script>

// 页面样式规划
<style type="text/css">
  .admin-container {
    background-color: #2d3a4b;
    min-height: 100%;
    width: 100%;
    position: relative;
  }
  .admin-content {
    background-color: #FFFFFF;

    position: relative;
  }
  .admin-content-table {
    margin-top:80px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
    position: relative;
    align-items: center;
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
    z-index: 100;
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
</style>
