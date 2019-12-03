<template>
  <div style="margin-top: 50px">
    <el-table :data="itema"  ref="multipleTable">
		<el-table-column type="selection" width="55" ></el-table-column>
		<el-table-column type="index" label="序号" width="60"></el-table-column>
		<el-table-column prop="order" label="订单号" width="100" ></el-table-column>
		<el-table-column prop="name" label="商品名"></el-table-column>
      <el-table-column label="数量" width="">
        <template slot-scope="scope">
          <el-input v-model="scope.row.count" :value="scope.row.count"  @change="changeCount(scope.row)" :min="1" :max="scope.row.num" >
          <el-button slot="prepend" @click="changeQuantity(scope.row,-1)"><i class="el-icon-minus"></i></el-button>
          <el-button slot="append" @click="changeQuantity(scope.row,1)"><i class="el-icon-plus"></i></el-button>
          </el-input>
          <br />
          <span style="color:#999;display: block; text-align: center;">库存{{scope.row.num}}件</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价(人民币)"></el-table-column>
      <el-table-column prop="totalPrice" label="总价(人民币)"></el-table-column>

		<el-table-column prop="date" label="日期"></el-table-column>

	</el-table>
    <div style="float: right;padding-top: 20px">
      <el-checkbox  v-model="checked"><a>《》</a></el-checkbox>
       <el-button type="success" round @click="buy()" :disabled="!checked">购买</el-button>
      <el-button type="danger" round>批量删除</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      itema: [{
        order: 'dgf1234',
        name: 'Zhangsan',
        price: 12345,
        num:10,
        count:1,
        date:'2020-5-5',
        totalPrice:12345
      }],
      checked: false,
    }
  },

  methods:{
    choose:function (index) {
      this.selected = index
    },
    buy:function () {
      this.$alert('购买成功', '恭喜你', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `查看订单`
          });
        }
      });
      this.$router.push("/administrators")
    },
    changeQuantity(row, type){
      if( type > 0 ){
        row.count++;
      }else{
        row.count > 1 ? row.count--: row.count = 1;
      }
      this.changeCount(row);
    },
    //数量文本框值改变
    changeCount (row) {
      if(null == row.count || row.count == ""){
        row.count=1;
      }
      row.totalPrice = (row.count * row.price).toFixed(2);//保留两位小数
      console.log(row.totalPrice+" = "+ row.count +" * "+ row.price)
      //增加商品数量也需要重新计算商品总价
    },
  }

}
</script>

<style>
 .g-button {

 }

</style>
