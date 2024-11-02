<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isFavorite = computed(() => route.name === "favorites");
const isHome = computed(() => route.name === "home");
</script>

<template>
  <nav class="nav-block">
    <img
      v-if="isHome"
      src="@/assets/images/Home.svg"
      alt=""
      class="nav-image"
    />
    <img
      v-if="!isHome"
      @click="$router.push('/home')"
      src="@/assets/images/Home-Inactive.svg"
      alt=""
      class="nav-image"
    />
    <img
      v-if="!isFavorite"
      @click="$router.push('/favorites')"
      src="@/assets/images/Favorites.svg"
      alt=""
      class="nav-image"
    />
    <img
      v-if="isFavorite"
      src="@/assets/images/Heart-Active.svg"
      alt=""
      class="nav-image"
    />
  </nav>
</template>

<style scoped>
.nav-block {
  width: 100%;
  display: flex;
  gap: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  padding: 24px 72px;
  box-shadow: 15px -20px 20px 0 rgba(24, 111, 242, 0.2);
  background: linear-gradient(187deg, #fefefe 0%, #f5f5f5 100%);
}
</style>
