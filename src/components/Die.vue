<template>
  <div class="die" :class="{ inline: props.inline, grey: props.value === 0 }">
    <div
      class="spot grey-spot"
      :class="{
        spoton: props.value > 3,
        example: props.graphic
      }"
    ></div>
    <div class="spot"></div>
    <div
      class="spot grey-spot"
      :class="{
        spoton: props.value > 1,
        example: props.graphic
      }"
    ></div>
    <div
      class="spot"
      :class="{
        spoton: props.value === 6,
        example: props.graphic
      }"
    ></div>
    <div
      class="spot grey-spot"
      :class="{
        spoton: props.value === 1 || props.value === 3 || props.value === 5,
        example: props.graphic
      }"
    ></div>
    <div
      class="spot"
      :class="{
        spoton: props.value === 6,
        example: props.graphic
      }"
    ></div>
    <div
      class="spot grey-spot"
      :class="{
        spoton: props.value > 1,
        example: props.graphic
      }"
    ></div>
    <div class="spot"></div>
    <div
      class="spot grey-spot"
      :class="{
        spoton: props.value > 3,
        example: props.graphic
      }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: Number,
  id: Number,
  graphic: Boolean,
  inline: Boolean
})
const emit = defineEmits(['toggleHoldDie'])
</script>
