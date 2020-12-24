<template>
  <div class="blog-wrapper">
    <div class="article-wrapper">
      <article-list />
    </div>
    <div class="side">
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
  },
  data () {
    return {
      isDetail: false
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-wrapper {
  width: 90%;
  margin: 20px auto;
  position: relative;
  .article-wrapper {
    float: left;
    width: calc(100% - 300px - 20px);
  }
  .side {
    width: 300px;
    float: right;
  }
  @media screen and (max-width: 900px) {
    .article-wrapper {
      width: 100%;
      float: none;
    }
  }
}
</style>
