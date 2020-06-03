import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'modern-css-reset'; // Good old css reset, courtesy of Andy Bell -> https://github.com/hankchizljaw/modern-css-reset

import { App } from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

$if(use_snowpack.truthy)$
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
$endif$