<template>
  <div class="w-full h-full flex items-center justify-between">
    <div class="flex pl-2 items-center">
      <n-button :focusable="false" text style="font-size: 18px; height: 100%" @click="menuFold = !menuFold">
        <n-icon>
          <menu-fold-outlined v-if="menuFold"/>
          <menu-unfold-outlined v-else/>
        </n-icon>
      </n-button>
      <n-breadcrumb class="ml-5">
        <n-breadcrumb-item>
          首页
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          应用中心
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          应用列表
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="flex pr-2 h-full">
      <n-space class="h-full items-center" justify="end" size="large">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button block text style="font-size: 18px; height: 100%">
              <n-icon>
                <fullscreen-outlined/>
              </n-icon>
            </n-button>
          </template>
          全屏
        </n-tooltip>
        <n-tooltip>
          <template #trigger>
            <n-button block text style="font-size: 18px; height: 100%">
              <n-icon>
                <code-outlined/>
              </n-icon>
            </n-button>
          </template>
          控制台工具
        </n-tooltip>
        <n-tooltip>
          <template #trigger>
            <n-button block text style="font-size: 18px; height: 100%">
              <n-icon>
                <github-filled/>
              </n-icon>
            </n-button>
          </template>
          Github
        </n-tooltip>
        <n-badge value="16">
          <n-button block text style="font-size: 18px; height: 100%">
            <n-icon>
              <notifications-outline/>
            </n-icon>
          </n-button>
        </n-badge>
        <n-dropdown trigger="hover" :options="avatarOptions">
          <div class="flex items-center">
            <n-avatar
                round
                size="medium"
                src="https://img.syt5.com/2021/0720/20210720092412855.jpg.420.420.jpg"
            />
            <span style="font-size: 18px; margin-left: 4px; font-weight: bold">yangxy</span>
          </div>
        </n-dropdown>
      </n-space>
    </div>
  </div>
</template>

<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined, CodeOutlined, FullscreenOutlined, GithubFilled } from '@vicons/antd'
import { NotificationsOutline, PersonCircleOutline, Pencil, LogOutOutline  } from '@vicons/ionicons5'
import { ref, reactive, h } from 'vue'
import { NIcon } from 'naive-ui'

/* 图标渲染函数 */
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const menuFold = ref(true)
const avatarOptions = reactive([
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(PersonCircleOutline)
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(Pencil)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogOutOutline)
  }
])
</script>

<style scoped lang="scss">

</style>