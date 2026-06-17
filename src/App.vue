<template>
  <div class="container">
    <h1>欢迎来到健康补剂中心</h1>
    <nav>
        <router-link to="/">首页</router-link> |
        <router-link to="/dashboard">分销中心</router-link>
    </nav>
    <router-view />

    <button @click="copyReferralLink">一键复制我的推广链接</button>
    <p v-if="copied">链接已复制到剪贴板！</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userId = "USER_888"; // 假设这是当前用户的 ID
const copied = ref(false);

const copyReferralLink = () => {
  // 1. 生成带 ref 参数的链接
  const referralLink = `${window.location.origin}/?ref=${userId}`;

  // 2. 写入剪贴板
  navigator.clipboard.writeText(referralLink).then(() => {
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  });
};
</script>