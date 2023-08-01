<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="4">
    <n-grid-item class="app-card" v-for="app in applications">
      <!--<n-card :title="app.title" hoverable bordered>
        <template #cover>
          <img :src="app.img" style="height: 180px">
        </template>
        {{ app.content }}
        <template #action>
          <n-space justify="end">
            <n-button strong secondary type="info">详情</n-button>
            <n-button strong secondary type="info">进入</n-button>
          </n-space>
        </template>
      </n-card>-->
      <div class="top-title">
        <span style="font-weight: bold">{{app.title}}</span>
      </div>
      <img  :src="app.img">
      <div class="bottom-btn">
        <n-badge color="green" dot />
        <n-space>
          <n-button text>配置</n-button>
          <n-button text>详情</n-button>
          <n-button text>访问</n-button>
        </n-space>
      </div>
    </n-grid-item>
  </n-grid>
</template>

<script setup>
const applications = [
  {
    title: 'Chat GPT 3.5',
    img: 'https://hawar.no/wp-content/uploads/2023/04/chatgpt.jpg',
    content: '引用ChatGPT3.5 API接口，提供免费不限次数的使用！'
  },
  {
    title: 'DDNS 内网动态域名解析',
    img: 'https://www.lifewire.com/thmb/TXVRTtkHvRpTjnRObQ3xm2VlsD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WirelessNetwork-5994852003f4020011db5333.jpg',
    content: '支持阿里云、腾讯云内网域名解析，实现IPV6内网穿透至外网访问'
  },
  {
    title: 'QT-Box 跨平台工具箱',
    img: 'https://img-c.udemycdn.com/course/240x135/3899854_1edc_3.jpg',
    content: '基于C++构建的跨平台QT应用，提供开发常用工具'
  }
]
</script>

<style scoped lang="scss">
.app-card {
  width: 100%;
  height: 150px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  &:hover {
    transition: 100ms;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .top-title {
    position: absolute;
    z-index: 100;
    padding: 0 10px;
    background-color: rgb(255, 255, 255);
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bottom-btn {
    position: absolute;
    z-index: 100;
    background-color: rgba(201, 201, 201, 0.8);
    bottom: 0;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      margin:0  20px ;
    }
  }
}
</style>