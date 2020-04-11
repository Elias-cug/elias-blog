<template>
  <div class="blog-wrapper">
    <div class="article-wrapper">
      <article-list />
    </div>
    <div class="side-wrapper">
      <category />
      <hot-sort />
    </div>
  </div>
</template>

<script>
import ArticleList from './components/ArticleList.vue'
import Category from './components/Category.vue'
import HotSort from './components/HotSort.vue'
export default {
  components: {
    ArticleList,
    Category,
    HotSort
  }
}
</script>

<style lang="scss" scoped>
.blog-wrapper {
  width: 90%;
  margin: 0 auto;
  position: relative;
  .article-wrapper {
    float: left;
    width: calc(100% - 300px - 30px);
  }
  .side-wrapper {
    display: block;
    margin-left: 20px;
    float: left;
    width: 300px;
  }
  @media screen and (max-width: 900px) {
    .side-wrapper {
      display: none;
      float: none;
    }
    .article-wrapper {
      width: 100%;
      float: none;
    }
  }
}
</style>
