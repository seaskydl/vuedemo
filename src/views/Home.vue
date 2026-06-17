<template>
  <div class="home">
    <h1>特惠健康补剂</h1>
    <div class="product-card">
      <h2>高浓度深海鱼油</h2>
      <p class="price">拼团价: <strong>¥159</strong></p>

      <div class="progress-container">
        <p>进度: {{ currentCount }}/{{ targetCount }} 人</p>
        <div class="progress-bar"><div :style="{ width: progress + '%' }"></div></div>
      </div>

      <button @click="handleJoin" :disabled="currentCount >= targetCount">
        {{ currentCount >= targetCount ? '已满团' : '一键参团' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const targetCount = 3;
const currentCount = ref(1);
const progress = computed(() => (currentCount.value / targetCount) * 100);

const handleJoin = () => {
  // 实际项目中这里应调用后端 API
  currentCount.value++;
  alert("参团成功！快把链接分享给朋友吧。");
};
</script>

<style scoped>
.product-card { border: 1px solid #eee; padding: 20px; border-radius: 10px; max-width: 400px; }
.progress-bar { height: 10px; background: #eee; border-radius: 5px; overflow: hidden; }
.progress-bar div { height: 100%; background: #42b983; transition: width 0.3s; }
</style>
