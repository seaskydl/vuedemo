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
    </div>
  </div>
</template>

