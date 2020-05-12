import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('should render correctly', () => {
    expect(render(<App />).container).toMatchSnapshot();
  });
});
