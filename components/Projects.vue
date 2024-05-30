<script setup>
import PeaceHand from "~/assets/peace.svg";

const projects = shallowRef([
  {
    id: 1,
    name: "Night Mode Pro",
    description:
      "Ad ut labore anim pariatur tempor incididunt aliqua sit adipisicing eiusmod ad adipisicing aliqua in nulla.",
    illustration: PeaceHand,
    linkText: "View on Github",
    linkUrl: "#",
  },
  {
    id: 2,
    name: "Some Project Name",
    description:
      "Ad ut labore anim pariatur tempor incididunt aliqua sit adipisicing eiusmod ad adipisicing aliqua in nulla.",
    illustration: PeaceHand,
    linkText: "View on Github",
    linkUrl: "#",
  },
  {
    id: 3,
    name: "Some Project Name",
    description:
      "Ad ut labore anim pariatur tempor incididunt aliqua sit adipisicing eiusmod ad adipisicing aliqua in nulla.",
    illustration: PeaceHand,
    linkText: "View on Github",
    linkUrl: "#",
  },
]);

const setActiveProject = (project) => {
  activeProject.value = project;
};

const activeProject = shallowRef(projects.value[0]);
</script>

<template>
  <div class="relative flex h-full">
    <div class="pointer-events-none absolute -top-7 left-24 z-10">
      <img src="/img/smiley.svg" class="h-[110px] w-[110px]" />
    </div>

    <div class="flex h-full max-h-full flex-1 gap-1 overflow-auto">
      <Project
        v-for="project in projects"
        :project="project"
        :isActive="project === activeProject"
        @set-project="setActiveProject"
        :key="project.id"
      />
    </div>
  </div>
</template>
