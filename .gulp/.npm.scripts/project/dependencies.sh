#!/bin/bash

# - # - #
# - # - # # - # - #
# - # - # # --- TYPESCRIPT
# - # - # # - # - #
# - # - #




# # + # #
# # + # #
# # + # #
export TS_VERSION="4.7.2"
# npm uninstall --save-dev typescript
# # - # # npm i --save-dev typescript
npm i --save-dev typescript@^${TS_VERSION}


# # + # #
# # + # #
# # + # #
export TYPES_NODE_VERSION="17.0.39"
# npm uninstall --save-dev @types/node
# # - # # npm i --save-dev @types/node
npm i --save-dev @types/node@^${TYPES_NODE_VERSION}


# # + # #
# # + # #
# # + # #
export TS_NODE_VERSION="10.8.0"
# npm uninstall --save-dev @types/node
# # - # # npm i --save-dev @types/node
npm i --save-dev ts-node@^${TS_NODE_VERSION}




# - # - #
# - # - # # - # - #
# - # - # # --- ESLINT / PRETTIER
# - # - # # - # - #
# - # - #







# # + # #
# # + # #
# # + # #
export ESLINT_VERSION="8.17.0"
# npm uninstall --save-dev eslint
# # - # # npm i --save-dev eslint
npm i --save-dev eslint@^${ESLINT_VERSION}

# # + # #
# # + # #
# # + # #
export TS_ESLINT_PARSER_VERSION="5.27.0"
# npm uninstall --save-dev @typescript-eslint/parser
# # - # # npm i --save-dev @typescript-eslint/parser
npm i --save-dev @typescript-eslint/parser@^${TS_ESLINT_PARSER_VERSION}

# # + # #
# # + # #
# # + # #
export TS_ESLINT_PLUGIN_VERSION="5.27.0"
# npm uninstall --save-dev @typescript-eslint/eslint-plugin
# # - # # npm i --save-dev @typescript-eslint/eslint-plugin
npm i --save-dev @typescript-eslint/eslint-plugin@^${TS_ESLINT_PLUGIN_VERSION}

# # + # #
# # + # #
# # + # #
export PRETTIER_VERSION="2.6.2"
# npm uninstall --save-dev prettier
# # - # # npm i --save-dev prettier
npm i --save-dev prettier@^${PRETTIER_VERSION}

# # + # #
# # + # #
# # + # #
export ESLINT_CONFIG_PRETTIER_VERSION="8.5.0"
# npm uninstall --save-dev eslint-config-prettier
# # - # # npm i --save-dev eslint-config-prettier
npm i --save-dev eslint-config-prettier@^${ESLINT_CONFIG_PRETTIER_VERSION}


# # + # #
# # + # #
# # + # #
export ESLINT_PLUGIN_PRETTIER_VERSION="4.0.0"
# npm uninstall --save-dev eslint-plugin-prettier
# # - # # npm i --save-dev eslint-plugin-prettier
npm i --save-dev eslint-plugin-prettier@^${ESLINT_PLUGIN_PRETTIER_VERSION}






if [ -f ./.eslintrc.yaml ]; then
  rm -f ./.eslintrc.yaml
fi;


if [ -f ./.prettierrc.yaml ]; then
  rm -f ./.prettierrc.yaml
fi;

cat <<EOF>./.eslintrc.yaml
env:
  node: true
extends:
  - plugin:@typescript-eslint/recommended
  - prettier/@typescript-eslint
  - plugin:prettier/recommended
parser: '@typescript-eslint/parser'
parserOptions:
  ecmaVersion: 9
  project: ./tsconfig.json
plugins:
 - '@typescript-eslint'
EOF

cat <<EOF>./.prettierrc.yaml
tabWidth: 2
singleQuote: true
EOF

# I don't want to lint generated javascript files, linting is for now just about linthing the typescript files only
cat <<EOF>./.eslintignore
bin/**/*
EOF


echo " >>>>  +++  >>>> +++++ "
echo " >>>> Pokus >>>> ESLINT / PRETTIER Configuration integration is now complete !!!!! "
echo " >>>>  +++  >>>> +++++ "







# - # - #
# - # - # # - # - #
# - # - # # --- GULP
# - # - # # - # - #
# - # - #




# # + # #
# # + # #
# # + # #
export GULP_CLASS_VERSION="0.2.0"
# npm uninstall --save-dev gulpclass
# # - # # npm i --save-dev gulpclass
npm i --save-dev gulpclass@^${GULP_CLASS_VERSION}


# # + # #
# # + # #
# # + # #
export DEL_VERSION="6.1.1"
# npm uninstall --save-dev dev
# # - # # npm i --save-dev dev
npm i --save-dev del@^${DEL_VERSION}


export DEL_TYPESDEF_VERSION=${DEL_TYPESDEF_VERSION:-"4.0.0"}
# npm uninstall --save-dev @types/del
# # - # # npm i --save-dev @types/del
npm i --save-dev @types/del@^${DEL_TYPESDEF_VERSION}



#  --  #  -  #  - # #  #  #  #  #  #  #  #  #  # #
#  --  #  -  #  - # #  #  #  #  #  #  #  #  #  # #
#  --  #  -  #  - # #  #  #  #  #  #  #  #  #  # #
# GULP #  -  #  - # $ gulp --version
# GULP #  -  #  - # CLI version: 2.3.0
# GULP #  -  #  - # Local version: 4.0.2
#  --  #  -  #  - # #  #  #  #  #  #  #  #  #  # #
#  --  #  -  #  - # #  #  #  #  #  #  #  #  #  # #
#
# # + # #
# # + # #   GULP CLI
# # + # #
export GULP_CLI_VERSION="2.3.0"
# # npm uninstall --global gulp-cli@^${GULP_VERSION}
# # - # # npm install --global gulp-cli
npm i --global gulp-cli@^${GULP_VERSION}


# # + # #
# # + # #  GULP
# # + # #
export GULP_VERSION="4.0.2"
# npm uninstall --save-dev gulp
# # - # # npm i --save-dev gulp
npm i --save-dev gulp@^${GULP_VERSION}

export GULP_TYPESDEF_VERSION=${GULP_TYPESDEF_VERSION:-"4.0.9"}
# npm uninstall --save-dev @types/gulp
# # - # # npm i --save-dev @types/gulp
npm i --save-dev @types/gulp@^${GULP_TYPESDEF_VERSION}

echo "# --------------------------------"
echo "check Gulp installed version : "
echo "# --------------------------------"
gulp --version
echo "# --------------------------------"

# # + # #
# # + # #  GULP-UTIL
# # + # #
#
export GULP_UTIL_VERSION=${GULP_UTIL_VERSION:-"3.0.8"}
# npm uninstall --save-dev gulp-util
# # - # # npm i --save-dev gulp-util
npm i --save-dev gulp-util@^${GULP_UTIL_VERSION}



export GULP_UTIL_TYPESDEF_VERSION=${GULP_UTIL_TYPESDEF_VERSION:-"3.0.36"}
# npm uninstall --save-dev @types/gulp-util
# # - # # npm i --save-dev @types/gulp-util
npm i --save-dev @types/gulp-util@^${GULP_UTIL_TYPESDEF_VERSION}
