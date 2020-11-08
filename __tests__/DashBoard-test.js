import 'react-native';
import React from 'react';
import DashBoard from '../src/screens/DashBoard';
import renderer from 'react-test-renderer';

it('DashBoard Test', () => {
    let DashBoardData = renderer.create(<DashBoard />).toJSON();;
    expect(DashBoardData).toMatchSnapshot();

});
