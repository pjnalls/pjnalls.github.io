import { Injectable } from '@angular/core';

import {INTRO} from './mock-intro';

@Injectable()
export class IntroService {
  getIntro() {
    return Promise.resolve(INTRO);
  }
}