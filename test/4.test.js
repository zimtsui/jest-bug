const Promise = require('bluebird');

test.only('test 1', async () => {
    await expect(Promise.reject(new Error('haha'))).rejects.toThrow('haha');
    const f = (async () => { throw new Error('haha'); })();
    f.then(() => {});
    await expect(f).rejects.toThrow('haha');
});
