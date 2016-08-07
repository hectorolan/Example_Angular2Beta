/// <reference path="../typings/browser.d.ts" />
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './controller/ControllerMain';
import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
import {MDL_DIRECTIVE} from '../app/directives/UpgradeMDL';

bootstrap(AppComponent, [
  provide(PLATFORM_DIRECTIVES, {useValue: MDL_DIRECTIVE, multi: true})
]);