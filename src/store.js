import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game: {
      code: '2ba21',
      players: [
        { number: 0, name: 'Raphael Aleixo', points: 0 }, { number: 1, name: 'Paula Neves', points: 12 },
      ],
      round: 0,
      started: true,
    },
    round: {
      step: 0,
      clue: 'Inspiration',
      cards: [3, 15, 33],
      votes: [2, null],
    },
    defs: {
      playerColors: ['rgba(38, 190, 172)', 'rgba(234, 124, 223)'],
    },
  },
  getters: {
    activePlayer(state) {
      return state.game.round % state.game.players.length;
    },
  },
  mutations: {

  },
  actions: {

  },
});
