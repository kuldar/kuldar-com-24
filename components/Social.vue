<script setup>
import {
  PhYoutubeLogo,
  PhGithubLogo,
  PhTwitterLogo,
  PhInstagramLogo,
} from "@phosphor-icons/vue";
</script>

<template>
  <div class="gap-10 px-8 py-2">
    <ul class="flex items-center justify-end gap-8 text-lg">
      <li>
        <a
          href="#"
          class="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-500"
        >
          <PhTwitterLogo :size="20" weight="duotone" />
          <span>@kkuldar</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-500"
        >
          <PhInstagramLogo :size="20" weight="duotone" />
          <span>@kkkuldar</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-500"
        >
          <PhGithubLogo :size="20" weight="duotone" />
          <span>@kuldar</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-500"
        >
          <PhYoutubeLogo :size="20" weight="duotone" />
          <span>@kuldar</span>
        </a>
      </li>
    </ul>
  </div>
</template>
