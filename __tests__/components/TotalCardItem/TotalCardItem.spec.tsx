import React from 'react';
import renderer from 'react-test-renderer';
import {TotalCardItem} from '../../../src/components/TotalCardItem';

describe('TotalCardItem', () => {
  test('Should render tree of snapshot test in component', () => {
    const tree = renderer.create(
      <TotalCardItem description="description" title="title" />,
    );

    expect(tree).toMatchSnapshot();
  });
});
