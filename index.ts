import { app } from './src/server'

const port = process.env.PORT || 4000

app.listen({ port }, () => {
  console.info(`🚀 Server ready at http://localhost:${port}/graphql`)
})
