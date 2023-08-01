<template>
<n-layout has-sider>
  <n-layout-sider
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      show-trigger
      bordered
      :native-scrollbar="false"
      class="my-sider shadow-md">
    <div class="h-14 w-full flex items-center justify-center">
      <h1 class="font-bold text-3xl">OCCN</h1>
    </div>
    <n-menu :options="menuOptions"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :render-label="renderMenuLabel"/>
  </n-layout-sider>
  <n-layout>
    <!-- 首页菜单 -->
    <n-layout-header class="h-14" bordered>
      <Menu />
    </n-layout-header>
    <n-layout-content embedded class="my-content" :native-scrollbar="false">
        <Application />
    </n-layout-content>
    <n-layout-footer bordered class="h-12 my-footer flex items-center justify-center">
      <a href="https://beian.miit.gov.cn/" style="text-decoration: none; color: black;" target="_blank">陕ICP备2023001751号</a>
    </n-layout-footer>
  </n-layout>
  </n-layout>
</template>

<script setup>
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { CaretDownOutline } from '@vicons/ionicons5'
import { AppstoreOutlined } from '@vicons/antd'
import Application  from '@/views/applications/index.vue'
import Menu from '@/components/layout/menu.vue'

const menuOptions = [
  {
    label: '应用中心',
    key: 'applications',
    icon: renderIcon(AppstoreOutlined)
  }
]
function renderMenuLabel (option) {
  if ('href' in option) {
    return h(
        'a',
        { href: option.href, target: '_blank' },
        option.label
    )
  }
  return option.label
}

/* 渲染菜单图标 */
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function expandIcon () {
  return h(NIcon, null, { default: () => h(CaretDownOutline) })
}
</script>

<style scoped lang="scss">
.my-content {
  padding: 20px 20px 10px 20px;
  height: calc(100vh - 58px - 48px);
}
.my-footer {
  background-color: white;
}
</style>