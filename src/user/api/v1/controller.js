import User from '_user/models'

export const userCreate = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })
    await user.save()
    const token = await user.generateAuthToken()

    res.status(201).send({ user: { name, email }, token })
  } catch (e) {
    res.status(400).send(e)
  }
}

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findByCredentials(email, password)

    if (!user) {
      throw new Error({ error: 'Login faield! Check authentication credentials.' })
    }

    const token = await user.generateAuthToken()
    const { name } = user

    res.status(200).send({ user: { name, email }, token })
  } catch (e) {
    res.status(400).send(e)
  }
}

export const userGet = async (req, res) => {
  const { name, email } = req.user
  res.send({ name, email })
}
