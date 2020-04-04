import { User } from './Interfaces'
import { welcome } from './message'
import { create as createUser } from './user'

const user: User = createUser('Esenor', 'esenor@domain.com', '05/04/2020 00:00:00', 42)

console.log(welcome(user))

export {}
