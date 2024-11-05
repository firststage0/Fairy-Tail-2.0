<script setup lang="ts">
import TailCard from "@/components/TailCard.vue";
import data from "@/data/data.json";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isDetailView = computed(() => route.name === "detail");
</script>

<template>
  <div class="wrapper" v-if="!isDetailView">
    <div class="page">
      <h1 class="page-title">Сказки на день</h1>

      <div v-for="section in data.Sections" class="section">
        <div class="section-header">
          <h3 class="section-title">{{ section.Title }}</h3>
        </div>
        <div class="items-wrapper">
          <TailCard v-for="item in section.Items" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.wrapper {
  background-color: #fff;
  width: 100%;
  height: 100vh;
}

.page {
  width: 100%;
  height: 100%;
  padding: 44px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #fff;
  overflow-y: auto;
  max-height: calc(100vh - 70px);
}

.page-title {
  font-family: Montserrat-Medium;
  font-weight: 500;
  font-size: 32px;
  color: #000;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-title {
  font-family: Montserrat-SemiBold;
  font-weight: 600;
  font-size: 18px;
  color: #232323;
}

.items-wrapper {
  max-width: 100%;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
</style>
