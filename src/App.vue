<template>
<div class="min-h-screen bg-gray-50 flex justify-center py-6 px-4 md:items-center">
    <div class="w-full md:max-w-[600px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">欢迎来到健康补剂中心</h1>

      <nav class="flex gap-4 mb-8 border-b pb-4 text-blue-600 font-medium">
        <router-link to="/" class="hover:text-blue-800">首页</router-link>
        <router-link to="/dashboard" class="hover:text-blue-800">分销中心</router-link>
      </nav>

      <div class="mb-8">
        <router-view />
      </div>

      <div class="pt-6 border-t border-gray-100">
        <button
          @click="copyReferralLink"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-200 shadow-md"
        >
          一键复制我的推广链接
        </button>

        <p v-if="copied" class="mt-3 text-center text-green-600 font-medium animate-pulse">
          ✓ 链接已复制到剪贴板！
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userId = "USER_888";
const copied = ref(false);

const copyReferralLink = () => {
  const referralLink = `${window.location.origin}/?ref=${userId}`;
  navigator.clipboard.writeText(referralLink).then(() => {
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  });
};
</script>