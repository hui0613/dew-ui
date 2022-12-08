<template>
  <div class="auto-two-column">
    <div class="two-column-left">
      <div class="resize" ref="resize"></div>
      <div class="resize-line"></div>
      <section class="left-content">side</section>
    </div>
    <div class="tow-column-main">
      <section>main</section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { observeEleRect } from '@vert-ui/utils'
import { onMounted, ref } from 'vue'

const props = defineProps({
  minWidth: {
    type: [Number, String],
    default: 200,
  },
  maxWidth: {
    type: [Number, String],
    default: 700,
  },
})

const resize = ref(null)

const observer = observeEleRect(props.minWidth, props.maxWidth)
onMounted(() => {
  console.log(resize.value)
  observer.observe(resize.value, {attributes: true})
})
</script>

<style lang="scss" scoped>
.auto-two-column {
  width: 100%;
  height: 100%;
  .two-column-left {
    height: 100%;
    overflow: hidden;
    float: left;
    position: relative;
  }
  .resize {
    overflow: scroll;
    width: 200px;
    height: 16px;
    resize: horizontal;
    bottom: 0;
    opacity: 0;
    transform: scaleY(100);
  }
  .left-content {
    position: absolute;
    inset: 0 5px 0 0;
    padding: 8px;
    overflow: auto;
  }
  .resize-line {
    width: 4px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    pointer-events: none;
    background-color: rgb(231, 228, 228);
    &:hover {
      background-color: rgb(41, 215, 238);
    }
  }
  .tow-column-main {
    flex: 1;
    height: 100%;
  }
}
</style>
