import React, { useEffect, useCallback, useState } from 'react'

import Page from 'components/Layout/Page'

export interface FarmsProps {
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {




  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  
  return (
    <Page>
      <iframe
        src="https://quickswap.exchange/#/swap?inputCurrency=0x130FF075868aF7027A87F02FbA766037b73F4403"
        title="Buy Zoo"
        height="700px"
        width="100%"
      />
    </Page>
  )
}

export default Farms
