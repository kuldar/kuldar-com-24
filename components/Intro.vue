<script setup>
import { PhAsterisk } from "@phosphor-icons/vue";
</script>

<template>
  <div class="relative rounded-xl bg-white p-2 shadow-sm shadow-stone-300">
    <div class="pointer-events-none absolute -bottom-12 left-8 z-10">
      <img src="/img/mushroom.svg" class="h-[73px] w-[61px]" />
    </div>

    <div
      class="rounded-lg bg-gradient-to-bl from-merino-50 via-white to-white px-8 py-6"
    >
      <div class="flex max-w-[420px] flex-col">
        <p
          class="text-pretty text-2xl font-bold leading-[1.125] text-stone-600"
        >
          Hey, I’m a nerd from Estonia, designing and building cool, boring and
          weird things.
        </p>

        <p class="mt-6 text-pretty text-lg leading-tight text-stone-400">
          I like to
          <a href="#" class="text-stone-500 underline underline-offset-2"
            >play with cameras</a
          >, nerd over
          <a href="#" class="text-stone-500 underline underline-offset-2"
            >cool space rockets</a
          >
          and tinker with
          <a href="#" class="text-stone-500 underline underline-offset-2"
            >UI experiments</a
          >.
        </p>

        <ul class="mt-4 flex flex-col gap-2 leading-tight text-stone-400">
          <li class="flex items-center gap-4">
            <PhAsterisk :size="20" weight="duotone" />
            <div class="text-pretty text-lg leading-none">
              Esse ea nostrud do reprehenderit ipsum
            </div>
          </li>
          <li class="flex items-center gap-4">
            <PhAsterisk :size="20" weight="duotone" />
            <div class="text-pretty text-lg leading-none">
              Minim consequat ex in laboris ullamco dolore
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
