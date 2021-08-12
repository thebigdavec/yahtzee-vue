import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      currentUser: 0,
      isScoring: false,
      users: [
        {
          name: 'Dave',
          scoreCard: {
            aces: {
              value: 5,
              isUsed: true
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
            yahtzeeBonuses: [0]
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
              value: 5,
              isUsed: true
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
            yahtzeeBonuses: [0]
          }
        }
      ],
      dice: []
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
      return 0
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
          break
        case 'twos':
          state.users[state.currentUser].scoreCard.twos.value = diceValues[1]
          state.users[state.currentUser].scoreCard.twos.isUsed = true
          break
        default:
          return
      }
    },
    SET_SCORING_TRUE(state) {
      state.isScoring = true
    }
  },
  actions: {
    NextPlayer({ commit, state }) {
      let nextPlayer = (state.currentUser + 1) % state.users.length
      commit('SET_CURRENT_USER', nextPlayer)
    },
    SetScore({ commit, state }, { id, dice }) {
      const diceValues = [0, 0, 0, 0, 0, 0]
      for (let i = 0; i < dice.length; i++) {
        diceValues[dice[i].die - 1]++
      }
      commit('SET_NEW_SCORE', { id, diceValues })
    },
    SetScoringTrue({ commit }) {
      commit('SET_SCORING_TRUE')
    }
  },
  modules: {}
})

export default store
