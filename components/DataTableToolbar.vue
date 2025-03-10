<script setup lang="ts">
import { Button } from "@/components/ui/button";
import type { Table } from "@tanstack/vue-table";
import type { Photo } from "../data/schema";

import { Input } from "@/components/ui/input";
import { computed } from "vue";

import { SearchIcon, XIcon } from "lucide-vue-next";
import DataTableViewOptions from "./DataTableViewOptions.vue";
import { usePhotosStore } from "#imports";

interface DataTableToolbarProps {
  table: Table<Photo>;
}

const store = usePhotosStore();
const { albumIds } = storeToRefs(store);

const props = defineProps<DataTableToolbarProps>();

const isFilteredAlbumId = computed(() => albumIds.value.length > 0);

const isFiltered = computed(
  () => props.table.getState().columnFilters.length > 0,
);
</script>

<template>
  <div class="flex items-end justify-between">
    <div class="flex gap-2 flex-col">
      <div class="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Фильтр по названию..."
          :model-value="
            (table.getColumn('title')?.getFilterValue() as string) ?? ''
          "
          class="h-8 w-[150px] lg:w-[250px]"
          @input="table.getColumn('title')?.setFilterValue($event.target.value)"
        />

        <Button
          v-if="isFiltered"
          variant="ghost"
          class="h-8 px-2 lg:px-3"
          @click="table.resetColumnFilters()"
        >
          Reset
          <XIcon class="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div class="flex flex-1 items-center space-x-2">
        <Input
          v-model="albumIds"
          placeholder="Фильтр по альбомам ..."
          class="h-8 w-[150px] lg:w-[250px]"
        />

        <Button
          v-if="isFilteredAlbumId"
          class="h-8 px-2 lg:px-3"
          @click="store.fetchByAlbumId()"
        >
          Поиск
          <SearchIcon class="ml-2 h-4 w-4" />
        </Button>
        <Button
          v-if="isFilteredAlbumId"
          variant="ghost"
          class="h-8 px-2 lg:px-3"
          @click="albumIds = ''"
        >
          Reset
          <XIcon class="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
    <DataTableViewOptions :table="table" />
  </div>
</template>
