import {expectType} from 'tsd';
import gender from './index.js';

expectType<string>(gender());
expectType<string>(gender({locale: 'en_US'}));
expectType<string>(gender({locale: 'en_US', extra: ['gender']}));
