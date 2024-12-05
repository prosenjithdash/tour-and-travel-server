import { app } from './app'

function server() {
  app.listen(8000, () => {
    console.log('Server is running on 8000.')
  })
}
server()
