import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import champion from '../../assets/data/ja_JP/champion.json';

const CHANGE_EVENT = 'change';

class ChampionStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.actionHandler.bind(this));

    this.champions = champion.data;
  }

  actionHandler(action) {
    switch (action.actionType) {
      case 'CHAMPION_FILTER':
        this.champions = {};
        Object.keys(champion.data).forEach((name) => {
          if (name.toLowerCase().indexOf(action.text.toLowerCase()) < 0) { return; }
          this.champions[name] = champion.data[name];
        });
        this.emitChange();
        break;
      default:
    }
  }

  getDataVersion() {
    return champion.version;
  }

  getAll() {
    return this.champions;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default new ChampionStore();
