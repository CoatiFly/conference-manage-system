<template>
  <div class="Detail" v-if="isShow">
    <div class="header">
      简单的会议 - 2020
    </div>
    <div class="cantainer">
      <div class="left">
        <div class="title">会议详情</div>
        <!-- 时间 -->
        <div class="box">
          <i class="el-icon-date"></i>
          <span style="padding-left:10px;">{{ data.Start }} - {{ data.End }}</span>
        </div>
        <!-- 地点 -->
        <div class="box">
          <i class="el-icon-location-information"></i>
          <span style="padding-left:10px;">会议室1</span>
        </div>
        <!-- 会议主题 -->
        <div class="box">
          <i class="el-icon-postcard"></i>
          <span style="padding-left:10px;">{{ data.Topic }}</span>
        </div>
        <!-- 会议人 -->
        <div class="box">
          <i class="el-icon-user"></i>
          <span style="padding-left:10px;">王光明、解澎、林佳豪、贺艳芬、刘琨</span>
        </div>
        <div class="box">一次简单的快速会议，讨论参加hackday的具体事项以及主题等</div>
      </div>
      <div class="right">
        <img src="./avator.jpg" class="size">
      </div>
    </div>
    <div class="cantainer">
      <div class="left">
        <div class="title">
          会议主题List
        </div>
        <div class="box">
          <i class="el-icon-edit-outline"></i>
          <span style="padding-left:10px;">hackday主题确定</span>
        </div>
        <div class="box">
          <i class="el-icon-edit-outline"></i>
          <span style="padding-left:10px;">需要做的哪些功能，具体事项</span>
        </div>
        <div class="box">
          <i class="el-icon-edit-outline"></i>
          <span style="padding-left:10px;">确认参会人员信息等</span>
        </div>
        <div class="box">
          <i class="el-icon-edit-outline"></i>
          <span style="padding-left:10px;">中午吃什么？</span>
        </div>
        <div class="box">
          <i class="el-icon-edit-outline"></i>
          <span style="padding-left:10px;">晚上吃什么？</span>
        </div>
      </div>
      <div class="right">
        <img :src="url" class="size">
      </div>
    </div>
    <div class="cantainer">
      <div class="left">
        <div class="title">
          人员信息
        </div>
        <div class="box">
          <i class="el-icon-user"></i>
          <span style="padding-left:10px;">王光明、解澎</span>
        </div>
        <div class="box">
          <i class="el-icon-user"></i>
          <span style="padding-left:10px;">林佳豪、贺艳芬</span>
        </div>
        <div class="box">
          <i class="el-icon-user"></i>
          <span style="padding-left:10px;">刘琨</span>
        </div>
      </div>
    </div>
    <div class="cantainer">
      <div class="left">
        <div class="title">
          会议记录
        </div>
        <div v-for="(data, index) in record" :key="index" style="padding-left: 20px;padding-bottom: 5px;">{{ data }}</div>
      </div>
    </div>
  </div>
</template>

<script src="./detail.js"></script>
<style src="./detail.scss" lang="scss" scoped></style>