import React from 'react';
import renderer from 'react-test-renderer';
import {Arc} from '../../../src/components/Arc';

describe('Arc', () => {
  test('Should render tree of snapshot test in component', () => {
    const tree = renderer.create(<Arc content="content" />);

    expect(tree).toMatchSnapshot();
  });
});
