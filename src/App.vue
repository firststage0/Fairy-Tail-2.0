<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <router-view></router-view>
  <NavBar v-if="$route.name === 'home' || $route.name === 'favorites'" />
</template>

<style scoped></style>
