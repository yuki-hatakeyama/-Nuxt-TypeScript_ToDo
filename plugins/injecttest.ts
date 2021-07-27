const hello = (msg: string) => {
  console.log(`hello ${msg}`)
}

const getLog = () => {
  console.log('inject のログです')
}

export default ({}, inject: any) => {
  inject('hello', hello)
  inject('getLog', getLog)
}
