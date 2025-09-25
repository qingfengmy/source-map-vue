<template>
  <div>
    <div style="margin-top: 20px; display: flex; gap: 20px; width: 100%">
      <router-link to="/about">About</router-link>
      <router-link to="/user">User</router-link>
      <router-link to="/rrweb">rrweb</router-link>
      <router-link to="/play">play</router-link>
    </div>
    <div>
      <router-view />
      <!-- 路由页面会显示在这里 -->
    </div>
  </div>
</template>
