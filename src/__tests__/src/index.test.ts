import { main } from "../..";

describe('should bring return to main', () => {
  test('should bring code 200', async () => {      
    const data = main() as any
    expect(typeof data.result).toBe('string');
  });
});