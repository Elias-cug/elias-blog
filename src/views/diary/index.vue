<template>
  <div class="time-line">
    <!-- 选项卡 -->
    <el-radio-group v-model="tabPosition" class="line-options">
      <el-radio-button label="developTime">开发</el-radio-button>
      <el-radio-button label="readingTime">阅读</el-radio-button>
    </el-radio-group>
    <div class="line-main">
      <el-timeline>
        <el-timeline-item
          v-for="timeList in timeLists"
          :key="timeList._id"
          :timestamp="timeList.time"
          placement="top"
        >
          <el-card>
            <h4>{{ timeList.title }}</h4>
            <p>{{ timeList.content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'developTime',
      developTime: [
        { _id: 1, title: '建站', content: '开发个人网站', time: '2018/4/13' },
        { _id: 2, title: '建站', content: '开发个人网站', time: '2018/4/14' },
        { _id: 3, title: '建站', content: '开发个人网站', time: '2018/4/15' },
        { _id: 12, title: '建站', content: '开发个人网站', time: '2018/4/16' },
        { _id: 11, title: '建站', content: '开发个人网站', time: '2018/4/17' },
        { _id: 12, title: '建站', content: '开发个人网站', time: '2018/4/18' }
      ],
      readingTime: [
        { _id: 1, title: '阅读', content: '读书笔记', time: '2018/4/13' },
        { _id: 2, title: '阅读', content: '读书笔记', time: '2018/4/14' },
        { _id: 3, title: '阅读', content: '读书笔记', time: '2018/4/15' },
        { _id: 12, title: '阅读', content: '读书笔记', time: '2018/4/16' },
        { _id: 11, title: '阅读', content: '读书笔记', time: '2018/4/17' },
        { _id: 12, title: '阅读', content: '读书笔记', time: '2018/4/18' }
      ]
    }
  },
  computed: {
    timeLists: function() {
      return this[this.tabPosition]
    }
  }
}
</script>

<style lang="scss" scope>
.time-line{
  background-color: #fff;
  width: 90%;
  margin: 20px auto;
  padding: 20px;
  min-height: 100vh;
  .line-options{
    margin-bottom: 20px;
  }
}
</style>
