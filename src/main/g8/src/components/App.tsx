import * as React from 'react';
import styles from './app.module.css';

export const App: React.FunctionComponent = () => (
  <main>
    <h1>
      Welcome to the Typescript - React <a href="https://github.com/foundweekends/giter8">giter8</a>{' '}
      starter! This is your main entrypoint.
    </h1>
    <h2>It comes with:</h2>
    <ul>
      <li>
        <span>Typescript</span>
      </li>
      <li>
        <span>React</span>
      </li>
      <li>
        <span>
          Eslint configured with{' '}
          <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">
            airbnb defaults
          </a>
          ,{' '}
          <a href="https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks">
            react hooks
          </a>{' '}
          & <a href="https://prettier.io/docs/en/integrating-with-linters.html">prettier</a>
        </span>
      </li>
      <li>
        $if(use_snowpack.truthy)$
        <span>
          Snowpack for building your app.
        </span>
        $else$
        <span>
          Webpack with dev server (yarn dev).
        </span>
        $endif$
      </li>
      <li>
        <span>
          <a href="https://jestjs.io/">Jest</a> &{' '}
          <a href="https://github.com/testing-library/react-testing-library">
            React-testing-library
          </a>{' '}
          (with <a href="https://github.com/testing-library/jest-dom">testing-library-jest-dom</a>)
          for testing
        </span>
      </li>
      <li>
        <span>
          CSS Modules as can be seen by this very styled{' '}
          <span className={styles['cyan-text']}>piece of text. </span>
           $if(use_snowpack.truthy)$
           CSS module type declarations can be emitted using{' '}
          <a href="https://github.com/Quramy/typed-css-modules">
            Typed CSS Modules.
          </a>
          Snowpack will take care of it during development and building of your app when using the yarn script start:all
           $else$
          CSS module type declarations are also emitted on the fly by webpack using{' '}
          <a href="https://github.com/seek-oss/css-modules-typescript-loader">
            CSS Modules Typescript Loader
          </a>
           $endif$
        </span>
      </li>
    </ul>
    <h2>Npm scripts:</h2>
    <ul>
      <li>
        <span>
          <b>test =&gt;</b> Runs jest once
        </span>
      </li>
      <li>
        <span>
          <b>test:watch =&gt;</b> Runs jest in watch mode. Only works if on a git project.
        </span>
      </li>
      <li>
        <span>
          <b>test:coverage =&gt;</b> Runs once with coverage.
        </span>
      </li>
      <li>
        <span>
          <b>lint =&gt;</b> Runs eslint.
        </span>
      </li>
      <li>
        <span>
          <b>start =&gt;</b> Starts a $if(use_snowpack.truthy)$snowpack$else$webpack$endif$ dev server at port 8080 of localhost.
        </span>
      </li>
      <li>
        <span>
          <b>build =&gt;</b> Builds a production bundle with $if(use_snowpack.truthy)$snowpack and webpack$else$webpack$endif$.
        </span>
      </li>
      <li>
        <span>
          <b>typecheck =&gt;</b> Runs tsc to check on your types.
        </span>
      </li>
      <li>
        <span>
          <b>typecheck:watch =&gt;</b> Runs tsc in watch mode.
        </span>
      </li>
      <li>
        <span>
          <b>start:all =&gt;</b> Runs $if(use_snowpack.truthy)$snowpack's dev server, typed css modules on watch mode$else$webpack-dev-server$endif$ &amp; tsc on watch mode in parallel.
        </span>
      </li>
    </ul>
  </main>
);
