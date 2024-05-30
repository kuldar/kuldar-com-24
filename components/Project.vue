<script setup>
import { PhCaretCircleRight, PhLink } from "@phosphor-icons/vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div
    :class="[
      'group flex-1 rounded-xl bg-white p-2 text-stone-400 shadow-sm shadow-stone-300 transition-all',
      isActive
        ? 'max-w-full'
        : 'max-w-24 hover:cursor-pointer hover:text-stone-500',
    ]"
    @click.prevent="$emit('set-project', project)"
  >
    <Transition name="project">
      <div
        v-if="isActive"
        class="flex h-full flex-row-reverse rounded-lg bg-gradient-to-bl from-merino-50 via-merino-50 to-transparent"
      >
        <div
          class="flex w-1/2 items-center justify-center gap-4 rounded-br-lg rounded-tr-lg bg-merino-100"
        >
          <project.illustration
            class="max-w-20 text-stone-400"
            :fontControlled="false"
          />
        </div>

        <div class="flex w-1/2 flex-col justify-end px-6 py-4">
          <div class="text-2xl font-bold text-stone-600">
            {{ project.name }}
          </div>
          <div class="mt-2 text-lg leading-tight text-stone-400">
            {{ project.description }}
          </div>
          <a
            :href="project.linkUrl"
            class="mt-4 flex items-center gap-2 text-lg text-stone-500 underline"
          >
            <PhLink :size="20" weight="duotone" />
            <span>{{ project.linkText }}</span>
          </a>
        </div>
      </div>

      <div
        v-else
        class="flex h-full flex-col justify-end rounded-lg bg-gradient-to-bl from-merino-50 via-transparent to-transparent px-8 py-6"
      >
        <div
          class="flex -rotate-90 items-center gap-4 whitespace-nowrap text-xl font-semibold transition-all group-hover:gap-8"
        >
          <PhCaretCircleRight
            weight="duotone"
            :size="20"
            class="h-5 w-5 flex-shrink-0 text-stone-400"
          />
          <span>{{ project.name }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
.project-enter-active,
.project-leave-active {
  transition: opacity 0.5s ease;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
}
</style>
