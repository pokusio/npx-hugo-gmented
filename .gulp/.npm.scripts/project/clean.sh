#!/bin/bash


# # + # #
# # + # # A bit of project clean up, just keeping src/ source code folder
# # + # #

if [ -d node_modules/ ]; then
  rm -fr node_modules/
fi;

if [ -d bin/ ]; then
  rm -fr bin/
fi;

# if [ -f ./package.json ]; then
#   rm package.json
# fi;

if [ -f ./package-lock.json ]; then
  rm package-lock.json
fi;

if [ -f ./tsconfig.json ]; then
  rm tsconfig.json
fi;
