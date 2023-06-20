import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {GetStartedButton} from '../../../src/components/GetStartedButton';

describe('GetStartedButton', () => {
  test('Should render tree of snapshot test in component', () => {
    const tree = renderer.create(<GetStartedButton title="title" />);

    expect(tree).toMatchSnapshot();
  });

  test('Fire event should be shot', () => {
    const handlePress = jest.fn();

    const tree = render(
      <GetStartedButton title="title" onPress={handlePress} />,
    );

    const button = tree.getByText('title');

    fireEvent.press(button);

    expect(handlePress).toBeCalled();
  });
});
