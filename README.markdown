A [Giter8][g8] template for a React application with Typescript support.

## Usage

Create it using g8, by running:

`g8 ddanielbee/typescript-react.g8`

Follow the CLI prompts and afterwards:

### With Yarn

`cd <project-name> && yarn`

Once node dependencies are installed, you can start the project's development server with `yarn dev` or `yarn dev:all`. In `localhost:8080` you'll find a more detailed description of the template.

## With NPM

`cd <project-name> && rm yarn.lock`

It's important to remove yarn.lock, since it won't be necessary when using npm. Afterwards:

`npm install`

This will install dependencies, and create a `package-json.lock` file, which is the npm equivalent to the `yarn.lock` file.

Once node dependencies are installed, you can start the project's development server with `npm run dev`. In `localhost:8080` you'll find a more detailed description of the template.

### Note:

The npm script `npm run dev:all` won't work out of the box when using npm. To fix this, replace `yarn` by `npm run` in the script inside `package.json`.

## Template license

Written in 2020 by Daniel Bolivar

To the extent possible under law, the author(s) have dedicated all copyright and related
and neighboring rights to this template to the public domain worldwide.
This template is distributed without any warranty. See <http://creativecommons.org/publicdomain/zero/1.0/>.

[g8]: http://www.foundweekends.org/giter8/
