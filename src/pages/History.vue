<template>
  <div>
    <div class="admin-content">
      <el-table :data="showtable[currentpage -1]" class="admin-content-table">
        <el-table-column label="序号" prop="id"></el-table-column>
        <el-table-column label="网点id" prop="obranchid"></el-table-column>
        <el-table-column label="订单号" width="300px" prop="oid"></el-table-column>
        <el-table-column label="商品id" prop="ogid"></el-table-column>
        <el-table-column label="购买数量" prop="ocount"></el-table-column>
        <el-table-column label="售出单价" prop="oprice"></el-table-column>
        <el-table-column label="总价" prop="ototalprice"></el-table-column>
        <el-table-column label="用户id" prop="ouid"></el-table-column>
      </el-table>
      <div class="page-controler">
        <el-pagination
          @current-change="pagechange"
          class="page-self"
          layout="prev, pager, next"
          :total="saleHistory.length"
          :current-page="currentpage"
          :page-sizes="pagesize"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
export default {
  data() {
    // 与验证声明相关的变量



    return {
      showtable: [],
      currentpage: 1,
      pagesize: 10,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: 'Administrator',
      fits: 'fill',
      url: 'http://q1x2lsqiy.bkt.clouddn.com/logo.jpg',
      saleHistory: [],
      currentPageData: [],
    }
  },
  created() {

    this.getallhistory()
  },
  methods: {
    // 获取所有历史订单
    getallhistory() {
      this.$axios.get('/api/order/admin').then(res => {
        // console.log(res.data)
        const raw = res.data.msg
        this.saleHistory = raw
        const length = res.data.msg.length
        const showdata = []
        let showlength = Math.ceil(length / this.pagesize)
        for (let i = 0; i < showlength; i++) {
          showdata[i] = []
          for (let j = 0; j < 10; j++) {
            if (raw[i*this.pagesize+j]) {
              showdata[i].push(raw[i*this.pagesize+j])
            }
          }
        }
        console.log(showdata)
        // console.log(raw)
        this.showtable = showdata
      })
    },
    // 获取销售折线图数据
    getLineData() {
      this.$axios.get()
    },
    // 页码变化 
    pagechange(index) {
      console.log(index)
      this.currentpage = index
    },
    exita: function () {
      this.$router.push('/')
    },
    operate1: function () {
      alert('delete successfully!')
    },
    operate2: function () {
      alert('Function1 work successfully!')
    },
    operate3: function () {
      alert('Function2 work successfully!')
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
    } //产品添加信息函数提交重置end
  }, //methods end

} // export
</script>

// 页面样式规划
<style type="text/css">
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
  box-shadow: 0px 0px 6px rgba(1, 1, 1, 0.2);
  z-index: 100;
}
.add-info-bar {
  /* 添加产品样式*/
  width: 100%;
  height: 40px;
  position: relative;
  background-color: #2d3a4b;
  box-shadow: 0px 0px 6px rgba(1, 1, 1, 0.2);
  z-index: 100;
}
.demo-ruleForm {
  column-width: auto;
}
.grid-content {
  margin: 0px 0px 0px 20px;
}
.colortemp {
  background-color: red;
}
.user-container {
  display: flex;
  align-items: center;
}
.user-container div {
  margin: 0px 0px 0px 20px;
  color: #eee;
}
.shopping-cart {
  height: 100%;
  color: #eee;
  font-size: 31px;
}
.el-menu-vertical-demo {
  padding: 60px 0 0 0;
  width: 200px;
  min-height: 400px;
  height: 100%;
  z-index: 300;

  color: #eee;
}
.el-menu {
  border-right: none;
}
</style>
