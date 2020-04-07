<template>
  <header class="navbar">
    <el-menu default-active="3" class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="item in navItems" :key="item.id">
        {{ item.text }}
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navItems: [
        {
          id: "B01",
          text: "首页"
        },
        {
          id: "B02",
          text: "博客"
        },
        {
          id: "B03",
          text: "留言"
        },
        {
          id: "B04",
          text: "日记"
        },
        {
          id: "B05",
          text: "友链"
        }
      ]
    };
  }
};
</script>
