<template>
  <div class="time-line">
    <!-- 选项卡 -->
    <el-radio-group v-model="tabPosition" class="line-options">
      <el-radio-button label="develop">开发</el-radio-button>
      <el-radio-button label="reading">阅读</el-radio-button>
    </el-radio-group>
    <div v-for="timeList in timeLists" :key="timeList.year" class="line-main">
      <!-- 循环年份 -->
      <div class="line-year">{{ timeList.year }}年</div>
      <div class="line-tail" />
      <ul>
        <!-- 循环日期 -->
        <li v-for="list in timeList.lists" :key="list._id" class="line-list">
          <!-- 日期显示 -->
          <div class="line-day">{{ list.time }}</div>
          <!-- 时间节点 -->
          <div class="line-node">
            <div />
          </div>
          <!-- 内容 -->
          <div class="line-card">{{ list.content }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'develop',
      timeLists: [
        {
          year: '2012',
          lists: [
            { _id: 1, title: '建站', content: '开发个人网站', time: '07月08日' },
            { _id: 2, title: '建站', content: '开发个人网站', time: '07月09日' },
            { _id: 3, title: '建站', content: '开发个人网站', time: '07月10日' }
          ]
        },
        {
          year: '2013',
          lists: [
            { _id: 12, title: '建站', content: '开发个人网站', time: '20130708' },
            { _id: 11, title: '建站', content: '开发个人网站', time: '20130709' },
            { _id: 12, title: '建站', content: '开发个人网站', time: '20130710' }
          ]
        }
      ]
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
  .line-main{
    position: relative;
    .line-year {
      font-size: 30px;
      width: 16%;
      margin: 5px 0;
      color: #6bc30d;
      text-align: right;
      font-weight: 400;
    }
    .line-tail{
      position: absolute;
      left: calc(20px + 16%);
      height: 100%;
      border: 2px solid red;
      z-index: 0;
    }
    .line-list:last-child .line-tail{
      border: none;
    }
    .line-list {
      position: relative;
      display: block;
      margin-bottom: 20px;
      .line-day {
        width: 16%;
        text-align: right;
        float: left;
      }
      .line-node {
        width: 4%;
        height: 20px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        div{
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: red;
        }
      }
      .line-card{
        float: left;
        width: 70%;
      }
    }
  }
}
</style>
