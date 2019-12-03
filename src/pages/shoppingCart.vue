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
                          <br/>
                          <span style="color:#999;display: block; text-align: center;">库存{{scope.row.num}}件</span>
                        </template>

      </el-table-column>
      <el-table-column label="单价(人民币)" prop="price"></el-table-column>
      <el-table-column label="总价(人民币)" prop="totalPrice"></el-table-column>

		<el-table-column label="日期" prop="date"></el-table-column>

	</el-table>
    <div style="padding-top:20px" >
      <el-row style="padding-top: 20px">
        <el-col :span="24">
          配送方式:
          <el-radio  v-model="mail" :label="1">自提</el-radio>
        </el-col>
        <el-col :span="24" style="padding-top: 20px">
          <el-select v-model="value" placeholder="请选择网点" >
            <el-option
              v-for="item in net"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
            </el-select>
        </el-col>
      </el-row>
      <el-row style="padding-top: 20px">
        <el-col :span="12">
          电话号码:
          <el-input placeholder="请输入电话号码"></el-input>
        </el-col>
      </el-row>
      <el-row style="padding-top: 20px">
        <el-col :span="24">
          <el-radio v-model="radio" :label="0">不需要发票</el-radio>
          <el-radio v-model="radio" :label="1">需要发票</el-radio>
        </el-col>
      </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="12">发票抬头<el-input placeholder="发票抬头" :disabled="!radio"></el-input></el-col>
          </el-row>
      <el-row style="padding-top: 20px">
          <el-col :span="24">
            <el-select v-model="value" placeholder="请选择发票属性" :disabled="!radio">
            <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
          </el-col>

        </el-row>
      <el-row style="padding-top: 20px">
        <el-col :span="24">
          留言：
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入留言"
            v-model="textarea"

          >
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div style="float: right;padding-top: 20px">


      <el-checkbox v-model="checked">同意并阅读<a href="#">《购买须知》</a>进行购买</el-checkbox>
       <el-button :disabled="!checked" @click="buy()" round type="success">购买</el-button>
      <el-button round type="danger">批量删除</el-button>


    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itema: [{
        order: 'dgf1234',
        name: 'Zhangsan',
        price: 12345,
        num: 10,
        count: 1,
        state: 1,
        date: '2020-5-5',
        totalPrice: 12345
      }],
      checked: false,
      mail:1,
      textarea:"",
      radio:0,
      option:[{
        value:1,
        label:"金银制品"

      },
        {
          value:2,
          label:"股票期货"
        }
      ],
      net:[{
        value:1,
        label:"锦江区网点"

      },
        {
          value:2,
          label:"高新区网点"
        }
      ]

    }
  },

  methods: {
    choose: function (index) {
      this.selected = index
    },
    buy: function () {
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
    changeQuantity(row, type) {
      if (type > 0) {
        row.count++;
      } else {
        row.count > 1 ? row.count-- : row.count = 1;
      }
      this.changeCount(row);
    },
    //数量文本框值改变
    changeCount(row) {
      if (null == row.count || row.count == "") {
        row.count = 1;
      }
      row.totalPrice = (row.count * row.price).toFixed(2);//保留两位小数
      console.log(row.totalPrice + " = " + row.count + " * " + row.price)
      //增加商品数量也需要重新计算商品总价
    },

  }

}
</script>

<style>
 .g-button {

 }

</style>
