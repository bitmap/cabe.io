<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters" width="0" height="0">
    <defs>
      <filter id="doink" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
        <feTurbulence type="turbulence" baseFrequency="0.005 0.005" numOctaves="1" seed="3" stitchTiles="noStitch" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="A" yChannelSelector="A" result="displacementMap" />
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
