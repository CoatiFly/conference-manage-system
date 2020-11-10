<template>
<div class="meet-record">
  <div class="meet-info">
    <h2>会议记录</h2>
    <p style="margin-top: 20px;color: #595F69; font-size: 18px;">会议详情</p>
    <div class="meetings-detail">
      <div>
        <div class="meet-des">
          <p class="num">145</p>
          <p class="des">已预约的会议</p>
        </div>
        <img src="@/assets/cute.png" alt="" />
      </div>
      <div>
        <div class="meet-des">
          <p class="num">145</p>
          <p class="des">正在开的会议</p>
        </div>
        <img src="@/assets/cute.png" alt="" />
      </div>
      <div>
        <div class="meet-des">
          <p class="num">145</p>
          <p class="des">历史会议</p>
        </div>
        <img src="@/assets/cute.png" alt="" />
      </div>
    </div>
    <div class="MeetingIn-progress">
      <div class="text-des" style="margin-top: 20px;color: #595F69; font-size: 18px;border:none;">进行中会议</div>
      <div v-for="(item, index) in meetInProgress" :key="index">
        <p>{{item.meetPosition}}</p>
        <h2>{{item.meetName}}</h2>
        <p style="color: #595F69">
          <img class="dateImg" src="@/assets/time.png" alt="" />
          {{item.meetTime}}</p>
        <p>{{item.meetContent}}</p>
        <img :src="url.url" alt="" v-for="(url, urlIndex) in item.meetingMember" :key="urlIndex"/>
      </div>
    </div>
    <div class="Meeting-to-be-held">
      <p style="color: #595F69; font-size: 18px;">待开会议</p>
      <div class="beHeld-meeting">
        <div class="beHeld-item" v-for="(item, index) in beHeldMeet" :key="index">
          <h2>{{item.title}}</h2>
          <div class="item-des">
            <div class="item-font">
              10/10
              <span>{{item.memberNum}}</span>
            </div>
            <div class="item-end">21 Nov 2020</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="meet-list">
    <div class="meet-event">
      <p style="color: #aaa;font-size: 18px;">Events</p>
      <div>
        <el-calendar v-model="value"></el-calendar>
      </div>
    </div>
    <div class="meet-thing">
      <div v-for="(item, index) in thingsDetail" :key="index">
        <p>{{item.name}}</p>
        <p>
          <img src="@/assets/time.png" alt="" />
          {{item.date}}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      thingsDetail: [{
        name: 'Sharing sessions by Adin',
        date: '09:10 AM',
      }, {
        name: 'Sharing sessions by Adin',
        date: '11:10 AM',
      }, {
        name: 'Sharing sessions by Anm',
        date: '09:10 AM',
      }, {
        name: 'Sharing sessions by Jane',
        date: '09:10 AM',
      }],

      meetInProgress: [{
        meetPosition: '大会议室01',
        meetName: 'meet-des',
        meetTime: '09：10',
        meetContent: '从上面，我们应该可以看到元素盒模型中 border 的本质：元素每个方向上的 border 是梯形而并非矩形。知道了这个，想实现弧状的样式就不是问题了',
        meetingMember: [{
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }, {
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }, {
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }],
      }, {
        meetPosition: '大会议室02',
        meetName: 'meet-des',
        meetTime: '09：10',
        meetContent: '从上面，我们应该可以看到元素盒模型中 border 的本质：元素每个方向上的 border 是梯形而并非矩形。知道了这个，想实现弧状的样式就不是问题了',
        meetingMember: [{
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }, {
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }, {
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }],
      }, {
        meetPosition: '大会议室03',
        meetName: 'meet-des',
        meetTime: '09：10',
        meetContent: '从上面，我们应该可以看到元素盒模型中 border 的本质：元素每个方向上的 border 是梯形而并非矩形。知道了这个，想实现弧状的样式就不是问题了',
        meetingMember: [{
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }, {
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }, {
          // eslint-disable-next-line global-require
          url: require('@/assets/cute.png'),
        }],
      }],
      beHeldMeet: [{
        memberNum: 10,
        title: '前端分享会',
      }, {
        memberNum: 10,
        title: '前端分享会',
      }, {
        memberNum: 10,
        title: '前端分享会',
      }],
      value: new Date(),
    };
  },
};
</script>

<style scoped lang="scss">
.meet-record{
  display: flex;
  justify-content: space-between;
  .meet-info {
    width: 100%;
    // height: 300px;
    /*background-color: #ffa39e;*/
    box-sizing: content-box;
    padding: 20px;
    overflow: hidden;
    .meetings-detail {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .meet-des {
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      div:not(.meet-des) {
        width: 30%;
        height: 100px;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #E4E7ED;
        box-shadow: 3px 3px 5px #E4E7ED;
        position: relative;
        img {
          width: 100px;
          height: 100px;
          position: absolute;
          top: -10px;
          right: -10px;
          border-radius: 50%;
        }
      }
      .num {
        font-size: 26px;
        font-weight: 600;
        margin: 20px 40px 0px 40px;
      }
    }
    .MeetingIn-progress {
      /*margin-top: 20px;*/
      width: 50%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: flex-start;
      float: left;
      p .dateImg {
        width: 15px;
        height: 15px;
        /*vertical-align: middle;*/
        margin-right: 5px;
      }
      img {
        width: 50px;
        height: 50px;
      }
      .meetingMember {
        display: flex;
        justify-content: flex-start;
      }
      .text-des {
        border: none;
        box-shadow: none;
        padding: 0px;
        margin-top: 0px;
      }
      div {
        width: 80%;
        /*height: 200px;*/
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #E4E7ED;
        box-shadow: 3px 3px 5px #E4E7ED;
        padding: 20px;
        margin-top: 10px;
      }
    }
    .Meeting-to-be-held {
      width: 50%;
      margin-top: 20px;
      float: right;
      .beHeld-meeting {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start;
        .beHeld-item {
          padding: 20px 20px 0px 20px;
          width: 80%;
          height: 132px;
          background-color: #fff;
          border-radius: 4px;
          border: 1px solid #E4E7ED;
          box-shadow: 3px 3px 5px #E4E7ED;
          margin-top: 10px;
          border-bottom: 3px solid #1890ff;
          .item-des {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            .item-font {

            }
            .item-end {

            }
          }
        }
      }
    }
  }
  .meet-list {
    display: none;
    width: 23%;
    background-color: #fff;
    padding: 0px 10px;
    .meet-event {
      margin-top: 50px;
      width: 100%;
      /*height: 300px;*/
      background-color: #fff;
    }
    .meet-thing {
      margin-top: 20px;
      p img {
        width: 15px;
        height: 15px;
      }
      div {
        padding: 10px;
      }
    }
  }
}
</style>
