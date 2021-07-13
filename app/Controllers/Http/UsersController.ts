import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/user/Register'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async register({ response, request }: HttpContextContract) {
    const { username, email, password } = request.all()

    const data = await request.validate(RegisterValidator)

    if (!data) {
      return response.badRequest(data)
    }

    await User.create({ username, email, password })

    return response.created()
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
