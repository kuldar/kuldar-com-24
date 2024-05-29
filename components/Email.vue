<script setup>
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";
</script>

<template>
  <div class="rounded-xl bg-white p-2 shadow-sm shadow-stone-300">
    <div
      class="flex items-center justify-between gap-4 rounded-lg bg-gradient-to-bl from-merino-50 via-white to-white px-8 py-4"
    >
      <PhPaperPlaneTilt weight="duotone" :size="20" class="text-stone-400" />

      <div class="text-xl font-semibold leading-none text-stone-500">
        email@kuldar.com
      </div>
    </div>
  </div>
</template>
