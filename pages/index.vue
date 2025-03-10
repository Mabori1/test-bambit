<script setup lang="ts">
import { columns } from "@/components/columns";
import DataTable from "@/components/DataTable.vue";
import UserNav from "@/components/UserNav.vue";
import { photosData } from "~/data/get-photos";
import type { Photo } from "~/data/schema";

const photos = ref<Photo[]>([]);

onMounted(async () => {
  // photos.value = await getPhotos();
  photos.value = photosData;
});
</script>

<template>
  <div class="h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p class="text-muted-foreground">
          Here's a list of your tasks for this month!
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <UserNav />
      </div>
    </div>
    <div class="flex justify-center">
      <DataTable :data="photos" :columns="columns" />
    </div>
  </div>
</template>
