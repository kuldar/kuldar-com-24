<script setup>
import { PhFilmStrip, PhMusicNotes, PhEnvelope } from "@phosphor-icons/vue";
</script>

<template>
  <div
    class="flex-1 rounded-xl border-t border-white bg-merino-50 p-2 shadow-sm shadow-stone-300"
  >
    <div class="flex h-full flex-col rounded-lg border border-stone-200">
      <a
        href="#"
        class="flex items-center justify-end gap-4 border-b border-stone-200 px-8 py-6 text-stone-400 transition-all hover:gap-8 hover:text-stone-500"
      >
        <span class="flex-1 text-lg">YouTube</span>
        <span class="text-xl font-semibold">Vlogs</span>
        <PhFilmStrip weight="duotone" :size="20" class="text-stone-400" />
      </a>

      <a
        href="#"
        class="flex items-center justify-end gap-4 border-b border-stone-200 px-8 py-6 text-stone-400 transition-all hover:gap-8 hover:text-stone-500"
      >
        <span class="flex-1 text-lg">SoundCloud</span>
        <span class="text-xl font-semibold">Mixtapes</span>
        <PhMusicNotes weight="duotone" :size="20" class="text-stone-400" />
      </a>

      <a
        href="#"
        class="flex items-center justify-end gap-4 border-b border-stone-200 px-8 py-6 text-stone-400 transition-all hover:gap-8 hover:text-stone-500"
      >
        <span class="flex-1 text-lg">Buttondown</span>
        <span class="text-xl font-semibold">Newsletter</span>
        <PhEnvelope weight="duotone" :size="20" class="text-stone-400" />
      </a>

      <div
        class="flex flex-1 items-center justify-center px-8 py-6 text-stone-400 opacity-50"
      >
        <span>Kuldar Kalvik &copy; 2024</span>
      </div>
    </div>
  </div>
</template>
