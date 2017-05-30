import React from 'react';
import { shallow } from 'enzyme';
import BaseContainer from './BaseContainer';

it('Should renders without crashing', () => {
    const BaseContainer = shallow( < BaseContainer / > );
    expect(BaseContainer.find('h2').length).toEqual(1);
});
