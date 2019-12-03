<template>
  <div style="margin-top: 50px">
    <el-table :data="itema"  ref="multipleTable">
		<el-table-column type="selection" width="55" ></el-table-column>
		<el-table-column type="index" label="序号" width="60"></el-table-column>
		<el-table-column prop="order" label="订单号" width="100" :formatter="formatSex"></el-table-column>
		<el-table-column prop="date" label="日期"></el-table-column>
		<el-table-column prop="name" label="商品名"></el-table-column>
		<el-table-column prop="number" label="数量"></el-table-column>
      <el-table-column prop="prices" label="价格"></el-table-column>
		<el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column><el-button type="primary" round @click="choose(cell)">删除</el-button></el-table-column>

	</el-table>
    <div style="float: right">
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
        number: 30,
        prices: 12345,
        date:2020-5-5
      },
        {
          order: 'dgf1234',
          name: 'Zhangsan',
          number: 30,
          prices: 12345,
          date:2020-5-5
        },
        {
          order: 'dgf1234',
          name: 'Zhangsan',
          number: 30,
          prices: 12345,
          date:2020-5-5

        },
        {
          order: 'dgf1234',
          name: 'Zhangsan',
          number: 30,
          prices: 12345,
          date:2020-5-5

        }]
    }
  },

  methods:{
    choose:function (index) {
      this.selected = index
    }
  }

}
</script>

<style>
 .g-button {

 }

</style>
