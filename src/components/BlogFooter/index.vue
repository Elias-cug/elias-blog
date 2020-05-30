<template>
  <div class="blog-footer">
    <div class="link">
      <span>QQ</span>
      <span>邮箱</span>
      <span>github</span>
    </div>
    <div class="approve">
      Copyright © 2018-2020 燕十三 All Rights Reserved V.1.0.0 备案号:蜀ICP备18008600号
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlogFooter'
}
</script>
<style lang='scss' scoped>
.blog-footer {
  background-color: #212220;
  color: #919290;
  font-size: 14px;
  padding: 20px 0 0 0;
  position: relative;
  zoom: 1;
  clear: both;
  line-height: 20px;
  margin-top: 40px;
  overflow: hidden;
  .link{
    text-align: center;
    margin-bottom: 20px;
    span{
      padding: 0 10px;
    }
  }
  .approve{
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
