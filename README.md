This is a demonstration of things we talked about in discussion [here](https://github.com/graphile/postgraphile-lambda-example/issues/16).

It illustrates 3 ways to load a JS object form a JSON file.

1. direct import [example](https://test-now-json.now.sh/api/require) [code](https://github.com/konsumer/test-now-json/blob/master/api/require.js)
2. dynamic require [example](https://test-now-json.now.sh/api/bad-import) [code](https://github.com/konsumer/test-now-json/blob/master/api/bad-import.js)
3. using `readFileSync` [example](https://test-now-json.now.sh/api/fs) [code](https://github.com/konsumer/test-now-json/blob/master/api/fs.js)

1 works, 2 does not (due to the dynamic filename + require, which can't be resolved at runtime)

3 works, suprisingly, which is a new feature of now.
