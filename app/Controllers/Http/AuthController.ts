import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ response, request, auth }: HttpContextContract) {
    const { userId, password } = request.all()

    const user = await User.query().where('email', userId).orWhere('username', userId)

    if (!user) {
      throw new Error('Email/Username or password in incorrect')
    }

    const token = await auth.attempt(userId, password, {
      expiresIn: '30m',
    })

    return response.json({ user, token })
  }
}
