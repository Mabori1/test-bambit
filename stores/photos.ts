import { fetchByAlbumIdPhotos, getPhotos } from "~/data/get-photos";
import type { Photo } from "~/data/schema";

export const usePhotosStore = defineStore("photo", () => {
  const photos = ref<Photo[]>([]);
  const albumIds = ref<string>("");

  //const doubleCount = computed(() => count.value * 2)
  async function fetchAllPhotos() {
    photos.value = await getPhotos();
  }

  async function fetchByAlbumId() {
    photos.value = await fetchByAlbumIdPhotos(albumIds.value);

    albumIds.value = "";
  }

  return { fetchAllPhotos, fetchByAlbumId, photos, albumIds };
});
