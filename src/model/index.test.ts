import * as Index from '.';

describe('Index', () => {
  test.each(['Action', 'Docker', 'ImageTag', 'Input'])('exports %s', (exportedModule) => {
    expect(Index[exportedModule]).toBeDefined();
  });
});
