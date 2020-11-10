<template>
  <div class="card-meeting" >
    <div v-for="(data, index) in meet" :key="index" class="card">
      <div class="meetName">{{ data.meetName }}</div>
      <div>{{ data.meetRoom }}</div>
      <div>{{ data.meetTime }}</div>
      <div class="new-meeter">
        <div class="box" v-for="(avator, index) in data.avator" :key="index" :class="'index' + index">
          <img :src="avator" class="avator" v-if="index < 3">
        </div>
      </div>
      <span class="more">
        <el-dropdown>
          <i class="el-icon-more"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>取消</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    meet: Array,
  },
}
</script>

<style lang="scss" scoped>
.card-meeting {
  .card {
    display: flex;
    align-items: center;
    background: #fff;
    width: 100%;
    height: 70px;
    border-radius: 12px;
    margin-bottom: 10px;
    div {
      flex: 1;
      color: rgb(170, 176, 186);
    }
    .meetName {
      padding-left: 20px;
    }
    .new-meeter {
      position: relative;
      .box {
        overflow: hidden;
        position:absolute;
        top: -25px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: red;
      }
      .index1 {
        background: black;
        left: 40px;
        z-index: 4;
      }
      .index2 {
        background: blue;
        left: 80px;
        z-index: 6;
      }
      .index3 {
        background: rgb(170, 176, 186);
        left: 120px;
        z-index: 8;
        &::after {
          content: '+3';
          color: #53595f;
          font-size: 16px;
          position: absolute;
          left: 16px;
          top: 15px;
        }
      }
      .avator {
        width: 100%;
        height: 100%;
      }
    }
    .more {
      width: 50px;
      color: rgb(170, 176, 186);
      &:hover {
        color: blue;
      }
    }
  }
}

</style>