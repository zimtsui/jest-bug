<!-- Love Jest? Please consider supporting our collective: 👉  https://opencollective.com/jest/donate -->

## 🐛 Bug Report

A clear and concise description of what the bug is.

```js
import Promise from 'bluebird';

test.only('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

this test fails.

you have 4 ways to correct the code:

1\. delete L1

```js
// import Promise from 'bluebird';

test.only('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

2\. delete L5
```js
import Promise from 'bluebird';

test.only('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    // f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

3\. delete L7

```js
import Promise from 'bluebird';

test.only('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    // await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
```

4\. move L7 to L4

```js
import Promise from 'bluebird';

test.only('test 1', async () => {
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

A clear and concise description of what you expected to happen.

the results of tests above should be consistent.

## Link to repl or repo (highly encouraged)

Please provide either a [repl.it demo](https://repl.it/languages/jest) or a minimal repository on GitHub.

Issues without a reproduction link are likely to stall.

## Run `npx envinfo --preset jest`

Paste the results here:

```bash

```
