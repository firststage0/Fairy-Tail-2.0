<script setup lang="ts">
import favorite from "@/assets/images/favorite.svg";
import unfavorite from "@/assets/images/unfavorite.svg";
import tails from "@/data/tails.json";
import { useStore } from "@/stores/store";
import { Tale } from "@/types/Item.types";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const item = ref<Tale>();
const store = useStore();

const { changeFavorite } = store;

const isFavorite = ref<boolean>(
  (localStorage.getItem("favorites") ?? [""]).includes(
    route.params.id.toString()
  )
);

const itemID = Number(route.params.id);

const pinItem = () => {
  changeFavorite(itemID, isFavorite.value);
  isFavorite.value = !isFavorite.value;
};

onMounted(() => {
  item.value = tails.find((item: Tale) => item.id === itemID);
});
</script>

<template>
  <div class="detail-page">
    <div class="image-block">
      <button class="back-button" @click="$router.back()">
        <img src="@/assets/images/back.svg" alt="Назад" />
      </button>
      <img src="@/assets/images/Tail.png" alt="" class="tail-image" />
      <img
        class="favorite-image"
        @click="pinItem"
        :src="isFavorite ? favorite : unfavorite"
      />
    </div>

    <div class="text-block">
      <h2 class="tale-name">{{ item?.title }}</h2>
      <p class="tale-description" v-html="item?.description"></p>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  background-color: #f3f8fe;
  gap: 32px;
}

.image-block {
  position: relative;
}

.back-button {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #fff;
  border: none;
  padding: 14px 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tail-image {
  width: 100%;
  height: 340px;
}

.favorite-image {
  position: absolute;
  right: 14px;
  bottom: -20px;
  width: 44px;
  height: 44px;
  box-shadow: 0 6px 19px 0 rgba(0, 56, 255, 0.1);
  border-radius: 80px;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tale-name {
  font-family: Montserrat-SemiBold;
  font-size: 24px;
  color: #232323;
}

.tale-description {
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  color: #3a544f;
}
</style>
