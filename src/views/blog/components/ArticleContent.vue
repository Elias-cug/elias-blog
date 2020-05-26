<template>
  <div class="reading">
    <div class="article-info">
      <h2>
        模板分享
      </h2>
      <span class="info-item">
        作者: liyisheng
      </span>
      <span class="info-item">
        更新时间: 20200526
      </span>
      <span class="info-item">
        点击量: 102
      </span>
      <div class="date">
        <span class="day">26</span>
        <span class="month">5月</span>
        <span class="year">2020</span>
      </div>
    </div>
    <div class="article-content">
      content
    </div>
    <div class="article-state">
      文章说明
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  computed: {},
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.reading {
  padding: 30px;
  background-color: #fff;
  width: 90%;
  height: auto;
  margin: 0 auto;
  .article-info {
    position: relative;
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #e8e9e7;
    h2 {
      margin-bottom: 10px;
    }
    .info-item {
      font-size: 13px;
      color: #787977;
      margin-right: 20px;
    }
    .date {
      position: absolute;
      right: 0;
      top: 0;
      display: block;
      background-color: #fff;
      line-height: 32px;
      .day {
        display: block;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #6bc30d;
        position: relative;
        top: 2px;
      }
      .month {
        color: #989997;
        font-size: 15px;
      }
      .year {
        color: #989997;
        font-size: 15px;
        margin-left: 15px;
      }
    }
  }
  .article-content {
    margin: 20px 0;
  }
  .article-state {
    font-size: 13px;
    padding: 20px;
    background-color: #f8f9f7;
  }
}
</style>
