import assert from 'assert';
import Dispatcher from '../../src/dispatcher/AppDispatcher.js';
import ChampionActions from '../../src/actions/ChampionActions.js';
import ChampionConstants from '../../src/constants/ChampionConstants.js';

describe('ChampionActions', () => {
  describe('#filter', () => {
    let token;

    afterEach(() => {
      Dispatcher.unregister(token);
    });

    it('should dispatch ActionType.Filter action', (done) => {
      token = Dispatcher.register((payload) => {
        assert.equal(payload.actionType, ChampionConstants.ActionType.Filter);
        done();
      });
      ChampionActions.filter('text');
    });

    it('should dispatch action with text', (done) => {
      token = Dispatcher.register((payload) => {
        assert.equal(payload.text, 'text');
        done();
      });
      ChampionActions.filter('text');
    });
  });
});
