import React, { useState } from 'react'
import { Box, Flex, IconButton, Text } from 'theme-ui'
import copy from 'copy-to-clipboard'
import CopyIcon from '../images/imported/copy.svg'
import QrIcon from '../images/imported/QR_icon.svg'
import CloseIcon from '../images/imported/close.svg'
import { QRCode } from "react-qr-svg";

export default function EthAddress({ address }) {
  const [ showQR, setShowQR ] = useState(false)

  return <>
    <Box sx={{
      background: '#fff', 
      boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.07)', 
      borderRadius: '6px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      py: '7px',
      px: '11px',
    }}>
      <Text variant="ethAddress" sx={{ ml: '12px', mr: '16px', position: 'relative', top: '2px'}}>{address}</Text>
      <Box sx={{ 
        display: 'inline-flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '68px',
      }}>
        <IconButton>
          <CopyIcon onClick={() => copy(address)} />
        </IconButton>
        <IconButton>
          <QrIcon width={24} onClick={() => setShowQR(true)} />
        </IconButton>
      </Box>
    </Box>
    <Box sx={{ 
      display: showQR ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center'
    }}
      onClick={() => setShowQR(false)}
    >
      <Box
        sx={{ 
          m: '0 auto',
          backgroundColor: 'background',
          boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.07)',
          borderRadius: '6px',
          padding: '16px'
        }}>
        <Flex sx={{justifyContent: 'flex-end', mb: '8px'}}>
          <IconButton onClick={() => setShowQR(false)}>
            <CloseIcon width="24" />
          </IconButton>
        </Flex>
        <QRCode
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="Q"
          style={{ width: "245px", height: "245px" }}
          value={address}
        />
      </Box>
    </Box>
  </>
}