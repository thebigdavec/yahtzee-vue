<template>
  <h1 class="center">Yahtzee</h1>
  <h2 class="center">{{ numberOfPlayers }} players currently playing</h2>
  <hr />
  <h2 class="center">{{ currentUserNamePossessive }} turn</h2>
  <Dice :dice="dice" @toggleHoldDie="toggleHoldDie" />
  <div class="btn center">
    <button v-if="rolls" @click="rollDice">Roll Dice</button>
    <div class="center" v-else>Choose your score slot.</div>
  </div>
  <hr />
  <ScoreCard @confirmScoreSelection="confirmScoreSelection" />
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
const isScoring = computed(() => {
  store.state.isScoring
})

function confirmScoreSelection({ id, isUsed }) {
  if (isUsed === true) return
  const isTrue = confirm('Is it true?')
  if (isTrue) setScore(id)
}
function setScore(id) {
  store.dispatch('SetScore', {
    id,
    dice: dice.value
  })
  setTimeout(() => {
    store.dispatch('NextPlayer')
    rolls.value = 3
    initialiseDice()
  }, 2000)
}
function initialiseDice() {
  for (let i = 0; i < 5; i++) {
    dice.value[i] = { die: 0, isHeld: false }
  }
}
function toggleHoldDie(id) {
  if (rolls.value < 3) {
    dice.value[id].isHeld = !dice.value[id].isHeld
  }
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
  if (rolls.value === 0) {
    store.dispatch('SetScoringTrue')
  }
  if (rolls.value < 0) {
    store.dispatch('NextPlayer')
    rolls.value = 3
    initialiseDice()
  }
}
const numberOfPlayers = computed(() => {
  return store.getters.numberOfPlayers
})
const currentUserNamePossessive = computed(() => {
  return store.getters.currentUserNamePossessive
})
const opacityWhenScoring = computed(() => {
  return isScoring.value ? 0.5 : 1
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
  color: #2c3e50;
}
.dice {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-block: 1.5rem;
}
.die {
  cursor: pointer;
  width: clamp(3rem, 12vw, 10rem);
  height: clamp(3rem, 12vw, 10rem);
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
  cursor: default;
}
die.grey {
  pointer-events: none;
}
.spot {
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.5s ease-out;
}
.grey .spot.grey-spot {
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
  align-items: center;
}
.score-row.isUsed {
  opacity: v-bind(opacityWhenScoring);
}
.score-name {
  display: flex;
  flex: 33%;
  gap: 0.5rem;
  font-weight: 700;
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
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
.isUsed .score-amount,
.bold .score-amount {
  opacity: 1;
  font-weight: 700;
}
.score-row.isScoring:not(.isUsed) .score-name {
  cursor: pointer;
  background-color: lightcyan;
  box-shadow: 2px 2px 4px #fff inset, -2px -2px 4px #0003 inset;
  border: 1px solid #bbb;
}
.score-row.isScoring:not(.isUsed) .score-name:hover,
.score-row.isScoring:not(.isUsed) .score-name:focus-visible {
  border: 1px solid black;
}
.score-row.isScoring:not(.isUsed) .score-name:active {
  box-shadow: 2px 2px 4px #0003 inset, -2px -2px 4px #fff inset;
}
.center {
  text-align: center;
}
button {
  margin-left: auto;
}
.btn {
  margin-block: 1.5rem;
}
</style>
