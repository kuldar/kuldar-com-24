<template>
  <div class="relative flex h-screen gap-1 bg-merino-100 p-4 font-sans">
    <div class="relative flex w-2/3 flex-col gap-1">
      <div class="flex gap-1">
        <Location />
        <Name />
      </div>

      <div class="flex gap-1">
        <Version />
        <Grills />
        <Social />
      </div>

      <Projects />
      <Logos />
    </div>

    <div class="flex w-1/3 flex-col gap-1">
      <Intro />

      <div class="flex gap-1">
        <Grills />
        <Email />
      </div>

      <Links />
    </div>
  </div>
</template>
