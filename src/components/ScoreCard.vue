<template>
  <h2>Dave's Score Card</h2>
  <h3>Upper Section</h3>
  <div class="score-section">
    <div class="score-row">
      <div class="score-name">
        <div>Aces</div>
        <Die :value="1" graphic inline />
        <div>= 1</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">
        <div>Twos</div>
        <Die :value="2" graphic inline />
        <div>= 2</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">
        <div>Threes</div>
        <Die :value="3" graphic inline />
        <div>= 3</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">
        <div>Fours</div>
        <Die :value="4" graphic inline />
        <div>= 4</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">
        <div>Fives</div>
        <Die :value="5" graphic inline />
        <div>= 5</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">
        <div>Sixes</div>
        <Die :value="6" graphic inline />
        <div>= 6</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">TOTAL SCORE</div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name column">
        35 POINT BONUS
        <small>For total score 63 or more</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">TOTAL</div>
      <div class="score-amount">0</div>
    </div>
  </div>
  <h3>Lower Section</h3>
  <div class="score-section">
    <div class="score-row">
      <div class="score-name">
        <div>3 of a kind</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">
        <div>4 of a kind</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">
        <div>Full House</div>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name column">
        <div>Small Straight</div>
        <small>Sequence of 4</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name column">
        <div>Large Straight</div>
        <small>Sequence of 5</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name column">
        <div>YAHTZEE</div>
        <small>5 of a kind</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">Chance</div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">YAHTZEE BONUS</div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name column">
        TOTAL
        <small>of Lower Section</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name column">
        TOTAL
        <small>of Upper Section</small>
      </div>
      <div class="score-amount">0</div>
    </div>
    <div class="score-row">
      <div class="score-name">GRAND TOTAL</div>
      <div class="score-amount">0</div>
    </div>
  </div>
</template>

<script setup>
import Die from './Die.vue'
</script>
