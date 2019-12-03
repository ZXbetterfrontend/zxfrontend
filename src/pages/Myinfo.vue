<template>
  <div>
    <div class="user-detail">
      <div class="id">
        <div class="id-left">我的账号:</div>
        <div class="id-right">123456</div>
      </div>
      <div class="name">
        <div class="name-left">我的姓名:</div>
        <div class="name-right">wsq</div>
      </div>
      <div class="rank">
        <div class="rank-left">我的等级:</div>
        <div class="rank-right">青铜</div>
      </div>
      <div class="score">
        <div class="score-left">我的积分:</div>
        <div class="score-right">100</div>
      </div>
      <div class="property">
        <div class="property-left">我的资产:</div>
        <div class="property-right">100，000</div>
      </div>
    </div>
    <div class="order-detail">
      <table>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
  .user-detail{
    padding-left: 55px;
    padding-top:100px;
  }
  .id{
    font-size: 20px;
    margin-bottom: 8px;
  }
  .id-left{
    float:left;
  }
  .name{
    font-size: 20px;
    margin-bottom: 8px;
   }
  .name-left{
    float:left;
  }
  .rank{
    font-size: 20px;
    margin-bottom: 8px;
  }
  .rank-left{
    float: left;
  }
  .score{
    font-size: 20px;
    margin-bottom: 8px;
  }
  .score-left{
    float: left;
  }
  .property{
    font-size: 20px;
    margin-bottom: 8px;
  }
  .property-left{
    float: left;
  }
</style>
