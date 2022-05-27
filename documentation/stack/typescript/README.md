# `TypeScript` Setup


I first began with an extremely simple project consisting of the project structure in the  `./documentation/stack/typescript/initial-code` Folder

From there, I wanted the ./bin/index.js to be compiled from `TypeScript`.


So I executed the following steps :

```bash
npm install --save-dev typescript @types/node

npx tsc --init --rootDir src --outDir bin



```


## Making sense of your `tsconfig.json` `TypeScript` configuration




### Dockie Tests First

To counter check the whole `TypeScript` Setup, independently from my bare metal machine, I used a Docker image.

I used a Docke Alpine in which I installed the whole stack, starting with `nodejs`.


```bash
docker exec -it testnode-alpine sh -c "apk update && apk add nodejs tree bash"
docker run -itd --restart always --name testnode-alpine alpine /bin/sh
docker exec -it testnode-alpine sh -c "pwd && ls -alh"
docker exec -it testnode-alpine sh -c "apk update && apk add nodejs && apk add --update npm"

docker exec -it testnode-alpine sh -c "node -v"
docker exec -it testnode-alpine sh -c "npm --version"
docker exec -it testnode-alpine sh -c "npx --version"

# Now let's create the nodejs/typescript project :

docker exec -it testnode-alpine sh -c "mkdir ./my-ts-project/"
docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && npm init --yes"
docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && npm i --save-dev typescript @types/node"
# below, just to confirm tsc is NOT installed globally
docker exec -it testnode-alpine sh -c "echo 'just to confirm tsc is NOT installed globally' && which node && which tsc && tsc --version"
docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && npx tsc --version"
docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && npx tsc --init --rootDir src --outDir bin"
docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && tree -alh -L 3"

docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && tree -alh -L 3"


```


Node that at the time this test was executed, I had the following stdout outputs :

```bash
~$ docker exec -it testnode-alpine sh -c "node -v"
v16.15.0
~$ docker exec -it testnode-alpine sh -c "npm --version"
8.10.0
~$ docker exec -it testnode-alpine sh -c "npx --version"
8.10.0
~$ docker exec -it testnode-alpine sh -c "echo 'just to confirm tsc is NOT installed globally' && which node && which tsc && tsc --version"
just to confirm tsc is NOT installed globally
/usr/bin/node
~$ docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && npx tsc --version"
Version 4.7.2

~$ docker exec -it testnode-alpine sh -c "cd ./my-ts-project/ && tree -alh -L 3"
[4.0K]  .
├── [4.0K]  node_modules
│   ├── [4.0K]  .bin
│   │   ├── [  21]  tsc -> ../typescript/bin/tsc
│   │   └── [  26]  tsserver -> ../typescript/bin/tsserver
│   ├── [ 823]  .package-lock.json
│   ├── [4.0K]  @types
│   │   └── [4.0K]  node
│   └── [4.0K]  typescript
│       ├── [8.3K]  AUTHORS.md
│       ├── [ 333]  CODE_OF_CONDUCT.md
│       ├── [ 812]  CopyrightNotice.txt
│       ├── [9.0K]  LICENSE.txt
│       ├── [5.2K]  README.md
│       ├── [2.7K]  SECURITY.md
│       ├── [ 37K]  ThirdPartyNoticeText.txt
│       ├── [4.0K]  bin
│       ├── [4.0K]  lib
│       ├── [4.0K]  loc
│       └── [3.8K]  package.json
├── [1.6K]  package-lock.json
├── [ 313]  package.json
└── [ 11K]  tsconfig.json

8 directories, 14 files

```


### It's now time to use our brain: the `tsconfig.json`

The `tsc` executable is the `TypeScript` compiler.

Any GNU Option of the `tsc` `TypeScript` compiler match a configuration option in the `tsconfig.json` file :
* For any `tsc` compiler Option, we can choose to specify the option value, either by using a GNU Option, or a configuration property in the `tsconfig.json`.
* To execute the `tsc` compiler command with as little GNU Options as possible, the `tsc --init` will persist all compiler GNU Options in the `tsconfig.json` file.

To generate the `tsconfig.json` of our `TypeScript` project, we are all used to run the `tsc --init` command.

The `tsc --init` command has numerous GNU Options, all of which allow to change the resulting content of the generated `tsconfig.json`. I will refer to those `tsc --init` command GNU Options, as _**the `TypeScript` configuration options**_

For example if we execute the `TypeScript` compiler :
* without the `tsc --init` GNU Option command.
* and with the `tsc --noEmit` GNU Options, we can compile the `TypeScript` code without generating the compiled `JavaScript` code:
  * So this useful for just checking that your source code compiles, without generating any file (makes the compilation checks faster)
  * Another interesting variant of the `tsc --noEmit` GNU Option, is the `tsc --noEmitOnError` GNU Option: If any compilatin Error, no files are generated


#### Achille

> _**Compiled or Interpreted**_

There are only 2 ways to execute a JavaScript Software on a given machine :
* **Compiled `JavaScript`** : Either we compile the JavaScript to machine native language, just like C language
* **Interpreted `JavaScript`** : Or the JavaScript code is interpreted by a JavaScript Runtime, which turns the JavaScript code into the target machine native language. Those Runtimes are multiple, an,d may use techniques such as "Just In Time" transforamtions, which aim at optimizing the runtime performances.

Today, a vast majority of the `JavaScript` softwares are executed as **Interpreted `JavaScript`** : through a Runtime, that transform JavaScript into the target machine native language.

I just want to mention that there exists context where **Compiled `JavaScript`** is absolutely awesome and extremely interesting. I have for example heard of people working in hardware reverse engineering, where the y use JavaScript to dump CPU data from JTAG (Awesome ! :D )

> _**JavaScript Core**_

Right, now, realize this :
* Imagine you are writing a software, which drives a robot.
* Iamgine that the programming language you are going to use, is called The `Achille` Languague (it's a hero language).
* Imagine this robot has 2 arms and 2 legs.
* What commands do you expect to find in this language?
* Well of course, you would expect to find the commands to move each of the legs, and each of the arms, (together, or one after the other, all sorts of combiantions, etc...), right ?
* I agree with you.

Ok, so you loooove Robotics, that's why you learned the `Achille` Languague. It took you efforts, you spent hours, daays, weeks, months to get to be an expert in this language, didn't you ?

And now you want to develop a software to work with another robot :
* This new Robot does not have arms, neither does it have arms, but instead it has rockets to fly, and wheels to roll on a raod. Its name is `Bumblebee`.
* Well, oh, the the `Achille` Languague, as you learned it, has commands to move arms and legs, but not to turn on/off rockets and tune its thrust power!
* Ouch ! You have to make a pull request in the Github repo of the Achille languague, to that is is able to turn on rockets, and tune its rocket thrust, etc...!
* What would such a PR look like ?
* Of course, the PR would not submit Achille language :
  * It would submit Assembly languague, that can be executed into the `Bumblebee` CPU,
  * to be able to turn on/off rockets, and control the wheels and the wheels gaz engine, etc...
* The new version of the Achille Language :
  * has now new commmands, to control wheels , wheels engine, and rockets
  * and it still has the commands to move arms, and legs
* But hey, Why would I use an Achille compiler that can compile legs or arms commands, when i work on Bumblebee that has no legs and no arms ? It really is unuseful thing, and we are excellent engineers, we always get rid of anything unuseful.
* Okay, so in the new version of Achille Language, i strip out the arm and legs commands.

Okay, now, my point is:
* if you change enough the Robot, you may end up with changing completely, 100% of all the Achille Language,
* So the 2 versions of the Achille language, have zero commands in comman, so they actually are 2 comletely different languages, (so Why call it the Achille Langguage at all, after all those changes ?)

In the end, you may wonder: Hey, but what actually is the Achille Language ?


In all programming languages, there are two types of "commands" (actually called _words_ and _sentences_, in the language theory) :
* the commands that are related to a specific hardware (like moving arms, legs, tturning rockets on/off etc...)
* the commands that have nothing to do with any hardwar at all :
  * adding numbers does not depend at all on what hardware you run on, the operation has the exact same meaning and result, whatever the machine number representation is.
  * same about multiplying numbers
  * same about modus operations
  * same about boolean operations
  * same about quick sort algorithm (the quick sort algorithm is the same no matter the  hardware)
  * same about the _words_ the Achiell Language uses to add a dependency used in my software
  * etc...

In other words, The part of the Achille Language which does not depend on the hardware, the _target Runtime_, where the software is going to be executed, is what actually what makes the Achielle Language. We could speak of the Achille _core_ language.

This may seem a long explanation, but very worthy: What is the Java Script Language?



Since you are interested into JavaScrtipt, you do know that `JavaScript` Softwares are executed in a lot of different _target Runtimes_ :
* browsers. And among browsers there are different JavaScript Runtimes indeed: they do execute the same code with different results)
* `nodejs`.
* All of those Runtimes still execute code from the same language, `JavaScript`, and are all indeed JavaScript Runtimes, because :
  * they may execute the same `JavaScript` code with different result
  * but they do, and must, be able to execute the same JavaScript core language commands, even if the result may vary a little (otherwise you wopuld have to write completely different source cdoe for each browser, for example, and there would be no `JavaScript` at all).

In order to ensure that all `JavaScript` Runtime can all execute the same `JavaScript` core commands, the `JavaScript` Runtimes developers agreed on standardizing a part of their Runtime : That standardization gave a subset of the JavaScript Language, called EcmaScript.

Or said otherwise, if you write a pure `ECMAScript` software, it will be able to be executed by all `JavaScript` Runtimes.

* `ECMAScript` is the JavaScript core language,
* `JavaScript` Runtimes all are supersets of an `ECAMScript` runtime, standardize by the ECMAScript standard. (consider ECMAScript as a theoritical JavaScript, that you may implement for any target hardware in, the future)
* `JavaScript` Runtimes differ from each other, only "out of the `ECMAScript` scope"

![Achille ECMAScript](./images/achille-ecmascript.drawio.png)

Therefore, one extremely important choice to do (but  not the only one), when designing the `TypeScript` configuration of your project, is to determine what version of `ECMAScript` will be used in the target `JavaScript` Runtimes  of your app users.

Now, let's mention a few examples, about the part that makes the differences between different JavaScript Runtimes :

* A browser `JavaScript` Runtime will always include a "DOM" Library: that is not `ECMAScript`. For example, usually in `NodeJS` server side apps lke ExpressJS Apps, you do not have (and do not need) any DOM Library.
* A modern Browser `JavaScript` Runtime will include a web worker library (for PWA web apps), But you will generally speaking not ever find or use a webworker library in a NodeJS server.
* etc... etc...


> _**Architecture**_

To fully configure our `TypeScript` Compiler, let's first have a look on the big Picture, considering only the case of an  **Interpreted `JavaScript`** :

![TypeScript Conifiguration Keep In Mind](./images/definitive-typescript-configuration.drawio_.drawio.png)


The first one very important thing to always bear in mind, when developing your JavaScript application, is to determine what ae the `JavaScript` Runtimes you want your app to run on : it will determine how many, and what users will be able to use your `JavaScript` software.

Another bunch of questions is very important to answer to :
* Will you compile your `JavaScript` source code, with the exact same `TypeScript` configuration for all your users target `JavaScript` Runtimes ?
* For most `TypeScript` projects, the answer is yes:
* But yu may still use several different `TypeScript` configurations to compile the app differently for dev, staging, and production environments, and that's complex enough, for you to be willing to use the same `TypeScript` configuration for all your target users JavaSript Runtimes.

Compiling a `TypeScript` source code results in a very simple delivery: you generate JavaScript files.


For the generated `JavaScript` code, we also want to determine what kind of modularization will be used :
* of course `TypeScript` Compilers generate modularized JavaSCript, because we always want modularization in any neat source code, both for debugging and also for runtime optimization
* you may use `CommonJS` : this is not part of `ECMAScript`
* you may use `ES 7` : this is part of `ECMAScript`
* You may use [`AMD` modules](https://requirejs.org/docs/whyamd.html) : and that's not `ECMAScript`
* etc...

Making a choice about what kind of modularization you will use in your source code, is very important : If not part of `ECMAScript`, your users target Runtimes may not support executing your generated `JavaScript` code.

All in all :
* compiling is about generating and bundling together JavaScript files,
* and all `TypeScript` options  are just configuring options about how the `JavaScript` code will be generated :
  * style,
  * will i use `require` of `import`, etc...


#### Dive in Compiler Options details

Okay, so, now that we have our big picture in mind, here are the questions we want to answer to, in order to determine the exact configuration we want to use in our `TypeScript` project :

* Do I want to force using explicit typing everywhere ? _Indeed, in `TypeScript`, if no type is explicitly defined for a given variable or method argument, the `Any` Type is implicitly assigned. All other Types must be explicitly declared. `Any` is a bit like the `Object` Type in `Java`. We may like or not like this implicit typing. I do not like imlicit tping, I always like everything clear (that's why I use `TypeScript`, not `JavaScript`)._
* Do I want my softwware to be bundled with additonal libraries, to add features to y target `EcmaScript`/`JavaScript` runtime ?




Among the `TypeScript` configuration options that very often are really not clear there are :
* Some take in values like `es5`, `es6`, `es2017` (Wtfuss ...?) :
* Some take in a very well known value , aka `CommonJS` (Wtheck ...?) :


<!--
  * the `--target` `tsc --init --target` command GNU Option
  * the `--lib` `tsc --init --lib` command GNU Option
-->




```bash
--target, -t
Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
one of: es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext
default: es3
```


```bash
--lib
Specify a set of bundled library declaration files that describe the target runtime environment.
one or more: es5, es6/es2015, es7/es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext, dom, dom.iterable, webworker, webworker.importscripts, webworker.iterable, scripthost, es2015.core, es2015.collection, es2015.generator, es2015.iterable, es2015.promise, es2015.proxy, es2015.reflect, es2015.symbol, es2015.symbol.wellknown, es2016.array.include, es2017.object, es2017.sharedmemory, es2017.string, es2017.intl, es2017.typedarrays, es2018.asyncgenerator, es2018.asynciterable/esnext.asynciterable, es2018.intl, es2018.promise, es2018.regexp, es2019.array, es2019.object, es2019.string, es2019.symbol/esnext.symbol, es2020.bigint/esnext.bigint, es2020.date, es2020.promise, es2020.sharedmemory, es2020.string, es2020.symbol.wellknown, es2020.intl, es2020.number, es2021.promise/esnext.promise, es2021.string, es2021.weakref/esnext.weakref, es2021.intl, es2022.array/esnext.array, es2022.error, es2022.intl, es2022.object, es2022.string/esnext.string, esnext.intl
default: undefined
```

```bash
--noLib
Disable including any library files, including the default lib.d.ts.
type: boolean
default: false
```

```bash
--module, -m
Specify what module code is generated.
one of: none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, nodenext
default: undefined
```

```bash
--esModuleInterop
Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility.
type: boolean
default: false
```

```bash
--resolveJsonModule
Enable importing .json files.
type: boolean
default: false

```


Example invoking `tsc --init`:

```bash
npx tsc --init --rootDir src --outDir build \
  --esModuleInterop --resolveJsonModule --lib es6 \
  --module commonjs --allowJs true --noImplicitAny true
```


_**What Version of `EcmaScript` shoulkd I use ?**_

For the record, here are all the versions of TypeScript available from `2015` to `2022` :

|         |  Short   |  Long     |         |         |
|---------|----------|-----------|---------|---------|
|         | `ES6`    | `ES2015`  |         |         |
|         | `ES7`    | `ES2016`  |         |         |
|         | `ES8`    | `ES2017`  |         |         |
|         | `ES9`    | `ES2018`  |         |         |
|         | `ES10`   | `ES2019`  |         |         |
|         | `ES11`   | `ES2020`  |         |         |
|         | `ES12`   | `ES2021`  |         |         |
|         | `ES13`   | `ES2022`  |         |         |


Now, which will i choose ?

For any software, my choice would go for the latest stable.

Now, here are reference articles where the question "What version of EcmaScript should I use in a TypeScript Project (-in my TypeScript [tsconfig.json] configuration) ?"

* https://www.meziantou.net/which-version-of-ecmascript-should-i-use-in-the-typescript-configuration.htm


Ok, so in Short, and this is a very important thing to understand about a TypecSCript Project :

* `JavaScript` will always be executed by an ECMA Script Engine. Ok
* So, if I work with a TypeScript poject, I will have 2 things to take in consideration :
  * What is the target execution environment ? (In particular, I may want my softwae to execute into seveal different "target environments", example several browsers, right?)
  * The TypeScript Compiler that I use, will have debugging capabilities, and the higher version of the TypsCript Compiler I use, the best features I will have in debugging mode, ok ?

* All in all, We may assume that EcamSCript ensures Ascending compatibilty, with of course limitations  :
  * `EcmaScript` first version cannot be guaranteed to "iso" execute (with exact same results) in all future versions of EcmaScript Engines, forever, that wxould be stupid  :
    * breaking changes must happen to ensure the ability of `EcmaScript` to welcome major innovations
    * to welcome major innovations : means to have the ability to leap up to new major concepts,
    * and of Course we want EcmaScript to be enhanced with new major innovations in the Future,
    * So it is pretty sure that `EcmaScript` must have beaking changes to be enhanced with major tehcnlogical innovations
    *
  * so we may assume EcmaScript guarantees ascending compatibilty for the last 10 years for example )

* So, all in all,  i wxill here consider 2 main use cases :
  * use case 1 : My Software will be executed in users browser
  * use case 2 : My software will be executed in NodeJS







## ANNEX: About the alpine image I used for the tests

```bash
~$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
alpine              latest              e66264b98777        3 days ago          5.53MB
alpine              <none>              d4ff818577bc        11 months ago       5.6MB

```

Also note :

```bash
sudo lsb_release -a
docker version
```
* Gives :
```bash
~$ sudo lsb_release -a
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 9.12 (stretch)
Release:	9.12
Codename:	stretch
~$
~$ docker version
Client: Docker Engine - Community
 Version:           19.03.6
 API version:       1.40
 Go version:        go1.12.16
 Git commit:        369ce74a3c
 Built:             Thu Feb 13 01:27:59 2020
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.6
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.16
  Git commit:       369ce74a3c
  Built:            Thu Feb 13 01:26:33 2020
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.2.12
  GitCommit:        35bd7a5f69c13e1563af8a93431411cd9ecf5021
 runc:
  Version:          1.0.0-rc10
  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683

```



## References

* https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
* https://www.typescriptlang.org/
* https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
* https://www.typescriptlang.org/download : recommandations to have a typesript setup as per project, instead of globally (best practice to version control the stack)
* https://formationjavascript.com/versions-de-javascript-histoire-et-futur/ (just to make it clear what version of EcmaScript I wanna use)
* About `CommonJS` :
  * https://en.wikipedia.org/wiki/CommonJS
  * https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46
