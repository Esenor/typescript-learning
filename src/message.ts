import { User } from './Interfaces'
export const welcome = (user: User): string => `Hello ${user.username}, last connection at ${user.lastConnection} (total of ${user.totalConnection}).`
