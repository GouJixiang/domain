<template>
  <n-config-provider>
    <n-loading-bar-provider>
      <n-notification-provider>
        <n-message-provider>
          <Home />
          <n-global-style />
        </n-message-provider>
      </n-notification-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import Home from '@/views/home/index.vue'

</script>

<style scoped>
</style>
