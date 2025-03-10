<script lang="ts" setup>
import { SunMoon } from "lucide-vue-next";

type Theme = "light" | "dark";

const setColorScheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>
<template>
  <div>
    <header>
      <div class="flex items-center my-10 justify-center gap-10">
        <p class="text-2xl font-bold">Photos</p>

        <SunMoon
          class="h-5 w-5 hover:scale-150"
          @click="
            setColorScheme($colorMode.preference == 'dark' ? 'light' : 'dark')
          "
        />
      </div>
    </header>
  </div>
</template>
