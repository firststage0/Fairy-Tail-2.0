<script setup lang="ts">
import startScreen from "@/data/startScreen.json";
import { useRouter } from "vue-router";
const router = useRouter();
const { preTitle, title, image } = startScreen;

const goToPage = () => {
  router.push("/home");
};
</script>

<template>
  <div
    class="page"
    :style="{
      backgroundImage: `url(${image})`,
    }"
  >
    <div class="bottom-block">
      <div class="text-block">
        <p class="pre-title">{{ preTitle }}</p>
        <h1 class="title">{{ title }}</h1>
      </div>
      <button class="watch" @click="goToPage">Смотреть</button>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  box-shadow: inset 0px -347px 200px -140px rgba(0, 0, 0, 1);
}

.bottom-block {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pre-title,
.title {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
}

.title {
  font-family: Montserrat-Medium;
  font-weight: 500;
  font-size: 40px;
}

.watch {
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  border-radius: 16px;
  padding: 16px 44px;
  box-shadow: 0 4px 33px 0 rgba(28, 24, 242, 0.08);
  background: linear-gradient(296deg, #176ff2 0%, #196eee 100%);
  border: none;
}
</style>
