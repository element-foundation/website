import React, { useState, useRef } from 'react'
import { Box, Flex, IconButton, Text } from 'theme-ui'
import copy from 'copy-to-clipboard'
import CopyIcon from '../images/imported/copy.svg'
import QrIcon from '../images/imported/QR_icon.svg'
import CloseIcon from '../images/imported/close.svg'
import { QRCode } from "react-qr-svg"
import ReactTooltip from 'react-tooltip'
import content from '../content.json'

export default function EthAddress({ address }) {
  const [ showQR, setShowQR ] = useState(false)
  const copyButton = useRef(null)

  return <>
    <ReactTooltip effect="solid" delayShow={200} />
    <Box sx={{
      background: '#fff', 
      boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.07)', 
      borderRadius: '6px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: '11px',
      maxWidth: '576px',
      width: '100%',
    }}>
      <Box sx={{ overflowX: 'hidden', position: 'relative', height: '46px', width: '100%' }}>
        <Text variant="ethAddress" sx={{ ml: '12px', mr: '16px', position: 'absolute', top: '10px', left: 0 }}>{address}</Text>
        <Box sx={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%)', 
          width: '32px', position: 'absolute', right: 0, top: 0, bottom: 0 }} />
      </Box>
      <Box sx={{ 
        display: 'inline-flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '68px',
        height: '100%',
        float: 'right'
      }}>
        <IconButton ref={copyButton} data-tip={content.common['copy-tooltip']} onClick={() => { 
            copy(address)
            ReactTooltip.hide(copyButton.current)
          }}>
          <CopyIcon />
        </IconButton>
        <IconButton data-tip={content.common['qr-tooltip']}>
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
      alignItems: 'center',
      zIndex: 1000
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