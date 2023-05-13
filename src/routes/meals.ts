import { FastifyInstance } from 'fastify'
import { checkUserIdExists } from '../middlewares/check-user-id-exists'
import { checkUserTokenExists } from '../middlewares/check-user-token-exists'

export async function mealsRoutes(app: FastifyInstance) {
  app.addHook('preHandler', checkUserTokenExists)
  app.addHook('preHandler', checkUserIdExists)
}
