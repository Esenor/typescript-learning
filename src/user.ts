import { User } from './Interfaces'
export const create = (username: string, email: string, lastConnection: string, totalConnection: number): User => ({
  username,
  email,
  lastConnection,
  totalConnection
})
