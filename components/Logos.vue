<script setup>
import PerfectLineLogo from "~/assets/logos/perfectline.svg";
import KuldarLogo from "~/assets/logos/kuldar.svg";
import ABarberLogo from "~/assets/logos/abarber.svg";
import AlignLogo from "~/assets/logos/align.svg";
import LiveStoreLogo from "~/assets/logos/livestore.svg";
</script>

<template>
  <div
    class="relative rounded-xl border-t border-white bg-merino-50 p-2 shadow-sm shadow-stone-300"
  >
    <div class="pointer-events-none absolute -top-9 right-32 z-10">
      <img src="/img/sunglasses.svg" class="h-[66px] w-[117px]" />
    </div>

    <div
      class="flex items-center justify-between rounded-lg border border-stone-200 p-8"
    >
      <div class="flex flex-1 flex-col justify-center">
        <div class="text-xl font-semibold text-stone-500">Logos</div>
        <div class="mt-1 text-pretty text-lg leading-none text-stone-400">
          For barber-shops, startups, software libraries and more.
        </div>
      </div>

      <div class="ml-10 mr-2 flex items-center justify-end gap-x-8 gap-y-10">
        <ABarberLogo
          class="h-10 text-stone-400 transition-colors hover:text-stone-600"
          :fontControlled="false"
        />
        <KuldarLogo
          class="h-10 text-stone-400 transition-colors hover:text-stone-600"
          :fontControlled="false"
        />
        <PerfectLineLogo
          class="h-10 text-stone-400 transition-colors hover:text-stone-600"
          :fontControlled="false"
        />
        <AlignLogo
          class="h-8 text-stone-400 transition-colors hover:text-stone-600"
          :fontControlled="false"
        />
        <LiveStoreLogo
          class="h-10 text-stone-400 transition-colors hover:text-stone-600"
          :fontControlled="false"
        />
      </div>
    </div>
  </div>
</template>
