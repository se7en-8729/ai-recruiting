<template>
  <header class="header">
    <div class="inner">
        <el-row>
            <el-col :span="3">
                <router-link to="/"><div class="header-logo"></div></router-link>
            </el-col>
            <el-col :span="21" class="head-login-r">
                <div class="head-login-r">
                    <el-row type="flex" class="row-bg" justify="space-between">
                        <el-col :span="18">
                            <div class="head-company">迷你校</div>
                            <div class="nav-wrap">
                                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="false">
                                  <el-menu-item index="1">首页</el-menu-item>
                                  <el-menu-item index="2">职位管理</el-menu-item>
                                  <el-menu-item index="3">招聘管理</el-menu-item>
                                  <el-menu-item index="4">简历库</el-menu-item>
                                  <el-menu-item index="5">智能招聘</el-menu-item>
                                </el-menu>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
  </header>
</template>

<script>
export default {
  name: 'nav',
  data: function () {
    return {
      activeIndex: '1'
    }
  }
}
</script>


<style lang="less" scoped>
.header {
  background-color: #fff;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box; 
  .inner {
    width: 1180px;
    margin: 0 auto;
  }
  .el-menu {
    background-color:  #fff;
    position: static
  }
}

.header-logo {
  margin-top: 8px;
  border-right: 1px solid #ddd;
  padding-right: 14px;
  width: 131px;
  height: 42px;
  background: url('../assets/minixiao-logo.png') no-repeat;
  background-size: 131px 42px;
}

.head-company {
  line-height: 30px;
  max-width: 160px;
  display: inline-block;
  float: left;
  border-radius: 30px;
  margin: 14px 30px 0 12px;
  background-color: #ffbc05;
  color: #fff;
  overflow: hidden;
  padding: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  cursor: default;
}

.nav-wrap {
  &>.el-menu {
    border-bottom: 1px solid #ddd;
    height: 59px;
  }
  .el-menu--horizontal .el-menu-item {
    line-height: 60px;
    font-size: 16px;
    border-bottom: 3px solid transparent;
    padding: 0 30px;
    color: #464646
  }
  .el-menu--horizontal .el-menu-item.is-active {
    color: #049cff;
  }
  .el-menu--horizontal .el-menu-item:hover,
  .el-menu--horizontal .el-submenu__title:hover {
    background-color: #fff;
  }
  .el-menu--horizontal>.el-menu-item:hover,
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
  .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
    border-bottom: 3px solid #049cff;
  }
}
</style>