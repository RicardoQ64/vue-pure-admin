<script setup lang="ts">
import JsBarcode from "jsbarcode";
import { ref, onMounted } from "vue";

defineOptions({
  name: "ReBarcode"
});

const props = defineProps({
  tag: {
    type: String,
    default: "canvas"
  },
  text: {
    type: String,
    default: null
  },
  options: {
    type: Object,
    default() {
      return {};
    }
  },
  type: {
    type: String,
    default: "CODE128"
  }
});

const wrapEl = ref(null);

onMounted(() => {
  const opt = { ...props.options, format: props.type };
  JsBarcode(wrapEl.value, props.text, opt);
});
</script>

<template>
  <component :is="tag" ref="wrapEl" />
</template>
