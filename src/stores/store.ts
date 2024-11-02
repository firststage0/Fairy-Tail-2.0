import { defineStore } from "pinia";
import { reactive } from "vue";

export const useStore = defineStore("store", () => {
  const pageStatus: { [key: string]: boolean } = reactive({
    home: true,
    favorite: false,
  });

  const changePage = (page: string) => {
    console.log(page);

    (pageStatus as unknown as { [key: string]: boolean })[page] = true;
    Object.keys(pageStatus).forEach((key) => {
      if (key !== page) {
        (pageStatus as unknown as { [key: string]: boolean })[key] = false;
      }
    });
  };

  return {
    pageStatus,
    changePage,
  };
});
