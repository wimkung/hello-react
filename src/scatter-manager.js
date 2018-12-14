import ScatterJS from 'scatterjs-core'
import ScatterEOS from 'scatterjs-plugin-eosjs'
import Eos from 'eosjs'
import numeral from 'numeral'

const network = {
  blockchain: 'eos',
  protocol: 'https',
  host: 'jungle2.cryptolions.io',
  port: 443,
  chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
}
let connection = null
let scatter = null
let account = null

class Scatter {
  static connect = async () => {
    ScatterJS.plugins(new ScatterEOS())
    connection = await ScatterJS.scatter.connect('wimkung')
    if (!connection) throw new Error('Cannot connect scatter')
    scatter = ScatterJS.scatter
    console.log('Scatter connected')
  }

  static getIdentity = async () => {
    const requiredFields = { accounts: [network] }
    if (!account) {
      await scatter.getIdentity(requiredFields)
      account = scatter.identity.accounts.find(x => x.blockchain === 'eos')
    }
    console.log('account: ', account)
    return account
  }

  static transferEos = async (to, memo, amount) => {
    const transactionOptions = {
      authorization: [`${account.name}@${account.authority}`]
    }
    const eosOptions = { expireInSeconds: 60 }
    const eos = scatter.eos(network, Eos, eosOptions)
    const trx = await eos.transfer(
      account.name,
      to,
      `${numeral(amount).format('0.0000')} EOS`,
      memo,
      transactionOptions
    )
    console.log('trx: ', trx)
    return trx
  }

  static forgetIdentity = async () => {
    scatter.forgetIdentity()
    account = null
    console.log('account: ', account)
    return true
  }
}

export default Scatter
