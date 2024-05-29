<script setup>
import { PhArrowRight, PhLink } from "@phosphor-icons/vue";
</script>

<template>
  <div class="flex flex-1 gap-1">
    <div class="flex-1 rounded-xl bg-white p-2 shadow-sm shadow-stone-300">
      <div
        class="flex h-full flex-col justify-end rounded-lg bg-gradient-to-bl from-merino-50 via-white to-white px-8 py-6"
      >
        <div class="text-3xl font-extrabold text-stone-600">
          Some Project Name
        </div>

        <div class="mt-2 text-lg text-stone-400">
          Ad ut labore anim pariatur tempor incididunt aliqua sit adipisicing
          eiusmod ad adipisicing aliqua in nulla. Cillum irure laborum.
        </div>

        <a
          href="#"
          class="mt-4 flex items-center gap-2 text-lg text-stone-500 underline"
        >
          <PhLink :size="20" weight="duotone" />
          <span>https://github.com/kuldar/something</span>
        </a>
      </div>
    </div>

    <div
      class="group max-w-24 flex-1 rounded-xl bg-white p-2 text-stone-400 shadow-sm shadow-stone-300 hover:cursor-pointer hover:text-stone-500"
    >
      <div
        class="flex h-full flex-col justify-end rounded-lg bg-gradient-to-bl from-merino-50 via-white to-white px-8 py-6 transition-all group-hover:py-10"
      >
        <div class="-rotate-90 whitespace-nowrap text-xl font-semibold">
          Some Project Name
        </div>
      </div>
    </div>

    <div
      class="group max-w-24 flex-1 rounded-xl bg-white p-2 text-stone-400 shadow-sm shadow-stone-300 hover:cursor-pointer hover:text-stone-500"
    >
      <div
        class="flex h-full flex-col justify-end rounded-lg bg-gradient-to-bl from-merino-50 via-white to-white px-8 py-6 transition-all group-hover:py-10"
      >
        <div class="-rotate-90 whitespace-nowrap text-xl font-semibold">
          This Other Project
        </div>
      </div>
    </div>

    <div
      class="group max-w-24 flex-1 rounded-xl bg-white p-2 text-stone-400 shadow-sm shadow-stone-300 hover:cursor-pointer hover:text-stone-500"
    >
      <div
        class="flex h-full flex-col justify-end rounded-lg bg-gradient-to-bl from-merino-50 via-white to-white px-8 py-6 transition-all group-hover:py-10"
      >
        <div class="-rotate-90 whitespace-nowrap text-xl font-semibold">
          And a Third One
        </div>
      </div>
    </div>
  </div>
</template>
