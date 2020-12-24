<template>
  <div class="category">
    <div class="pc-side">
      <div class="search">
        <label class="search-wrapper">
          <input type="text" placeholder="输入关键字搜索" />
          <span class="search-icon">
            <svg-icon icon-class="search" />
          </span>
        </label>
      </div>
      <ul class="category-wrapper">
        <li
          v-for="category in categories"
          :key="category._id"
          class="category-list"
        >
          <a>{{ category.name }}</a>
        </li>
      </ul>
    </div>

    <div class="phone-side">
      <div v-if="!isOpen" class="side-button" @click="isOpen = true">
        <svg-icon icon-class="triangle" />
      </div>
      <div v-if="isOpen" class="mask" @click="isOpen = false" />
      <div v-if="isOpen" class="phone-sidemenu" @click="isOpen = false">
        <span>分类导航</span>
        <a
          v-for="category in categories"
          :key="category._id"
          class="category-list"
          >{{ category.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { findCategory } from '@/api/blog/category.js'
export default {
  name: 'Category',
  data () {
    return {
      categories: [],
      isOpen: false
    }
  },
  mounted () {
    this.findCategory({})
  },
  methods: {
    findCategory (options) {
      return new Promise((resolve, reject) => {
        findCategory({})
          .then(response => {
            this.categories = response
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  .pc-side {
    background-color: #fff;
    display: block;
    box-sizing: content-box;
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
          color: #787977;
        }
      }
    }
  }
  .phone-side {
    display: block;
    position: relative;
    .side-button {
      position: fixed;
      top: calc(50% - 25px);
      bottom: 0;
      right: 0;
      width: 13px;
      height: 100px;
      font-size: 30px;
      background-color: rgb(18, 150, 219);
      display: flex;
      justify-content: center;
      align-items: center;
      .svg-icon {
        position: absolute;
        left: -18px;
      }
    }
    .mask {
      position: fixed;
      left: 0;
      right: 0;
      top: 60px;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 8;
    }
    .phone-sidemenu {
      position: fixed;
      top: 60px;
      bottom: 0;
      right: 0;
      width: 160px;
      padding: 10px;
      background-color: #393d49;
      z-index: 10;
      text-align: center;
      color: #fff;
      span {
        display: block;
        text-align: center;
        border-bottom: 1px solid #009688;
        font-size: 15px;
        font-weight: 500;
        padding: 0 0 5px 0;
        margin-bottom: 5px;
      }
      a {
        display: block;
        color: #eee;
        padding: 5px 1%;
        margin: 4px 0;
        background: #009688;
        width: 98%;
        text-align: center;
        line-height: 19px;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
      }
      a:hover {
        background: #1f9633;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .phone-side {
      display: block;
    }

    .pc-side {
      display: none;
    }
  }

  @media screen and (min-width: 900px) {
    .phone-side {
      display: none;
    }

    .pc-side {
      display: block;
    }
  }
}
</style>
