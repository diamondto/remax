import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Canvas from '../../hostComponents/Canvas';

describe('Canvas', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Canvas />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
