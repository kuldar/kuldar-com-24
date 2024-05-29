<script setup>
import { PhFilmStrip, PhMusicNotes } from "@phosphor-icons/vue";
</script>

<template>
  <div
    class="flex-1 rounded-xl border-t border-white bg-merino-50 p-2 shadow-sm shadow-stone-300"
  >
    <div class="flex h-full flex-col rounded-lg border border-stone-200">
      <div class="flex gap-2 border-b border-stone-200 px-8 py-6">
        <div
          class="flex items-center gap-4 text-xl font-semibold text-stone-500"
        >
          <PhFilmStrip weight="duotone" :size="20" class="text-stone-400" />
          <span>Short Vlogs</span>
        </div>
      </div>

      <div class="flex gap-2 border-b border-stone-200 px-8 py-6">
        <div
          class="flex items-center gap-4 text-xl font-semibold text-stone-500"
        >
          <PhMusicNotes weight="duotone" :size="20" class="text-stone-400" />
          <span>Favorite Mixtapes</span>
        </div>
      </div>
    </div>
  </div>
</template>
