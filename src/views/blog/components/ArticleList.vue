<template>
  <div>
    <div v-for="list in lists" :key="list._id" class="article-list">
      <div v-if="list.is_top" class="top-article">置顶</div>
      <h5 class="title-info">
        <span class="source">【{{ list.source }}】</span>
        <a class="title">{{ list.title }}</a>
      </h5>
      <div class="date">
        <span class="day">{{ list.add_time | parseTime('{d}') }}</span>
        <span class="month">{{ list.add_time | parseTime('{m}') }}月</span>
        <span class="year">{{ list.add_time | parseTime('{y}') }}</span>
      </div>
      <div class="article-content">
        <span class="cover" @click="continueReading(list._id)">
          <img :src="list.image_src">
        </span>
        <p>{{ list.desc }}</p>
      </div>
      <div class="article-foot">
        <div class="read-more">
          <!-- <router-link to="/blog/index/1"> 继续阅读 </router-link> -->
          <span @click="continueReading(list._id)"> 继续阅读 </span>
        </div>
        <div class="tag">
          <svg-icon icon-class="tag" />
          <span>{{ list.cid }}</span>
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
import { parseTime } from '@/utils/index.js'
import { findArticle } from '@/api/blog/article.js'
export default {
  name: 'ArticleList',
  filters: {
    parseTime(time, cFormat) {
      return parseTime(time, cFormat)
    }
  },
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    this.findArticle()
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(routePath)
    },
    findArticle(options) {
      return new Promise((resolve, reject) => {
        findArticle({}).then((response) => {
          this.lists = response
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    continueReading(id) {
      const path = `/blog/index/${id}`
      if (this.$route.path !== path) this.$router.push(path)
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
    line-height: 28px;
    p {
      word-break:break-all
    }
    .cover {
      display: block;
      width: 300px;
      height: 180px;
      overflow: hidden;
      margin-right: 20px;
      float: left;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 500px) {
      .cover {
        width: 100%;
        height: auto;
        float: none;
        img {
          width: 100% !important;
          width: 100% !important;
        }
      }
    }
  }
  .article-foot {
    position: relative;
    height: 40px;
    .read-more {
      span {
        cursor: pointer;
        line-height: 40px;
        font-weight: bold;
      }
      span:hover {
        color: aqua;
      }
      span:before {
        content: " ";
        display: inline-block;
        height: 1px;
        top: 20px;
        left: 100px;
        right: 0;
        position: absolute;
        background-color: #d0d0d0;
      }
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
