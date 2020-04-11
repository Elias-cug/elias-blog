<template>
  <div class="category">
    <div class="search">
      <label class="search-wrapper">
        <input type="text" placeholder="输入关键字搜索">
        <span class="search-icon">
          <svg-icon icon-class="search" />
        </span>
      </label>
    </div>
    <ul class="category-wrapper">
      <li v-for="category in categories" :key="category.id" class="category-list">
        <a>{{ category.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      categories: [{
        id: 'A00',
        text: '全部文章'
      }, {
        id: 'A01',
        text: 'JavaScript'
      }, {
        id: 'A02',
        text: 'Vue'
      }, {
        id: 'A03',
        text: 'webpack'
      }, {
        id: 'A04',
        text: 'Html&css'
      }, {
        id: 'A05',
        text: '其他'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  background-color: #fff;
  .search {
    background-color: grey;
    padding: 20px;
    .search-wrapper {
      position: relative;
      display: block;
      height: 40px;
      padding: 0 20px;
      background-color: #fff;
      border-radius: 40px;
      z-index: 5;
      input {
        padding-right: 10px;
        font-size: 15px;
        color: #515250;
        border: none;
        outline: none;
        line-height: 40px;
        height: 40px;
        width: calc(100% - 10px);
        box-shadow: none;
      }
      .search-icon {
        font-size: 20px;
        position: absolute;
        right: 5px;
        top: 5px;
        line-height: 30px;
        text-align: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
  .category-wrapper {
    position: relative;
    padding-bottom: 20px;
    margin-top: 20px;
    .category-list {
      position: relative;
      display: block;
      height: 40px;
      line-height: 39px;
      z-index: 1;
      a {
        display: block;
        margin: 0 30px;
        padding: 0 20px;
        height: 39px;
        border-bottom: 1px solid #f8f9f7;
        transition: none;
        text-decoration: none;
        color: #787977;
      }
    }
  }
}
</style>
