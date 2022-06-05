var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * https://github.com/gulpjs/gulp/blob/master/docs/getting-started/2-javascript-and-gulpfiles.md#transpilation
 */
import { Gulpclass, Task } from "gulpclass/Decorators";
// import gutil from 'gulplog'
import * as gutil from 'gulp-util';
import * as del from 'del';
//let gulp = require("gulp");
// let del = require("del");
// let gutil = require('gulplog');
/*

export HUGO_THEME_GIT_URI="my test value for [HUGO_THEME_GIT_URI] "
export WEBSITE_PROJECT_NAME="my test value for [WEBSITE_PROJECT_NAME] "
export HUGO_GMENTED_THEME_ID="my test value for [HUGO_GMENTED_THEME_ID] "

*/
const hugoThemeGitURI = `${process.env.HUGO_THEME_GIT_URI}`;
const websiteProjectName = `${process.env.WEBSITE_PROJECT_NAME}`;
const hugoGmentedThemeID = `${process.env.HUGO_GMENTED_THEME_ID}`;
let Gulpfile = class Gulpfile {
    clean(cb) {
        // clean() {
        // const deletedFileAndDirPaths = await del('./dist/**');
        // const deletedDirectoryPaths = await del(['temp', 'public']);
        // gutil.log('\n\n');
        // gutil.log('Deleted files and directories :\n', deletedFileAndDirPaths.join('\n'));
        // gutil.log('\n\n');
        gutil.log(` >>> Pokus >>> Xhat a Pokus! You are exeuting the [clean] Gulp task, which will delete all './dist/**' Files`);
        // cb();
        // del module returns promise for you automatically
        // return { ireturn: "just about anything i want as long as i executed the callback"};
        // return del('./dist/**', () => { gutil.log(`Oh wow I am a pokus callback now `);cb});
        // return del.sync(['./dist/**'], () => { gutil.log(`Oh wow I am a pokus callback now `);cb});
        cb();
        return del.sync(['./dist/**']);
    }
    /*
    @Task() // or use provided callback instead
    clean(cb: Function) {
        return del("./dist/**", cb);
    }
    */
    showenv(cb) {
        console.warn(` Pokus >>> Hey! you just invoked a pokus gulp build task`);
        gutil.log(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`);
        gutil.log(` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {HUGO THEME GIT URI  |HUGO_THEME_GIT_URI}=[${hugoThemeGitURI}]`);
        gutil.log(` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {WEBSITE PROJECT NAME  |WEBSITE_PROJECT_NAME}=[${websiteProjectName}]`);
        gutil.log(` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {HUGO GMENTED THEME ID  |HUGO_GMENTED_THEME_ID}=[${hugoGmentedThemeID}]`);
        /*
        WEBSITE_PROJECT_NAME
        HUGO_THEME_GIT_URI
        WEBSITE_PROJECT_NAME
        HUGO_GMENTED_THEME_ID
        */
        gutil.log(`// >>>>>>>>>>>> >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> +  >>>>>>>>>> + //`);
        cb(); // if you don't execute the callback, well then gulp throws a warning :
        /**
         *
         * [04:35:34] The following tasks did not complete: showenv
         * [04:35:34] Did you forget to signal async completion?
         *
         **/
        return { dummy: "returned object", callback: { was: cb } };
    }
};
__decorate([
    Task() // return promise to indicate your task completion
], Gulpfile.prototype, "clean", null);
__decorate([
    Task()
], Gulpfile.prototype, "showenv", null);
Gulpfile = __decorate([
    Gulpclass()
], Gulpfile);
export { Gulpfile };
