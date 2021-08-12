<template>
  <div class="dice">
    <Die
      v-for="(die, index) in dice"
      :hey="index"
      :value="die.die"
      :dice-id="index"
      @click="toggleHoldDie(index)"
      :class="{ isHeld: die.isHeld }"
    />
  </div>
</template>

<script setup>
import Die from './Die.vue'
const props = defineProps({
  dice: Array
})
const emit = defineEmits(['toggleHoldDie'])
function toggleHoldDie(index) {
  emit('toggleHoldDie', index)
}
</script>
