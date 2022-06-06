'use strict';
/**
 * https://github.com/gulpjs/gulp/blob/master/docs/getting-started/2-javascript-and-gulpfiles.md#transpilation
 */
import { Gulpclass, Task } from 'gulpclass/Decorators';

import * as gutil from 'gulp-util';
// import * as gulp from 'gulp';
import * as del from 'del';

// custom modularized tasks example : CDN Tasks
import * as pokus_tasks from './tasks';

/*

export HUGO_THEME_GIT_URI="my test value for [HUGO_THEME_GIT_URI] "
export WEBSITE_PROJECT_NAME="my test value for [WEBSITE_PROJECT_NAME] "
export HUGO_GMENTED_THEME_ID="my test value for [HUGO_GMENTED_THEME_ID] "

*/

export const hugoThemeGitURI = `${process.env.HUGO_THEME_GIT_URI}`;
export const websiteProjectName = `${process.env.WEBSITE_PROJECT_NAME}`;
export const hugoGmentedThemeID = `${process.env.HUGO_GMENTED_THEME_ID}`;

@Gulpclass()
export class Gulpfile {
  @Task() // return promise to indicate your task completion
  clean(cb: Function) {
    gutil.log(
      `Pokus What a Pokus! You are exeuting the [clean] Gulp task, which will delete all './distro/*' Files`
    );
    cb();
    return del.sync(['./distro/**']);
  }

  /*
  @Task() // or use provided callback instead
  clean(cb: Function) {
      return del("./dist/**", cb);
  }
  */
  @Task()
  showenv(cb: Function) {
    console.warn(` Pokus >>> Hey! you just invoked a pokus gulp build task`);
    gutil.log(
      `// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`
    );
    gutil.log(
      ` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {HUGO THEME GIT URI  |HUGO_THEME_GIT_URI}=[${hugoThemeGitURI}]`
    );
    gutil.log(
      ` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {WEBSITE PROJECT NAME  |WEBSITE_PROJECT_NAME}=[${websiteProjectName}]`
    );
    gutil.log(
      ` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {HUGO GMENTED THEME ID  |HUGO_GMENTED_THEME_ID}=[${hugoGmentedThemeID}]`
    );
    /*
       WEBSITE_PROJECT_NAME
       HUGO_THEME_GIT_URI
       WEBSITE_PROJECT_NAME
       HUGO_GMENTED_THEME_ID
       */
    gutil.log(
      `// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`
    );
    cb(); // if you don't execute the callback, well then gulp throws a warning :
    /**
     *
     * [04:35:34] The following tasks did not complete: showenv
     * [04:35:34] Did you forget to signal async completion?
     *
     **/
    return { dummy: 'returned object', callback: { was: cb } };
  }
}
