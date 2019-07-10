<!-- Love Jest? Please consider supporting our collective: 👉  https://opencollective.com/jest/donate -->

## 🐛 Bug Report

```js
const Promise = require('bluebird');

test('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

this test fails.

but you have 4 ways to correct the code:

1\. delete L1

```js
// const Promise = require('bluebird');

test('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

2\. delete L5
```js
const Promise = require('bluebird');

test('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    // f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

3\. delete L7

```js
const Promise = require('bluebird');

test('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    // await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

4\. move L7 to L4

```js
const Promise = require('bluebird');

test('test 1', async () => {
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
});
```

## To Reproduce

Steps to reproduce the behavior:

1. install bluebird and jest with every config default.
2. jest run the codes

## Expected behavior

the results of tests above should be consistent.

## Link to repl or repo (highly encouraged)

[this repo](https://github.com/zimtsui/jest-bug) is made speciall for this post.

```shell
$ git clone https://github.com/zimtsui/jest-bug.git
$ cd ./jest-bug
$ npm i
$ npm run test
```

## Run `npx envinfo --preset jest`

```bash
  System:
    OS: Linux 4.15 Ubuntu 18.04.2 LTS (Bionic Beaver)
    CPU: (4) x64 Intel(R) Core(TM) i7-5600U CPU @ 2.60GHz
  Binaries:
    Node: 10.16.0 - /usr/local/bin/node
    npm: 6.10.0 - /usr/local/bin/npm
  npmPackages:
    jest: ^24.8.0 => 24.8.0 
```
