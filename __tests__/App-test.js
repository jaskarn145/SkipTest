/**
 * @format
 * test to check the app component snapshot
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('App Test', () => {
  let AppTest = renderer.create(<App />).toJSON();;
  expect(AppTest).toMatchSnapshot();
});
