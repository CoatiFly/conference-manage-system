<template>
  <div class="form">
    <div class="header">会议列表</div>
    <div class="container">
      <div class="title">
        <div class="meetName">会议名称</div>
        <div>会议地点</div>
        <div>会议时间</div>
        <div>人员信息</div>
      </div>
      <card :meet="meetData"></card>
    </div>
  </div>
</template>

<script src="./form.js"></script>

<style src="./form.scss" lang="scss" scoped></style>