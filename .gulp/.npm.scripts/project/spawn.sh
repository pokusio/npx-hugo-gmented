#!/bin/bash

# --- >>
# --- >>
# --->>> Generating the package.json should be done by your own means (example script below) :
#   echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
#   echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
#   echo "# -- # -- # -- # -- GENERATE [package.json] -- "
#   echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
#   echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
#
#   mkdir hugo-gmented-gulp/
#   cd hugo-gmented-gulp/
#   npm init --yes
#   cp ./package.json ../
#   cd ../
#   rm -fr hugo-gmented-gulp/



echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- # -- # -- # -- GENERATE [tsconfig.json] -- "
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
echo "# -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- # -- #"
# ---
# npx tsc --init --rootDir ./.gulp/src --outFile ./.gulp/bin/gulpfile.js \
#   --target "commonjs" --module "commonjs" --moduleResolution node \
#   --strict true --alwaysStrict true --allowJs true --noImplicitAny true --experimentalDecorators true \
#   --esModuleInterop true --resolveJsonModule true
# ---
#
# ---
# The [ "strict": true, ] , will be set to true by default in [tsconfig.json]
# The [ // "alwaysStrict": true ] , is left to its default value
# ---
#  "strict": true,                                      /* Enable all strict type-checking options. */
#  // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
# ---
#

npx tsc --init --rootDir ./src/ --outDir ./bin/ \
 --target "es2022" --module "commonjs" --moduleResolution nodenext \
 --noImplicitAny true --experimentalDecorators true \
 --esModuleInterop true --resolveJsonModule true
