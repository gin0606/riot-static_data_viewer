import AppDispatcher from '../dispatcher/AppDispatcher.js';

class ChampionActions {
  filter(text) {
    AppDispatcher.dispatch({
      actionType: 'CHAMPION_FILTER',
      text,
    });
  }
}

export default new ChampionActions();
