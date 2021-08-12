<template>
  <h2 class="center">{{ userNamePossessive }} Score Card</h2>
  <h3>Upper Section</h3>
  <div class="score-section">
    <div
      class="score-row"
      :class="{ isUsed: isAcesUsed, isScoring: isScoring }"
      data-tooltip="The value of all Aces thrown"
    >
      <div
        id="aces"
        :data-is-used="isAcesUsed"
        class="score-name"
        @click="confirmScoreSelection"
      >
        <div>Aces</div>
        <Die :value="1" graphic inline />
        <div>= 1</div>
      </div>
      <div class="score-amount">{{ aces }}</div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isTwosUsed, isScoring: isScoring }"
      data-tooltip="The value of all Twos thrown"
    >
      <div
        id="twos"
        :data-is-used="isTwosUsed"
        class="score-name"
        @click="confirmScoreSelection"
      >
        <div>Twos</div>
        <Die :value="2" graphic inline />
        <div>= 2</div>
      </div>
      <div class="score-amount">{{ twos }}</div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isThreesUsed, isScoring: isScoring }"
      data-tooltip="The value of all Threes thrown"
    >
      <div
        id="threes"
        :data-is-used="isThreesUsed"
        class="score-name"
        @click="confirmScoreSelection"
      >
        <div>Threes</div>
        <Die :value="3" graphic inline />
        <div>= 3</div>
      </div>
      <div class="score-amount">
        {{ threes }}
      </div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isFoursUsed, isScoring: isScoring }"
      data-tooltip="The value of all Fours thrown"
    >
      <div
        id="fours"
        :data-is-used="isFoursUsed"
        class="score-name"
        @click="confirmScoreSelection"
      >
        <div>Fours</div>
        <Die :value="4" graphic inline />
        <div>= 4</div>
      </div>
      <div class="score-amount">
        {{ fours }}
      </div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isFivesUsed, isScoring: isScoring }"
      data-tooltip="The value of all Fives thrown"
    >
      <div
        id="fives"
        :data-is-used="isFivesUsed"
        class="score-name"
        @click="confirmScoreSelection"
      >
        <div>Fives</div>
        <Die :value="5" graphic inline />
        <div>= 5</div>
      </div>
      <div class="score-amount">
        {{ fives }}
      </div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isSixesUsed, isScoring: isScoring }"
      data-tooltip="The value of all Sixes thrown"
    >
      <div
        id="sixes"
        :data-is-used="isSixesUsed"
        class="score-name"
        @click="confirmScoreSelection"
      >
        <div>Sixes</div>
        <Die :value="6" graphic inline />
        <div>= 6</div>
      </div>
      <div class="score-amount">
        {{ sixes }}
      </div>
    </div>
    <div class="score-row bold">
      <div class="score-name">TOTAL SCORE</div>
      <div class="score-amount">
        {{ upperSubtotal }}
      </div>
    </div>
    <div class="score-row">
      <div class="score-name column">
        35 POINT BONUS
        <small>For total score 63 or more</small>
      </div>
      <div class="score-amount" :class="{ isUsed: bonus35 }">{{ bonus35 }}</div>
    </div>
    <div class="score-row bold">
      <div class="score-name">TOTAL</div>
      <div class="score-amount">
        {{ upperTotal }}
      </div>
    </div>
  </div>
  <h3>Lower Section</h3>
  <div class="score-section">
    <div
      class="score-row"
      :class="{ isUsed: isThreeOfAKindUsed, isScoring: isScoring }"
    >
      <div class="score-name" @click="confirmScoreSelection">
        <div>3 of a kind</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isFourOfAKindUsed, isScoring: isScoring }"
    >
      <div class="score-name" @click="confirmScoreSelection">
        <div>4 of a kind</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isFullHouseUsed, isScoring: isScoring }"
    >
      <div class="score-name" @click="confirmScoreSelection">
        <div>Full House</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isSmStraightUsed, isScoring: isScoring }"
    >
      <div class="score-name column" @click="confirmScoreSelection">
        <div>Small Straight</div>
        <small>Sequence of 4</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isLgStraightUsed, isScoring: isScoring }"
    >
      <div class="score-name column" @click="confirmScoreSelection">
        <div>Large Straight</div>
        <small>Sequence of 5</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div
      class="score-row"
      :class="{ isUsed: isYahtzeeUsed, isScoring: isScoring }"
    >
      <div class="score-name column" @click="confirmScoreSelection">
        <div>YAHTZEE</div>
        <small>5 of a kind</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name" @click="confirmScoreSelection">Chance</div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">YAHTZEE BONUS</div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row bold">
      <div class="score-name column">
        TOTAL
        <small>of Lower Section</small>
      </div>
      <div class="score-amount">{{ lowerTotal }}</div>
    </div>
    <div class="score-row bold">
      <div class="score-name column">
        TOTAL
        <small>of Upper Section</small>
      </div>
      <div class="score-amount">{{ upperTotal }}</div>
    </div>
    <div class="score-row bold">
      <div class="score-name">GRAND TOTAL</div>
      <div class="score-amount">{{ grandTotal }}</div>
    </div>
  </div>
</template>

<script setup>
import Die from './Die.vue'
import { computed } from 'vue'
import { useStore, mapState } from 'vuex'
const store = useStore()
console.log(store.getters.upperTotal)

const emit = defineEmits(['confirmScoreSelection'])

function confirmScoreSelection(e) {
  const id = e.target.closest('.score-name').id
  const isUsed = e.target.closest('.score-name').dataset.isUsed
  if (isScoring) {
    emit('confirmScoreSelection', {
      id,
      isUsed
    })
  }
}

const userNamePossessive = computed(() => {
  return store.getters.currentUserNamePossessive
})
const isScoring = computed(() => {
  return store.state.isScoring
})
const aces = computed(() => {
  return store.getters.aces
})
const twos = computed(() => {
  return store.getters.twos
})
const threes = computed(() => {
  return store.getters.threes
})
const fours = computed(() => {
  return store.getters.fours
})
const fives = computed(() => {
  return store.getters.fives
})
const sixes = computed(() => {
  return store.getters.sixes
})

const isAcesUsed = computed(() => {
  return store.getters.acesUsed
})
const isTwosUsed = computed(() => {
  return store.getters.twosUsed
})
const isThreesUsed = computed(() => {
  return store.getters.threesUsed
})
const isFoursUsed = computed(() => {
  return store.getters.foursUsed
})
const isFivesUsed = computed(() => {
  return store.getters.fivesUsed
})
const isSixesUsed = computed(() => {
  return store.getters.sixesUsed
})
const upperSubtotal = computed(() => {
  return store.getters.upperTotal
})
const bonus35 = computed(() => {
  return store.getters.bonus35
})
const lowerTotal = computed(() => {
  return store.getters.lowerTotal
})
const upperTotal = computed(() => {
  return store.getters.upperTotal + store.getters.bonus35
})
const grandTotal = computed(() => {
  return (
    store.getters.upperTotal + store.getters.bonus35 + store.getters.lowerTotal
  )
})
</script>
