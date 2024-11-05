<script setup lang="ts">
import { ref } from "vue";

type Item = {
  id: number;
  title: string;
  image: string;
};
const props = defineProps<{ item: Item }>();
const isFavorite = ref(
  localStorage.getItem("favorites")?.includes(props.item.id.toString())
);
const listOfFavorites = ref<string[]>([]);
const changeFavorite = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    listOfFavorites.value = favorites.split(",");
  }
  isFavorite.value = !isFavorite.value;
  if (!isFavorite.value) {
    listOfFavorites.value = listOfFavorites.value.filter(
      (id) => id !== props.item.id.toString()
    );
    localStorage.setItem("favorites", String(listOfFavorites.value));
  } else {
    listOfFavorites.value.push(props.item.id.toString());
    localStorage.setItem("favorites", String(listOfFavorites.value));
  }
};
</script>

<template>
  <div
    class="tail-card"
    :style="{ backgroundImage: `url(${props.item.image})` }"
  >
    <img
      v-if="isFavorite"
      @click="changeFavorite"
      src="@/assets/images/unfavorite.svg"
      alt=""
      class="favorite-button"
    />
    <img
      v-else
      @click="changeFavorite"
      src="@/assets/images/favorite.svg"
      alt=""
      class="favorite-button"
    />

    <p class="tail-name">{{ props.item.title }}</p>
  </div>
</template>

<style scoped>
.tail-card {
  width: 156px;
  height: 200px;
  border-radius: 12px;
  padding: 8px;
  position: relative;
  box-shadow: inset 0px -90px 40px -20px rgba(77, 86, 82, 0.65);
}

.favorite-button {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.tail-name {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  max-width: 140px;
}
</style>
