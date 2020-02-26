import jwt from 'jsonwebtoken'
import User from '_user/models'

const auth = async (req, res, next) => {
  const header = req.header('Authorization')

  try {
    if (!header) {
      throw new Error({})
    }

    const token = header.replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)

    // eslint-disable-next-line no-underscore-dangle
    const user = await User.findOne({ _id: data._id, 'tokens.token': token })
    if (!user) {
      throw new Error({})
    }
    req.user = user
    req.token = token
    next()
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
}

export default auth
