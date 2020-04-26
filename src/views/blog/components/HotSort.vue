<template>
  <div class="hot-sort">
    <div class="title">
      <span>热门文章</span>
    </div>
    <ul class="list-wrapper">
      <li v-for="list in hotList" :key="list.id" class="list">
        <a>{{ list.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotSort',
  data() {
    return {
      hotList: [{
        id: '01',
        title: 'js学习'
      }, {
        id: '02',
        title: 'js学习'
      }, {
        id: '03',
        title: 'js学习'
      }, {
        id: '04',
        title: 'js学习'
      }, {
        id: '05',
        title: 'js学习'
      }]
    }
  }
}
</script>

<style lang="scss">
.hot-sort {
  background-color: #fff;
  margin-top: 20px;
  display: block;
  box-sizing: content-box;
  float: right;
  width: 300px;
  .title {
    margin: 10px 20px;
    padding: 5px;
    line-height: 30px;
    font-weight: 400;
    border-bottom: 1px solid #e8e9e7;
    color: #383937;
    position: relative;
    font-size: 18px;
  }
  .list-wrapper {
    margin: 0 20px;
    position: relative;
    counter-reset: nums;
    .list {
      position: relative;
      display: block;
      height: 40px;
      line-height: 39px;
      z-index: 1;
      a {
        display: block;
        padding-left: 30px;
        height: 39px;
        line-height: 39px;
        border-bottom: 1px solid #f8f9f7;
        transition: none;
        text-decoration: none;
        color: #787977;
      }
    }
    .list:before {
      width: 22px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      counter-increment: nums;
      content: counter(nums,decimal);
      position: absolute;
      left: 0;
      top: 10px;
      border-radius: 100%;
      background-color: #edefee;
    }
  }
}
@media screen and (max-width: 900px) {
  .hot-sort {
    display: none;
  }
}
</style>
