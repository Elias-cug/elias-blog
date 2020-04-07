<template>
  <div>
    <el-menu>
      <el-menu-item v-for="item in items" :key="item.id">
        {{ item.text }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        {
          id: "A01",
          text: "全部文章"
        },
        {
          id: "A02",
          text: "个人日记"
        },
        {
          id: "A03",
          text: "javaScript"
        },
        {
          id: "A04",
          text: "Vue"
        },
        {
          id: "A05",
          text: "其他"
        }
      ]
    };
  }
};
</script>
