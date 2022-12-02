<template>
  <button>测试按钮</button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
