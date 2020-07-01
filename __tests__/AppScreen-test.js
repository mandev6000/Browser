/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppScreen from '../AppScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AppScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
