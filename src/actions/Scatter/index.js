export const connect = () => ({
  type: 'CONNECT_SCATTER'
})

export const getIdentity = () => ({
  type: 'GET_IDENTIFY'
})

export const transfer = payload => ({
  type: 'TRANSFER',
  payload
})

export const forgetIdentity = () => ({
  type: 'FORGET_IDENTIFY'
})
