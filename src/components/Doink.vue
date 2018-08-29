<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters" width="0" height="0">
    <defs>
      <filter id="doink">
        <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="1" />
        <feDisplacementMap xChannelSelector="B" yChannelSelector="G" scale="67" in="SourceGraphic" in2="warp" />
      </filter>
    </defs>
  </svg>
</template>

<style scoped lang="scss">
.svg-filters {
  position: fixed;
  visibility: hidden;
}
</style>
