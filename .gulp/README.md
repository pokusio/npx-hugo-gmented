## How to build this npm package


```bash
export DESISRED_VERSION="feature/init-npx-project"
git clone git@github.com:pokusio/npx-hugo-gmented.git
cd npx-hugo-gmented/
git checkout ${DESISRED_VERSION}

cd ./.gulp/
npm i
npm run dev

```


* How to publish npm package :

```bash
export DESISRED_VERSION="feature/init-npx-project"
git clone git@github.com:pokusio/npx-hugo-gmented.git
cd npx-hugo-gmented/
git checkout ${DESISRED_VERSION}

cd ./.gulp/

npm i
npm run dev

npm publish --access public
# ---
# I made a first test publish using an ACCES TOKEN in my  ~/.npmrc  file :
# it published https://www.npmjs.com/package/@pokusio/hugo-gmented-gulp
#  - I verified it is not the account linked to the jean.baptiste.lasselle@gmail.com
# ---
#   :~/hugo-gmented/npx-hugo-gmented/.gulp$ npm whoamipokusio
#   :~/hugo-gmented/npx-hugo-gmented/.gulp$ npm profile get
#   ┌─────────────────┬─────────────────────────────────────────┐
#   │ name            │ pokusio                                 │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ email           │ bumbebee.pokus.bot@gmail.com (verified) │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ two-factor auth │ disabled                                │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ fullname        │                                         │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ homepage        │                                         │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ freenode        │                                         │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ twitter         │                                         │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ github          │                                         │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ created         │ 2022-01-19T01:59:54.022Z                │
#   ├─────────────────┼─────────────────────────────────────────┤
#   │ updated         │ 2022-01-19T01:59:54.017Z                │
#   └─────────────────┴─────────────────────────────────────────┘

```
* I had there a big problem :
  * I still had a Token which worked in my `~/.npmrc`
  * But the verified email address I had configured in my profile did not exist anymore (I had deleted as a google account)
* But fortunately, there is a way to change the email address from the CLI, authenticating with the `~/.npmrc` :

```bash
:~/hugo-gmented/npx-hugo-gmented/.gulp$ npm profile set email bumblebee.pokus.bot@gmail.com
Set email to bumblebee.pokus.bot@gmail.com
:~/hugo-gmented/npx-hugo-gmented/.gulp$ npm profile get
┌─────────────────┬───────────────────────────────────────────┐
│ name            │ pokusio                                   │
├─────────────────┼───────────────────────────────────────────┤
│ email           │ bumblebee.pokus.bot@gmail.com(unverified) │
├─────────────────┼───────────────────────────────────────────┤
│ two-factor auth │ disabled                                  │
├─────────────────┼───────────────────────────────────────────┤
│ fullname        │                                           │
├─────────────────┼───────────────────────────────────────────┤
│ homepage        │                                           │
├─────────────────┼───────────────────────────────────────────┤
│ freenode        │                                           │
├─────────────────┼───────────────────────────────────────────┤
│ twitter         │                                           │
├─────────────────┼───────────────────────────────────────────┤
│ github          │                                           │
├─────────────────┼───────────────────────────────────────────┤
│ created         │ 2022-01-19T01:59:54.022Z                  │
├─────────────────┼───────────────────────────────────────────┤
│ updated         │ 2022-06-05T07:59:10.605Z                  │
└─────────────────┴───────────────────────────────────────────┘

```

* I finally requested from https://npmjs.com website a password reset for user `pokusio`, and there i received the password reset in my new email address, and from there could change to a new password, and login again with my `pokusio` user

* From the webui, I finally renamed my user `io-pokus`, turned `pokusio` into an organization, and then my Token in the `~/.npmrc` was no longer valid, so  i logged out and logged back in again using the new user name `io-pokus` :


```bash
:~/hugo-gmented/npx-hugo-gmented/.gulp$ npm logout
:~/hugo-gmented/npx-hugo-gmented/.gulp$ npm login
npm notice Log in on https://registry.npmjs.org/
Username: io-pokus
Password:
Email: (this IS public) bumblebee.pokus.bot@gmail.com
npm notice Please check your email for a one-time password (OTP)
Enter one-time password: 78212629
Logged in as io-pokus on https://registry.npmjs.org/.

```

And there I was back in business, rotating my secrets


## How to re-generate this project


```bash

# export WHERE_WE_REGENERATE_PROJECT="$(pwd)/lets-regen"
export WHERE_WE_REGENERATE_PROJECT=$(mktemp -d -t "WHERE_WE_REGENERATE_PROJECT_XXXXXX")
export WHERE_WE_RETRIEVE_PROJECT_ASSETS=$(mktemp -d -t "WHERE_WE_RETRIEVE_PROJECT_ASSETS_XXXXXX")

echo " Checks : WHERE_WE_REGENERATE_PROJECT=[${WHERE_WE_REGENERATE_PROJECT}]"
echo " Checks : WHERE_WE_RETRIEVE_PROJECT_ASSETS=[${WHERE_WE_RETRIEVE_PROJECT_ASSETS}]"
ls -alh ${WHERE_WE_REGENERATE_PROJECT}/
echo " >>>>>>>>>>>>>>>>>> "
ls -alh ${WHERE_WE_RETRIEVE_PROJECT_ASSETS}/




export DESISRED_VERSION="feature/init-npx-project"
export DESISRED_VERSION="0.0.0-alpha"
git clone git@github.com:pokusio/npx-hugo-gmented.git
cd ${WHERE_WE_RETRIEVE_PROJECT_ASSETS}
git checkout ${DESISRED_VERSION}

# retrieving files we need
cp ./.gulp/package.json ${WHERE_WE_REGENERATE_PROJECT}/
cp ./.gulp/package-lock.json ${WHERE_WE_REGENERATE_PROJECT}/
mkdir -p  ${WHERE_WE_REGENERATE_PROJECT}/.npm.scripts/
cp -fR ./.gulp/.npm.scripts/* ${WHERE_WE_REGENERATE_PROJECT}/.npm.scripts/
chmod +x ${WHERE_WE_REGENERATE_PROJECT}/.npm.scripts/project/*.sh



cd ${WHERE_WE_REGENERATE_PROJECT}/

# You install the dependencies
npm run gulp:project:dependencies:clean && npm run gulp:project:dependencies
# you just regenerate the whole project like this:
npm run gulp:project:scratch

# After that you can run the compiled Gulpfile :
npm run dev

```



## ESLint TypeScript configuration



## References

* https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/
* https://dev.to/caelinsutch/setting-up-a-typescript-nodejs-application-with-prettier-and-eslint-53jc
