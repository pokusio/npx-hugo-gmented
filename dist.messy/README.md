## The `Hugo Gmented` `npx` module

## Usage


```bash

# sudo npm i -g

npm i -g

npx hugo-gmented





# ---
#  List all hugo-gmented themes from registry git@github.com:pokusio/hugo-gmented-registry.git
#  Registry 's GIT URI is set to git@github.com:pokusio/hugo-gmented-registry.git by default
#  It may use Github OAuth / Gitlab Oauth / Gitea Oauth uses
# ---
#
npx hugo-gmented theme list

# ---
#  Create the new website project
# ---
# npx hugo-gmented ${WEBSITE_PROJECT_NAME} ${HUGO_THEME_GIT_URI}
npx hugo-gmented create ${WEBSITE_PROJECT_NAME} ${HUGO_GMENTED_THEME_ID}


```


## Contribute

### Dev Mode : Run it


```bash

# sudo npm i -g

npm i -g

npx hugo-gmented

```


## TypeScript Keep In Mind

![TypeScript Conifiguration Keep In Mind](./documentation/stack/typescript/images/definitive-typescript-configuration.drawio.png)

## References

* https://blog.shahednasser.com/how-to-create-a-npx-tool/ :
  * this reference is extremely simple, and does not satisfy me :
    * I want to code in typescript
    * I want to use `dotenv` library to manage environement variables
    * i want to use
