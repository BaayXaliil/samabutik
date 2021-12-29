import bcrypt from 'bcryptjs'

const user = [
  {
    name: 'Admin User',
    email: 'dioptrie7@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ibrahima Diop',
    email: 'dioptrie@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Baye Khalil',
    email: 'ibraxiima@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default user
