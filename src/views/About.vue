<template>
  About
  <button @click="handleClick">click</button>
</template>
<script setup lang="ts">
  const handleClick = () => {
    console.log('click',e)
  }
</script>