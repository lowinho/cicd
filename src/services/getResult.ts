export const getResult = (data: string) => {
  if (data === 'test') return { code: 200, result: 'OK'}
  console.log('goes')
  return { code: 401, result: 'Wrong Data'}
}