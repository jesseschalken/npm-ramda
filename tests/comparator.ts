import R_comparator = require('../ramda/dist/src/comparator');

declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass:snap
R_comparator(string_string_to_boolean);
