#!/bin/bash


npm uninstall --save-dev typescript
npm uninstall --save-dev @types/node
npm uninstall --save-dev @types/node
npm uninstall --save-dev gulpclass
npm uninstall --save-dev dev
npm uninstall --save-dev @types/del
npm uninstall --global gulp-cli@^${GULP_VERSION}
npm uninstall --save-dev gulp
npm uninstall --save-dev @types/gulp
npm uninstall --save-dev gulp-util
npm uninstall --save-dev @types/gulp-util

# --- eslint / prettier
npm uninstall eslint --save-dev
npm uninstall @typescript-eslint/parser --save-dev
npm uni @typescript-eslint/eslint-plugin --save-dev
npm uninstall prettier --save-dev
npm uninstall eslint-config-prettier --save-dev
npm uninstall eslint-plugin-prettier --save-dev

if [ -d node_modules/ ]; then
  rm -fr node_modules/
fi;


if [ -f ./.eslintrc.yaml ]; then
  rm -f ./.eslintrc.yaml
fi;


if [ -f ./.prettierrc.yaml ]; then
  rm -f ./.prettierrc.yaml
fi;
