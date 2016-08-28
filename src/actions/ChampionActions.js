import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ChampionConstants from '../constants/ChampionConstants.js';

class ChampionActions {
  filter(text) {
    AppDispatcher.dispatch({
      actionType: ChampionConstants.ActionType.Filter,
      text,
    });
  }
}

export default new ChampionActions();
