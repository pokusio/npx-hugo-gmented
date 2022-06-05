'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gulpfile = exports.hugoGmentedThemeID = exports.websiteProjectName = exports.hugoThemeGitURI = void 0;
/**
 * https://github.com/gulpjs/gulp/blob/master/docs/getting-started/2-javascript-and-gulpfiles.md#transpilation
 */
const Decorators_1 = require("gulpclass/Decorators");
const gutil = __importStar(require("gulp-util"));
// import * as gulp from 'gulp';
const del = __importStar(require("del"));
/*

export HUGO_THEME_GIT_URI="my test value for [HUGO_THEME_GIT_URI] "
export WEBSITE_PROJECT_NAME="my test value for [WEBSITE_PROJECT_NAME] "
export HUGO_GMENTED_THEME_ID="my test value for [HUGO_GMENTED_THEME_ID] "

*/
exports.hugoThemeGitURI = `${process.env.HUGO_THEME_GIT_URI}`;
exports.websiteProjectName = `${process.env.WEBSITE_PROJECT_NAME}`;
exports.hugoGmentedThemeID = `${process.env.HUGO_GMENTED_THEME_ID}`;
let Gulpfile = class Gulpfile {
    clean(cb) {
        gutil.log(`Pokus What a Pokus! You are exeuting the [clean] Gulp task, which will delete all './distro/*' Files`);
        cb();
        return del.sync(['./distro/**']);
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
        gutil.log(` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {HUGO THEME GIT URI  |HUGO_THEME_GIT_URI}=[${exports.hugoThemeGitURI}]`);
        gutil.log(` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {WEBSITE PROJECT NAME  |WEBSITE_PROJECT_NAME}=[${exports.websiteProjectName}]`);
        gutil.log(` Pokus >>> Hey! you just invoked a pokus gulp build task >>>>>>>>>>>> testEnvDisplay() >> {HUGO GMENTED THEME ID  |HUGO_GMENTED_THEME_ID}=[${exports.hugoGmentedThemeID}]`);
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
        return { dummy: 'returned object', callback: { was: cb } };
    }
};
__decorate([
    (0, Decorators_1.Task)() // return promise to indicate your task completion
], Gulpfile.prototype, "clean", null);
__decorate([
    (0, Decorators_1.Task)()
], Gulpfile.prototype, "showenv", null);
Gulpfile = __decorate([
    (0, Decorators_1.Gulpclass)()
], Gulpfile);
exports.Gulpfile = Gulpfile;
