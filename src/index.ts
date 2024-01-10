import { getResult } from "./services/getResult"

export const main = () => {
  const result = getResult('test')
  return result
}