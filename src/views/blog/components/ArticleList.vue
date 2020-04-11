<template>
  <div>
    <div v-for="list in lists" :key="list.id" class="article-list">
      <div v-if="list.isTop" class="top-article">置顶</div>
      <h5 class="title-info">
        <span class="source">【{{ list.source }}】</span>
        <a class="title">{{ list.title }}</a>
      </h5>
      <div class="date">
        <span class="day">2</span>
        <span class="month">2月</span>
        <span class="year">2020</span>
      </div>
      <div class="article-content">
        <img :src="list.imgSrc">
        <span>
          {{ list.content }}
        </span>
      </div>
      <div class="article-foot">
        <div class="read-more">
          <a> 继续阅读 </a>
        </div>
        <div class="tag">
          <svg-icon icon-class="tag" />
          <span>{{ list.category }}</span>
        </div>
        <div class="reading-info">
          <span class="click-num">
            <svg-icon icon-class="eye" />
            789
          </span>
          <span class="message-num">
            <svg-icon icon-class="message" />
            88
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'ArticleList',
  data() {
    return {
      lists: [{
        id: '01',
        isTop: true,
        imgSrc: 'https://img.shields.io/badge/vue-2.6.10-brightgreen.svg',
        title: '模板分享',
        time: '20190102',
        source: '原创',
        description: '描述',
        content: '内容',
        category: '个人日记'
      }, {
        id: '02',
        isTop: false,
        imgSrc: 'https://img.shields.io/badge/vue-2.6.10-brightgreen.svg',
        title: '模板分享',
        time: '20190102',
        source: '原创',
        description: '描述',
        content: '内容',
        category: '个人日记'
      }]
    }
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(routePath)
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  padding: 20px 30px 25px 30px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  overflow: hidden;
  .top-article {
    position: absolute;
    height: 20px;
    line-height: 20px;
    text-align: center;
    width: 74px;
    background-color: #ff5722;
    color: #fff;
    transform: rotate(-45deg);
    left: -18px;
    top: 9px;
  }
  .title-info {
    line-height: 30px;
    padding: 5px 5px 5px 0;
    border-bottom: 1px solid #e8e9e7;
    font-size: 18px;
    font-weight: 400;
    .source {
      color: #2ea7e0;
    }
  }
  .date {
    position: absolute;
    right: 10px;
    top: 10px;
    display: block;
    background-color: #fff;
    padding: 0 20px 5px 20px;
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
      font-size: 18px;
    }
    .year {
      color: #989997;
      font-size: 18px;
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .date {
      display: none;
    }
  }
  .article-content {
    margin: 20px 0 0 0;
    line-height: 28px;
    position: relative;
    min-height: 200px;
    img {
      display: block;
      width: 300px;
      height: 180px;
      border: 1px solid #e8e9e7;
      overflow: hidden;
      float: left;
      margin-right: 20px;
    }
    @media screen and (max-width: 500px) {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .article-foot {
    position: relative;
    height: 40px;
    a {
      line-height: 40px;
      font-weight: bold;
    }
    .read-more a:before {
      content: " ";
      display: inline-block;
      height: 1px;
      top: 20px;
      left: 100px;
      right: 0;
      position: absolute;
      background-color: #d0d0d0;
    }
    .tag {
      float: left;
      font-size: 15px;
    }
    .reading-info {
      float: right;
      font-size: 15px;
      .click-num {
        margin-right: 10px;
      }
    }
  }
}
</style>
