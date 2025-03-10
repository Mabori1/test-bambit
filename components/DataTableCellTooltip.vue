<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface DataTableCellTooltipProps {
  title: string;
}

defineProps<DataTableCellTooltipProps>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div :class="$attrs.class">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <p class="truncate">
            {{ title }}
          </p>
        </TooltipTrigger>
        <TooltipContent class="w-full">
          <p>{{ title }}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
