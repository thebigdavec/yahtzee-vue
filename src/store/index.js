import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      currentUser: 0,
      isScoring: false,
      turnsRemaining: 2,
      gameOver: false,
      users: [
        {
          name: 'Dave',
          scoreCard: {
            aces: {
              value: 0,
              isUsed: false
            },
            twos: {
              value: 0,
              isUsed: false
            },
            threes: {
              value: 0,
              isUsed: false
            },
            fours: {
              value: 0,
              isUsed: false
            },
            fives: {
              value: 0,
              isUsed: false
            },
            sixes: {
              value: 0,
              isUsed: false
            },
            threeOfAKind: {
              value: 0,
              isUsed: false
            },
            fourOfAKind: {
              value: 0,
              isUsed: false
            },
            fullHouse: {
              value: 0,
              isUsed: false
            },
            smStraight: {
              value: 0,
              isUsed: false
            },
            lgStraight: {
              value: 0,
              isUsed: false
            },
            yahtzee: {
              value: 0,
              isUsed: false
            },
            chance: {
              value: 0,
              isUsed: false
            },
            yahtzeeBonus: 0
          }
        },
        {
          name: 'Chris',
          scoreCard: {
            aces: {
              value: 0,
              isUsed: false
            },
            twos: {
              value: 0,
              isUsed: false
            },
            threes: {
              value: 0,
              isUsed: false
            },
            fours: {
              value: 0,
              isUsed: false
            },
            fives: {
              value: 0,
              isUsed: false
            },
            sixes: {
              value: 0,
              isUsed: false
            },
            threeOfAKind: {
              value: 0,
              isUsed: false
            },
            fourOfAKind: {
              value: 0,
              isUsed: false
            },
            fullHouse: {
              value: 0,
              isUsed: false
            },
            smStraight: {
              value: 0,
              isUsed: false
            },
            lgStraight: {
              value: 0,
              isUsed: false
            },
            yahtzee: {
              value: 0,
              isUsed: false
            },
            chance: {
              value: 0,
              isUsed: false
            },
            yahtzeeBonus: 0
          }
        }
      ]
    }
  },
  getters: {
    currentUserName(state) {
      return state.users[state.currentUser].name
    },
    currentUserNamePossessive(state) {
      const name = state.users[store.state.currentUser].name
      return (
        name + "'" + (name[name.length - 1].toLowerCase() === 's' ? '' : 's')
      )
    },
    aces(state) {
      return state.users[state.currentUser].scoreCard.aces.value
    },
    twos(state) {
      return state.users[state.currentUser].scoreCard.twos.value * 2
    },
    threes(state) {
      return state.users[state.currentUser].scoreCard.threes.value * 3
    },
    fours(state) {
      return state.users[state.currentUser].scoreCard.fours.value * 4
    },
    fives(state) {
      return state.users[state.currentUser].scoreCard.fives.value * 5
    },
    sixes(state) {
      return state.users[state.currentUser].scoreCard.sixes.value * 6
    },
    threeOfAKind(state) {
      return state.users[state.currentUser].scoreCard.threeOfAKind.value
    },
    fourOfAKind(state) {
      return state.users[state.currentUser].scoreCard.fourOfAKind.value
    },
    fullHouse(state) {
      return state.users[state.currentUser].scoreCard.fullHouse.value
    },
    smStraight(state) {
      return state.users[state.currentUser].scoreCard.smStraight.value
    },
    lgStraight(state) {
      return state.users[state.currentUser].scoreCard.lgStraight.value
    },
    yahtzee(state) {
      return state.users[state.currentUser].scoreCard.yahtzee.value
    },
    chance(state) {
      return state.users[state.currentUser].scoreCard.chance.value
    },
    yahtzeeBonus(state) {
      return state.users[state.currentUser].scoreCard.yahtzeeBonus
    },
    acesUsed(state) {
      return state.users[state.currentUser].scoreCard.aces.isUsed
    },
    twosUsed(state) {
      return state.users[state.currentUser].scoreCard.twos.isUsed
    },
    threesUsed(state) {
      return state.users[state.currentUser].scoreCard.threes.isUsed
    },
    foursUsed(state) {
      return state.users[state.currentUser].scoreCard.fours.isUsed
    },
    fivesUsed(state) {
      return state.users[state.currentUser].scoreCard.fives.isUsed
    },
    sixesUsed(state) {
      return state.users[state.currentUser].scoreCard.sixes.isUsed
    },
    threeOfAKindUsed(state) {
      return state.users[state.currentUser].scoreCard.threeOfAKind.isUsed
    },
    fourOfAKindUsed(state) {
      return state.users[state.currentUser].scoreCard.fourOfAKind.isUsed
    },
    fullHouseUsed(state) {
      return state.users[state.currentUser].scoreCard.fullHouse.isUsed
    },
    smStraightUsed(state) {
      return state.users[state.currentUser].scoreCard.smStraight.isUsed
    },
    lgStraightUsed(state) {
      return state.users[state.currentUser].scoreCard.lgStraight.isUsed
    },
    yahtzeeUsed(state) {
      return state.users[state.currentUser].scoreCard.yahtzee.isUsed
    },
    chanceUsed(state) {
      return state.users[state.currentUser].scoreCard.chance.isUsed
    },
    upperTotal(state) {
      const total =
        state.users[state.currentUser].scoreCard.aces.value +
        state.users[state.currentUser].scoreCard.twos.value * 2 +
        state.users[state.currentUser].scoreCard.threes.value * 3 +
        state.users[state.currentUser].scoreCard.fours.value * 4 +
        state.users[state.currentUser].scoreCard.fives.value * 5 +
        state.users[state.currentUser].scoreCard.sixes.value * 6
      return total
    },
    bonus35(state) {
      const total =
        state.users[state.currentUser].scoreCard.aces.value +
        state.users[state.currentUser].scoreCard.twos.value * 2 +
        state.users[state.currentUser].scoreCard.threes.value * 3 +
        state.users[state.currentUser].scoreCard.fours.value * 4 +
        state.users[state.currentUser].scoreCard.fives.value * 5 +
        state.users[state.currentUser].scoreCard.sixes.value * 6
      if (total >= 63) return 35
      return 0
    },
    lowerTotal(state) {
      const total =
        state.users[state.currentUser].scoreCard.threeOfAKind.value +
        state.users[state.currentUser].scoreCard.fourOfAKind.value +
        state.users[state.currentUser].scoreCard.fullHouse.value +
        state.users[state.currentUser].scoreCard.smStraight.value +
        state.users[state.currentUser].scoreCard.lgStraight.value +
        state.users[state.currentUser].scoreCard.yahtzee.value +
        state.users[state.currentUser].scoreCard.chance.value +
        state.users[state.currentUser].scoreCard.yahtzeeBonus * 100
      return total
    },
    numberOfPlayers(state) {
      return state.users.length
    }
  },
  mutations: {
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload
    },
    SET_NEW_SCORE(state, { id, diceValues }) {
      state.isScoring = false
      switch (id) {
        case 'aces':
          state.users[state.currentUser].scoreCard.aces.value = diceValues[0]
          state.users[state.currentUser].scoreCard.aces.isUsed = true
          break
        case 'twos':
          state.users[state.currentUser].scoreCard.twos.value = diceValues[1]
          state.users[state.currentUser].scoreCard.twos.isUsed = true
          break
        case 'threes':
          state.users[state.currentUser].scoreCard.threes.value = diceValues[2]
          state.users[state.currentUser].scoreCard.threes.isUsed = true
          break
        case 'fours':
          state.users[state.currentUser].scoreCard.fours.value = diceValues[3]
          state.users[state.currentUser].scoreCard.fours.isUsed = true
          break
        case 'fives':
          state.users[state.currentUser].scoreCard.fives.value = diceValues[4]
          state.users[state.currentUser].scoreCard.fives.isUsed = true
          break
        case 'sixes':
          state.users[state.currentUser].scoreCard.sixes.value = diceValues[5]
          state.users[state.currentUser].scoreCard.sixes.isUsed = true
          break
        case 'threeOfAKind':
          const thereAreThreeSameDice = diceValues.filter(dieVal => dieVal >= 3)
          if (thereAreThreeSameDice.length) {
            state.users[state.currentUser].scoreCard.threeOfAKind.value =
              diceValues[0] +
              diceValues[1] * 2 +
              diceValues[2] * 3 +
              diceValues[3] * 4 +
              diceValues[4] * 5 +
              diceValues[5] * 6
          } else {
            state.users[state.currentUser].scoreCard.threeOfAKind.value = 0
          }
          state.users[state.currentUser].scoreCard.threeOfAKind.isUsed = true
          break
        case 'fourOfAKind':
          const thereAreFourSameDice = diceValues.filter(dieVal => dieVal >= 4)
          if (thereAreFourSameDice.length) {
            state.users[state.currentUser].scoreCard.fourOfAKind.value =
              diceValues[0] +
              diceValues[1] * 2 +
              diceValues[2] * 3 +
              diceValues[3] * 4 +
              diceValues[4] * 5 +
              diceValues[5] * 6
          } else {
            state.users[state.currentUser].scoreCard.fourOfAKind.value = 0
          }
          state.users[state.currentUser].scoreCard.fourOfAKind.isUsed = true
          break
        case 'fullHouse':
          const checkForFullHouse = diceValues.filter(
            dieVal => dieVal === 2 || dieVal === 3
          )
          if (
            checkForFullHouse.length === 2 &&
            checkForFullHouse[0] + checkForFullHouse[1] === 5
          ) {
            state.users[state.currentUser].scoreCard.fullHouse.value = 25
          } else {
            state.users[state.currentUser].scoreCard.fullHouse.value = 0
          }
          state.users[state.currentUser].scoreCard.fullHouse.isUsed = true
          break
        case 'smStraight':
          const diceExistListSm = diceValues.map(dieVal => dieVal !== 0)
          if (
            (diceExistListSm[0] &&
              diceExistListSm[1] &&
              diceExistListSm[2] &&
              diceExistListSm[3]) ||
            (diceExistListSm[1] &&
              diceExistListSm[2] &&
              diceExistListSm[3] &&
              diceExistListSm[4]) ||
            (diceExistListSm[2] &&
              diceExistListSm[3] &&
              diceExistListSm[4] &&
              diceExistListSm[5])
          ) {
            state.users[state.currentUser].scoreCard.smStraight.value = 30
          } else {
            state.users[state.currentUser].scoreCard.smStraight.value = 0
          }
          state.users[state.currentUser].scoreCard.smStraight.isUsed = true
          break
        case 'lgStraight':
          const diceExistListLg = diceValues.map(dieVal => dieVal !== 0)
          if (
            (diceExistListLg[0] &&
              diceExistListLg[1] &&
              diceExistListLg[2] &&
              diceExistListLg[3] &&
              diceExistListLg[4]) ||
            (diceExistListLg[1] &&
              diceExistListLg[2] &&
              diceExistListLg[3] &&
              diceExistListLg[4] &&
              diceExistListLg[5])
          ) {
            state.users[state.currentUser].scoreCard.lgStraight.value = 40
          } else {
            state.users[state.currentUser].scoreCard.lgStraight.value = 0
          }
          state.users[state.currentUser].scoreCard.lgStraight.isUsed = true
          break
        case 'yahtzee':
          const checkYahtzee = diceValues.find(dieVal => dieVal === 5)
          if (checkYahtzee) {
            state.users[state.currentUser].scoreCard.yahtzee.value = 50
          } else {
            state.users[state.currentUser].scoreCard.yahtzee.value = 0
          }
          state.users[state.currentUser].scoreCard.yahtzee.isUsed = true
          break
        case 'chance':
          state.users[state.currentUser].scoreCard.chance.value =
            diceValues[0] +
            diceValues[1] * 2 +
            diceValues[2] * 3 +
            diceValues[3] * 4 +
            diceValues[4] * 5 +
            diceValues[5] * 6
          state.users[state.currentUser].scoreCard.chance.isUsed = true
          break
        default:
          return
      }
    },
    ADD_YAHTZEE_BONUS(state) {
      state.users[state.currentUser].scoreCard.yahtzeeBonus++
    },
    SET_SCORING(state, payload) {
      state.isScoring = payload
    },
    DECREASE_TURN_COUNTER(state) {
      state.turnsRemaining--
    },
    SET_GAME_OVER(state, payload) {
      state.gameOver = payload
    },
    RESET_TURN_COUNTER(state) {
      state.turnsRemaining = 12
    },
    RESET_USER_SCORES(state, user) {
      state.users[user].scoreCard.aces.value = 0
      state.users[user].scoreCard.twos.value = 0
      state.users[user].scoreCard.threes.value = 0
      state.users[user].scoreCard.fours.value = 0
      state.users[user].scoreCard.fives.value = 0
      state.users[user].scoreCard.sixes.value = 0
      state.users[user].scoreCard.threeOfAKind.value = 0
      state.users[user].scoreCard.fourOfAKind.value = 0
      state.users[user].scoreCard.fullHouse.value = 0
      state.users[user].scoreCard.smStraight.value = 0
      state.users[user].scoreCard.lgStraight.value = 0
      state.users[user].scoreCard.yahtzee.value = 0
      state.users[user].scoreCard.chance.value = 0
      state.users[user].scoreCard.aces.isUsed = false
      state.users[user].scoreCard.twos.isUsed = false
      state.users[user].scoreCard.threes.isUsed = false
      state.users[user].scoreCard.fours.isUsed = false
      state.users[user].scoreCard.fives.isUsed = false
      state.users[user].scoreCard.sixes.isUsed = false
      state.users[user].scoreCard.threeOfAKind.isUsed = false
      state.users[user].scoreCard.fourOfAKind.isUsed = false
      state.users[user].scoreCard.fullHouse.isUsed = false
      state.users[user].scoreCard.smStraight.isUsed = false
      state.users[user].scoreCard.lgStraight.isUsed = false
      state.users[user].scoreCard.yahtzee.isUsed = false
      state.users[user].scoreCard.chance.isUsed = false
      state.users[user].scoreCard.yahtzeeBonus = 0
    }
  },
  actions: {
    gameReset({ commit, state }) {
      commit('RESET_TURN_COUNTER')
      commit('SET_GAME_OVER', false)
      for (let i = 0; i < state.users.length; i++) {
        commit('RESET_USER_SCORES', i)
      }
      commit('SET_CURRENT_USER', 0), commit('SET_SCORING', false)
    },
    NextPlayer({ commit, state }) {
      let nextPlayer = (state.currentUser + 1) % state.users.length
      commit('SET_CURRENT_USER', nextPlayer)
      if (nextPlayer === 0) {
        commit('DECREASE_TURN_COUNTER')
      }
    },
    setGameOver({ commit, state }, payload) {
      commit('SET_GAME_OVER', payload)
    },
    SetScore({ commit, state }, { id, dice }) {
      const diceValues = [0, 0, 0, 0, 0, 0]
      for (let i = 0; i < dice.length; i++) {
        diceValues[dice[i].die - 1]++
      }
      const checkYahtzee = diceValues.find(dieVal => dieVal === 5)
      console.log('Auto check for yahtzee:', checkYahtzee)
      if (
        checkYahtzee &&
        state.users[state.currentUser].scoreCard.yahtzee.value === 50
      ) {
        commit('ADD_YAHTZEE_BONUS')
      }
      commit('SET_NEW_SCORE', { id, diceValues })
    },
    SetScoringTrue({ commit }) {
      commit('SET_SCORING', true)
    }
  },
  modules: {}
})

export default store
