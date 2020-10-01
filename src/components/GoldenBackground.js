import React from 'react'
import styled from 'styled-components'
import { Box } from 'theme-ui'
import DaiIconOriginal from '../images/imported/dai.svg'

const GoldenGradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  min-width: 650px;
  background: rgb(251,254,227);
  background: linear-gradient(153deg, rgb(251,254,227) 21%, rgb(255,219,132) 100%);
  background-position: 0 0;
`

const DaiIcon = styled(DaiIconOriginal)`
  width: ${props => props.size};
  height: ${props => props.size};
  position: absolute;
  z-index: -1;
  right: 52px;
  top: ${props => props.top};
  opacity: ${props => props.opacity};
  fill: #F4B731;
`

function renderDaiIcons(offset, size, count) {
  const icons = []
  const marginCorrection = 6;
  for (let i = 0; i < count; i++) {
    icons.push(<DaiIcon top={`${offset + (i * (size + marginCorrection))}px`} size={`${size}px`} opacity='0.12' />)
  }
  return icons
}

const GoldenBackground = ({ children, sx, ...props }) =>
  <Box sx={{position: 'relative', overflow: 'hidden', ...sx}} {...props}>
    <GoldenGradient>
      {renderDaiIcons(-186, 335, 4)}
    </GoldenGradient>
    {children}
  </Box>

export default GoldenBackground