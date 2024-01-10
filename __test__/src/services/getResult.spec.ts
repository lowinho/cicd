import { getResult } from "../../../src/services/getResult";

describe('should update data on database', () => {
  test('should bring code 200', async () => {      
    const data = getResult('test') as any
    expect(data.code).toBe(200);
    expect(data.result).toEqual('OK');
    expect(typeof data.result).toBe('string');
  });

  test('should bring error code 401', async () => {      
    const data = getResult('another') as any
    expect(data.code).toBe(401);
    expect(data.result).toEqual('Wrong Data');
    expect(typeof data.result).toBe('string');
  });
});