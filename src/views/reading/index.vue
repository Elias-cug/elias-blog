<template>
  <div class="reading">
    <div class="article-info">
      <h2>
        {{ articleInfo.title }}
      </h2>
      <span class="info-item">
        作者：liyisheng
      </span>
      <span class="info-item">
        更新时间：{{ articleInfo.update_time | parseTime() }}
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
      {{ articleInfo.content }}
    </div>
    <div class="article-state">
      <span>
        非特殊说明，本文版权归 李义升 所有，转载请注明出处.
      </span>
      <span>
        本文作者：
        <a href="#">liyisheng</a>
      </span>
      <span>
        本文网址：
        <a href="#">http://localhost:8080/blog/index/5ea6ce23c5752c2a1848882b</a>
      </span>
    </div>
  </div>
</template>

<script>
import { parseTime } from '@/utils/index.js'
import { findArticle } from '@/api/blog/article.js'
export default {
  name: 'Reading',
  filters: {
    parseTime(time, cFormat) {
      return parseTime(time, cFormat)
    }
  },
  data() {
    return {
      articleInfo: {}
    }
  },
  created() {
    const _id = this.$route.params.id
    this.getArticle({ _id: _id })
  },
  methods: {
    getArticle(data) {
      return new Promise((resolve, reject) => {
        findArticle(data).then((response) => {
          this.articleInfo = response[0]
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.reading {
  padding: 30px;
  background-color: #fff;
  width: 90%;
  height: auto;
  margin: 20px auto;
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
    span {
      display: block;
      margin-bottom: 5px;
    }
    :last-child {
      margin: 0;
    }
  }
}
</style>
