import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const listOfFavorites = ref<string[]>([]);
  const changeFavorite = (itemId: number, isFavorite: boolean) => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      listOfFavorites.value = favorites.split(",");
    }

    if (isFavorite) {
      listOfFavorites.value = listOfFavorites.value.filter(
        (id) => id !== itemId.toString()
      );
      localStorage.setItem("favorites", String(listOfFavorites.value));
    } else {
      listOfFavorites.value.push(itemId.toString());
      localStorage.setItem("favorites", String(listOfFavorites.value));
    }
  };
  return {
    changeFavorite,
    listOfFavorites,
  };
});
