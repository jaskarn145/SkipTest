//this test is made for checking the searchbar in dashboard component is defined or not / 

import 'react-native';
import React from 'react';
import DashBoard from '../src/screens/DashBoard';
import renderer from 'react-test-renderer';

const findSearchInput = (tree, element) => {
    let result = undefined;
    for (Node in tree.children) {
        if (tree.children[Node].props.testID == element) {
            result = true;
        }
    }
    return result;
}

it('Find Search input', () => {
    const DashBoardData = renderer.create(<DashBoard />).toJSON();
    expect(findSearchInput(DashBoardData, 'SearchBar')).toBeDefined();

});
