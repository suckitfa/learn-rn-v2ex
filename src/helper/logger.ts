import { Client } from 'bugsnag-react-native'
const bugsnag = new Client('f1eXXXXXXXXXXXf55776a5')

export const logError = (error: any) => {
  console.log(error)
  if (error instanceof Error) {
    bugsnag.notify(error)
  }
}
