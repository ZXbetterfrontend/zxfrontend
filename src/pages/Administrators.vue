<template>
  <div >
    <table>
      <div class="header-bar">
        <el-row type="flex" justify="end">
          <el-col :span="2"><div class="grid-content shopping-cart ">
            <div class="shopping-cart el-icon-shopping-cart-full"></div></div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content user-container">
              <div>
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
              <div class="user-container">{{username}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </table>

    <div class="admin-content">
      <el-table class="admin-content-table">
        <el-table-column label="商品名称" prop="productName"></el-table-column>
        <el-table-column label="产品ID" prop="productId"></el-table-column>
        <el-table-column label="订单号" prop="orderNum"></el-table-column>
        <el-table-column label="用户名称" prop="userName"></el-table-column>
        <el-table-column label="购买数量" prop="purchaseNum"></el-table-column>
        <el-table-column label="售出单价" prop="sellPrice"></el-table-column>
        <el-table-column label="售出日期" prop="sellDate"></el-table-column>
      </el-table>
      <table>
        <tr>
          <td>{{runChart}}</td>
          <td>{{sectorChart}}</td>
        </tr>
      </table>

    </div>
  </div>
</template>

//
<script type="text/javascript">
export default {
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: 'Administrator',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      runChart: 'sheme',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      sectorChart: 'ddd'

    }
  }
}
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
    margin-top:80px;
    margin-bottom: 50px;
    margin-left: 80px;
    margin-right: 80px;
    position: relative;
  }
  .admin-content-table {
    align-items: center;
  }

  .header-bar {
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: #2d3a4b;
    box-shadow: 0px 0px 6px rgba(1,1,1,0.2);
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
