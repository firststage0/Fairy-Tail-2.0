<script setup lang="ts">
import { useStore } from "@/stores/store";
import { Item } from "@/types/Item.types";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const { changeFavorite } = store;

const props = defineProps<{ item: Item }>();
const isFavorite = ref(
  localStorage.getItem("favorites")?.includes(props.item.id.toString())
);

const pinItem = () => {
  changeFavorite(props.item.id, !isFavorite.value);
  isFavorite.value = !isFavorite.value;
};

const navigateToDetails = () => {
  router.push(`${String(route.name)}/details/${props.item.id}`);
};
</script>

<template>
  <div
    @click.self="navigateToDetails"
    class="tail-card"
    :style="{ backgroundImage: `url(${props.item.image})` }"
  >
    <img
      v-if="isFavorite"
      @click.self="pinItem"
      src="@/assets/images/unfavorite.svg"
      alt=""
      class="favorite-button"
    />
    <img
      v-else
      @click="pinItem"
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
