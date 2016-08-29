import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';
import ChampionSummary from '../../src/components/ChampionSummary.jsx';
import ChampionStatus from '../../src/components/ChampionStatus.jsx';
import champion from '../../assets/data/ja_JP/champion.json';

describe('<ChampionSummary />', () => {
  it('should render <ChampionStatus /> component', () => {
    const wrapper = shallow(<ChampionSummary champion={champion.data.Aatrox} />);
    assert.equal(wrapper.find(ChampionStatus).length, 1);
  });
});
