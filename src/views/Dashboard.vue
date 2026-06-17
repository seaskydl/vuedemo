<template>
  <div class="dashboard">
    <h1>我的分销中心</h1>
    <div class="stats">
      <p>累计佣金: <strong>¥88.00</strong></p>
      <p>下级分销员: 5 人</p>
    </div>

    <div class="action-box">
      <button @click="copyLink">复制我的专属推广链接</button>
      <p v-if="copied" class="success-msg">链接已复制到剪贴板！</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const copied = ref(false);
const userId = "USER_12345"; // 模拟当前用户ID

const copyLink = () => {
  const link = `${window.location.origin}/?ref=${userId}`;
  navigator.clipboard.writeText(link).then(() => {
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  });
};
</script>

<style scoped>
.stats { background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0; }
.success-msg { color: #42b983; font-size: 0.9em; }
</style>
