import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('register', 'UsersController.register')
  Route.group(() => {
    Route.get('user', async () => {
      return { hello: 'world' }
    })
  }).middleware('auth:api')
}).prefix('api')
