<script setup>
import { PhCloudSun, PhClock, PhMapPinLine } from "@phosphor-icons/vue";
</script>

<template>
  <div
    class="flex-1 rounded-xl border-t border-white bg-merino-50 p-2 shadow-sm shadow-stone-300"
  >
    <div
      class="flex h-full items-center rounded-lg border border-stone-200 bg-[url('~/assets/estonia.svg')] bg-[length:300px] bg-[left_-2rem_top_2rem] bg-no-repeat px-8"
    >
      <PhMapPinLine weight="duotone" :size="28" class="ml-12 text-stone-500" />

      <div class="flex h-full flex-1 flex-col items-end justify-center">
        <div class="text-xl font-semibold text-stone-500">Tallinn</div>

        <div class="mt-1 flex items-center gap-4 text-lg">
          <div class="flex items-center gap-1.5 text-stone-400">
            <PhClock :size="20" weight="duotone" />
            <div class="whitespace-nowrap">01:11</div>
          </div>

          <div class="flex items-center gap-1.5 text-stone-400">
            <PhCloudSun :size="20" weight="duotone" />
            <div class="whitespace-nowrap">12&deg; C</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
