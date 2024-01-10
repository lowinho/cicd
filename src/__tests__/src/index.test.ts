import { main } from "../..";


describe('should update data on database', () => {
  test('should bring code 200', async () => {      
    const data = main() as any
    expect(typeof data.result).toBe('string');
  });
});