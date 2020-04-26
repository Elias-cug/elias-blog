<template>
  <header class="navbar">
    <a class="logo">
      keep
    </a>

    <div class="menu">
      <el-menu
        :default-active="activeMenu"
        class="nav"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item
          v-for="route in routes"
          :key="route.path"
          :index="resolvePath(route.path, route.children[0].path)"
        >
          {{ route.children[0].meta.title }}
        </el-menu-item>
      </el-menu>
    </div>

    <div class="phone-menu-icon">
      <!-- 直接在methods里面写click会编译不到 -->
      <svg-icon icon-class="nav" @click="isPhone = isPhone === false" />
    </div>

    <div v-if="isPhone" class="phone-menu">
      <el-menu
        :default-active="activeMenu"
        class="nav"
        :router="true"
      >
        <el-menu-item
          v-for="route in routes"
          :key="route.path"
          :index="resolvePath(route.path, route.children[0].path)"
        >
          {{ route.children[0].meta.title }}
        </el-menu-item>
      </el-menu>
    </div>

    <div class="login">
      <svg-icon icon-class="login" />
    </div>
  </header>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate.js'
export default {
  name: 'Navbar',
  data() {
    return {
      basePath: '',
      isPhone: false
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { path } = route
      return path
    },
    routes() {
      const routes = this.$router.options.routes
      return routes.filter((item) => {
        return item.children[0].meta.isTag
      })
    }
  },
  methods: {
    resolvePath(basePath, routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return basePath
      }
      return path.resolve(basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  margin: 0 auto;
  position: relative;
  width: 90%;
  .logo {
    font-family: BarbaraHand;
    font-size: 30px;
    display: block;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: absolute;
    left: 0;
  }
  .menu {
    position: absolute;
    right: 25%;
    .el-menu-item {
      font-size: 15px;
      padding:0 50px;
    }
  }
  .phone-menu-icon {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 40px;
  }
  .phone-menu {
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100px;
    background-color: #fff;
    border-top: 1px solid rgb(219, 216, 216);
    z-index: 9;
  }
  .login {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 40px;
  }
  .login .svg-icon:hover {
    background-color: rgb(255, 255, 255);
    opacity: 0.6;
    cursor: pointer;
  }
  .phone-menu-icon .svg-icon:hover {
    background-color: rgb(255, 255, 255);
    opacity: 0.6;
    cursor: pointer;
  }
  @media screen and (min-width:1025px){
    .menu {
      display: block;
    }
    .phone-menu{
      display: none;
    }
    .phone-menu-icon {
      display: none;
    }
  }
  @media screen and (max-width:1024px){
    .menu {
      display: none;
    }
    .phone-menu-icon {
      display: block;
    }
    .logo {
      left: 25%;
      width: 50%;
    }
    .login {
      left: 0;
      width: 25%;
    }
  }
}
</style>
