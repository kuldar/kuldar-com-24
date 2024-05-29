<script setup>
import { PhArrowRight } from "@phosphor-icons/vue";
</script>

<template>
  <div class="rounded-xl bg-white p-2 shadow-sm shadow-stone-300">
    <div
      class="rounded-lg bg-gradient-to-bl from-merino-50 via-white to-white px-8 py-6"
    >
      <div class="flex max-w-[420px] flex-col">
        <p class="text-pretty text-2xl font-bold leading-tight text-stone-600">
          Hey, I’m a nerd from Estonia, designing and building cool, boring and
          weird things.
        </p>

        <p class="mt-6 text-pretty text-lg text-stone-400">
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

        <ul class="mt-4 flex flex-col gap-1 text-stone-400">
          <li class="flex items-center gap-4">
            <PhArrowRight :size="20" weight="duotone" />
            <div class="text-pretty text-lg leading-none">
              Esse ea nostrud do reprehenderit ipsum
            </div>
          </li>
          <li class="flex items-center gap-4">
            <PhArrowRight :size="20" weight="duotone" />
            <div class="text-pretty text-lg leading-none">
              Minim consequat ex in laboris ullamco dolore
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
