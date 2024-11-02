<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isDetailView = computed(() => route.name === "detail");
</script>

<template>
  <div class="page" v-if="!isDetailView">
    <h1>Home</h1>
    <router-link :to="{ name: 'detail', params: { id: '1' } }">
      To Details
    </router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
