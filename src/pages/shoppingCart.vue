<template>
  <div style="margin-top: 50px">
    <!-- <el-table :data="item">
		<el-table-column prop="gid" label="商品id" width="100" ></el-table-column>
		<el-table-column prop="gname" label="商品名"></el-table-column>
    <el-table-column prop="gdescribe" label="描述" width="300"></el-table-column>
    <el-table-column label="单价(人民币)" prop="gprice"></el-table-column>
    <el-table-column label="数量">
      <el-input-number size="small" v-model="count" @change="handleChange" :min="1" :max="10"></el-input-number>
    </el-table-column>
	</el-table> -->
  <table  width="100%" style="border-collapse: collapse;">
      <thead class="table-head">
          <tr class="table-title" style="border-bottom:1px solid #EBEEF5">
              <th>商品id</th>
              <th>商品名</th>
              <th>描述</th>
              <th>单价(人民币)</th>
              <th>数量</th>

          </tr>
      </thead>

      <tbody>
          <tr class="table-body" style="border-bottom:1px solid #EBEEF5">
              <td>{{item.gid}}</td>
              <td>{{item.gname}}</td>
              <td>{{item.gdescribe}}</td>
              <td>{{item.gprice}}</td>
              <td><el-input-number size="small" v-model="count" @change="handleChange" :min="1" :max="10"></el-input-number></td>
          </tr>
      </tbody>
  </table>
  <div class="price-container">
    ¥ <span class="total-pri">{{this.total}}</span>
  </div>
    <div style="padding-top:20px" >
      <el-row style="padding-top: 20px">
        <el-col :span="24">
          配送方式:
          <el-radio  v-model="mail" label="1">自提</el-radio>
        </el-col>
        <el-col :span="24" style="padding-top: 20px">
          <el-select v-model="address" placeholder="请选择网点" >
            <el-option
              v-for="item in alldress"
              :key="item.bid"
              :label="item.bname"
              :value="item.bid">
            </el-option>
            </el-select>
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
            <el-select v-model="invoice" placeholder="请选择发票属性" :disabled="!radio">
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
      <!-- <el-button round type="danger">批量删除</el-button> -->


    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: "1",
      total: 0,
      item: {
        gid:'',
        gname: '',
        gprice: 0,
        gdescribe: ''
      },
      checked: false,
      mail: '1',
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
      address: '',
      invoice: '',
      alldress:[{
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
  created() {
    this.getAllAddress()
    this.item = this.$route.query
    this.handleChange()
  },
  methods: {
    getAllAddress() {
      this.$axios.get('/api/branch/all').then(res => {
        this.alldress = res.data.msg
      })
    },
    choose: function (index) {
      this.selected = index
    },
    buy: function () {
      if (!this.address) {
        this.$message({
          message: '请选择网点再行购买',
          type: 'error'
        })
      } else {
        this.submitPurchase()
      }
    },
    submitPurchase() {
      this.$axios.post('/api/order/add',
        {
          pid: this.item.gid,
          count: this.count,
          bid: this.address
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
        this.$router.push("/home")
        }
      })
    },
    handleChange(){
      this.total = this.count * this.item.gprice
    },
    changeQuantity(row, type) {
      if (type > 0) {
        row.count++;
      } else {
        row.count > 1 ? row.count-- : row.count = 1;
      }
      this.changeCount(row);
    },
    

  }

}
</script>

<style>
.price-container {
  margin: 20px 0 0 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 35px;
  text-align: right;
  color: #909399;
}
.total-pri {
  color: #F56C6C;
  font-size: 40px;
}
.table-head {
}
.table-title {
  color: #909399;
  text-align: left;
  
}
.table-title th {
  padding: 12px 5px;
  
}
.table-body td {
  padding: 12px 5px;
  color: #606266
}
</style>
