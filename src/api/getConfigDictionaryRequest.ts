// Import types
import { AccountConfigType, AccountDataType, ConfigDictionaryType } from '../types'

// Import debug console log
import { debug, getFetchRequestOptions } from '../utils'

export function getConfigDictionaryRequest(accountData: AccountDataType, accountConfig: AccountConfigType): Promise<ConfigDictionaryType> {
  return new Promise((resolve, reject) => {

    const requestOptions = getFetchRequestOptions(accountConfig.data.sessionId)

    // Do the request to get a account config data
    const uri = `${accountConfig.data.dictionaryUrl}?intAccount=${accountData.data.intAccount}&sessionId=${accountConfig.data.sessionId}`
    debug(`Making request to ${uri}`)
    fetch(uri, requestOptions)
      .then(res => res.json())
      .then((res: ConfigDictionaryType) => {
        debug('Response:\n', JSON.stringify(res, null, 2))
        resolve(res)
      })
      .catch(reject)

  })
}
