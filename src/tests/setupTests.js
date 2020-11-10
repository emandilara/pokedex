import '@testing-library/jest-dom/extend-expect';
import 'core-js/modules/es7.promise.finally';
import 'jest-fetch-mock';

global.fetch = require('jest-fetch-mock');