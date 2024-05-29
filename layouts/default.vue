<script setup>
  import {
    PhYoutubeLogo,
    PhGithubLogo,
    PhTwitterLogo,
    PhInstagramLogo,
    PhCloudSun,
    PhClock,
    PhArrowRight,
    PhLink,
  } from "@phosphor-icons/vue";

  import PerfectLineLogo from "~/assets/perfectline-logo.svg";
  import KuldarLogo from "~/assets/kuldar-logo.svg";
  import ABarberLogo from "~/assets/abarber-logo.svg";
  import AlignLogo from "~/assets/align-logo.svg";
  import LiveStoreLogo from "~/assets/livestore-logo.svg";
</script>

<template>
  <div class="h-screen flex bg-slate-100 gap-1 p-1">
    <div class="flex flex-col w-2/3 gap-1">
      <div class="flex gap-1">
        <!-- Location -->
        <div class="bg-white rounded-xl">
          <div class="h-full flex flex-col gap-1 justify-center px-10">
            <div
              class="text-xl font-medium text-slate-600 border-b border-slate-200"
            >
              Tallinn
            </div>

            <div class="flex gap-6 items-center">
              <div class="flex items-center gap-2 text-slate-400">
                <PhClock :size="20" weight="duotone" />
                <div class="whitespace-nowrap">01:11</div>
              </div>

              <div class="flex items-center gap-2 text-slate-400">
                <PhCloudSun :size="20" weight="duotone" />
                <div class="whitespace-nowrap">12&deg; C</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Name -->
        <div
          class="flex-1 px-10 py-8 gap-6 flex items-center justify-end bg-white rounded-xl"
        >
          <img
            class="rounded-full h-14 w-14 outline outline-[3px] outline-emerald-500 border-[3px] border-white"
            src="/img/portrait.jpg"
            alt="Black and white portrait of Kuldar"
          />
          <div
            class="text-slate-900 font-extrabold text-7xl tracking-tighter -translate-y-1"
          >
            kuldar.
          </div>
        </div>
      </div>

      <div class="flex gap-1 items-center">
        <div class="flex-1 h-full bg-white rounded-xl">
          <div class="text-slate-300 px-10 py-2"></div>
        </div>

        <!-- Socials -->
        <div class="py-2 px-8 gap-10">
          <ul class="flex items-center justify-end gap-8">
            <li>
              <a href="#" class="flex items-center gap-2 text-slate-400">
                <PhTwitterLogo :size="20" weight="duotone" />
                <span>@kkuldar</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-2 text-slate-400">
                <PhInstagramLogo :size="20" weight="duotone" />
                <span>@kkkuldar</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-2 text-slate-400">
                <PhGithubLogo :size="20" weight="duotone" />
                <span>@kuldar</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-2 text-slate-400">
                <PhYoutubeLogo :size="20" weight="duotone" />
                <span>@kuldar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Projects -->
      <div class="flex-1 flex gap-1">
        <div class="flex-1 bg-white rounded-xl p-2">
          <div
            class="flex flex-col justify-end h-full px-8 py-6 bg-emerald-500 rounded-lg"
          >
            <div class="text-2xl font-bold text-white">Some Project Name</div>

            <ul class="mt-4 flex flex-col gap-1 text-emerald-200">
              <li class="flex items-center gap-2">
                <PhArrowRight :size="20" weight="duotone" />
                <div>Esse ea nostrud do reprehenderit ipsum</div>
              </li>
              <li class="flex items-center gap-2">
                <PhArrowRight :size="20" weight="duotone" />
                <div>Minim consequat ex in laboris ullamco dolore</div>
              </li>
              <li class="flex items-center gap-2">
                <PhLink :size="20" weight="duotone" />
                <div>https://github.com/kuldar/something</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex-1 bg-white rounded-xl max-w-24 p-2">
          <div
            class="flex flex-col justify-end h-full px-8 py-6 bg-yellow-400 rounded-lg"
          >
            <div
              class="-rotate-90 whitespace-nowrap text-2xl font-bold text-white"
            >
              Some Project Name
            </div>
          </div>
        </div>

        <div class="flex-1 bg-white rounded-xl max-w-24 p-2">
          <div
            class="flex flex-col justify-end h-full px-8 py-6 bg-orange-500 rounded-lg"
          >
            <div
              class="-rotate-90 whitespace-nowrap text-2xl font-bold text-white"
            >
              This Other Project
            </div>
          </div>
        </div>

        <div class="flex-1 bg-white rounded-xl max-w-24 p-2">
          <div
            class="flex flex-col justify-end h-full px-8 py-6 bg-purple-500 rounded-lg"
          >
            <div
              class="-rotate-90 whitespace-nowrap text-2xl font-bold text-white"
            >
              And a Third One
            </div>
          </div>
        </div>
      </div>

      <!-- Logos -->
      <div class="flex items-center justify-between bg-white rounded-xl p-10">
        <div class="flex flex-col gap-1 justify-center">
          <div
            class="text-xl font-medium text-slate-600 border-b border-slate-200"
          >
            Logos
          </div>

          <div class="whitespace-nowrap text-slate-400">
            For barber-shops, startups, software libraries and more.
          </div>
        </div>

        <div class="flex flex-wrap gap-x-12 gap-y-10 items-center justify-end">
          <ABarberLogo
            class="h-10 text-slate-400 hover:text-slate-600"
            :fontControlled="false"
          />
          <KuldarLogo
            class="h-10 text-slate-400 hover:text-slate-600"
            :fontControlled="false"
          />
          <PerfectLineLogo
            class="h-10 text-slate-400 hover:text-slate-600"
            :fontControlled="false"
          />
          <AlignLogo
            class="h-8 text-slate-400 hover:text-slate-600"
            :fontControlled="false"
          />
          <LiveStoreLogo
            class="h-10 text-slate-400 hover:text-slate-600"
            :fontControlled="false"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col w-1/3 gap-1">
      <!-- Intro -->
      <div class="px-10 py-8 bg-white rounded-xl">
        <div class="flex flex-col gap-6 max-w-[420px]">
          <p class="text-2xl font-bold text-slate-600 leading-tight">
            Hey, I’m a nerd from Estonia working as a designer & developer,
            building cool, boring and weird things.
          </p>

          <p class="text-slate-400">
            I like to
            <a href="#" class="underline text-slate-500">play with cameras</a>,
            nerd over
            <a href="#" class="underline text-slate-500">cool space rockets</a>
            and tinker with
            <a href="#" class="underline text-slate-500">UI experiments</a>.
          </p>

          <ul class="flex flex-col gap-1 text-slate-500">
            <li class="flex items-center gap-2">
              <PhArrowRight :size="20" weight="duotone" />
              <div>Esse ea nostrud do reprehenderit ipsum</div>
            </li>
            <li class="flex items-center gap-2">
              <PhArrowRight :size="20" weight="duotone" />
              <div>Minim consequat ex in laboris ullamco dolore</div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Email -->
      <div class="flex gap-1">
        <div
          class="flex justify-between items-center px-10 py-6 bg-white rounded-xl"
        >
          <div
            class="text-slate-600 text-xl underline decoration-emerald-500 leading-none font-medium"
          >
            email@kuldar.com
          </div>
        </div>
        <div class="flex-1 bg-white rounded-xl"></div>
      </div>

      <div class="flex-1 p-10 bg-white rounded-xl">
        <div class="text-xl font-medium text-slate-600">Cool finds</div>
      </div>
    </div>
  </div>
</template>
