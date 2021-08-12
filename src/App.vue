<template>
  <h1>Yahtzee</h1>
  <h3>{{ numberOfPlayers }} players currently playing</h3>
  <hr />
  <Dice :dice="dice" @toggleHoldDie="toggleHoldDie" />
  <button @click="rollDice">
    {{ rolls ? 'Roll Dice' : 'Next Player'
    }}{{ rolls ? ` - ${rolls} rolls remaining` : '' }}
  </button>
  <hr />
  <ScoreCard />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

import Dice from './components/Dice.vue'
import ScoreCard from './components/ScoreCard.vue'

const dice = ref([
  { value: 0, isHeld: false },
  { value: 0, isHeld: false },
  { value: 0, isHeld: false },
  { value: 0, isHeld: false },
  { value: 0, isHeld: false }
])
const rolls = ref(3)

function initialiseDice() {
  for (let i = 0; i < 5; i++) {
    dice.value[i] = { die: 0, isHeld: false }
  }
}
function toggleHoldDie(id) {
  dice.value[id].isHeld = !dice.value[id].isHeld
}
function rollDice() {
  for (let i = 0; i < 5; i++) {
    if (!dice.value[i].isHeld) {
      for (let j = 0; j < Math.random() * 20 + 3; j++) {
        dice.value[i].die = Math.ceil(Math.random() * 6)
      }
    }
  }
  rolls.value--
  if (rolls.value < 0) {
    store.dispatch('NextPlayer')
    rolls.value = 3
    initialiseDice()
  }
}
const numberOfPlayers = computed(() => {
  return store.getters.numberOfPlayers
})
onMounted(() => {
  initialiseDice()
})

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
body {
  margin: 0;
  display: grid;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dice {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-block-end: 2rem;
}
.die {
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background-color: whitesmoke;
  background-image: linear-gradient(185deg, #fff3, #0001);
  border: 1px solid #bbb;
  border-radius: 10%;
  display: grid;
  grid-template-columns: repeat(3, 20%);
  grid-template-rows: repeat(3, 20%);
  justify-content: center;
  align-content: center;
  gap: 5%;
  box-shadow: 0 2px 4px -2px #0007, -2px -2px 3px #0002 inset,
    2px 2px 3px #fff8 inset;
}
.die.inline {
  display: inline-grid;
  width: 1rem;
  height: 1rem;
}
.spot {
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.5s ease-out;
}
.spot.grey {
  box-shadow: -2px -2px 5px #0002, 2px 2px 4px #0003 inset, 2px 2px 5px #fff5,
    -2px -2px 4px #fff6 inset;
}
.spoton {
  background-color: green;
  transition: background-color 0.1s ease;
}
.spoton.example {
  background-color: black;
}
.isHeld .spoton {
  background-color: red;
}
.score-section {
  display: grid;
  gap: 0.5rem;
}
.score-row {
  display: flex;
  gap: 1rem;
}
.score-name {
  display: flex;
  flex: 33%;
  gap: 0.5rem;
  font-weight: 700;
}
.score-name small {
  font-weight: 400;
}
.score-name.column {
  text-align: left;
  flex-direction: column;
  gap: 0;
}
.score-amount {
  flex: 64%;
  text-align: left;
  opacity: 0.5;
}
.score-amount.isUsed {
  opacity: 1;
  font-weight: 700;
}
</style>
