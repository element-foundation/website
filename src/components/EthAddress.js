import React, { useEffect } from 'react'
import { Box, Flex, IconButton, Text } from 'theme-ui'
import copy from 'copy-to-clipboard'
import CopyIcon from '../images/imported/copy.svg'
import QrIcon from '../images/imported/QR_icon.svg'

export default function EthAddress({ address }) {
  
  return <Box sx={{
    background: '#fff', 
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.07)', 
    borderRadius: '6px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: '8px',
    px: '11px',
  }}>
    <Text variant="ethAddress" sx={{ ml: '12px', mr: '23px', position: 'relative', top: '4px'}}>{address}</Text>
    <Box sx={{ 
      display: 'inline-flex', 
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '54px',
      mr: '4px',
    }}>
      <IconButton>
        <CopyIcon onClick={() => copy(address)} />
      </IconButton>
      <IconButton>
        <QrIcon width={24} />
      </IconButton>
    </Box>
  </Box>
}