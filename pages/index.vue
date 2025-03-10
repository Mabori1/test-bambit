<script setup lang="ts">
import { usePhotosStore } from "#imports";
import { columns } from "@/components/columns";
import DataTable from "@/components/DataTable.vue";

const store = usePhotosStore();
const { photos } = storeToRefs(store);

onMounted(async () => {
  await store.fetchAllPhotos();

  if (!photos.value.length) {
    let attempts = 0;
    setInterval(() => {
      store.fetchAllPhotos();
      attempts++;
      if (attempts >= 5) {
        return;
      }
    }, 5000);
  }
});
</script>

<template>
  <div class="flex justify-center">
    <DataTable :data="photos" :columns="columns" />
  </div>
</template>
