import { getApiData } from '../../callCreator'
import { API_DISCOVER_SPENDABLE_KEY_CLAIMS, NATIVE, POST } from '../../../constants/componentConstants'

/**
 * Finds the funds and VerusIDs a gift card (spendable key) address holds, before claim fees
 * @param {String} chainTicker Chain the gift card is on
 * @param {String} address Gift card address to check
 */
export const discoverSpendableKeyClaims = async (
  chainTicker,
  address
) => {
  try {
    return await getApiData(
      NATIVE,
      API_DISCOVER_SPENDABLE_KEY_CLAIMS,
      {
        chainTicker,
        address,
        subtractDisplayFees: false
      },
      POST
    );
  } catch (e) {
    throw e
  }
};
