const Promise = require('bluebird');

test('test 1', async () => {
    const f = (async () => { throw new Error('haha'); })();
    // f.then(() => {});
    await expect(f).rejects.toThrow('haha');
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
});
