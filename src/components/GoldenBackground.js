import React from 'react'
import styled from 'styled-components'
import { Box } from 'theme-ui'
import DaiIconOriginal from '../images/imported/dai.svg'

const GoldenGradient = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: rgb(251,254,227);
  background: linear-gradient(153deg, rgb(251,254,227) 21%, rgb(254,213,117) 100%);
  background-position: 0 0;
`

const DaiIcon = styled(DaiIconOriginal)`
  width: ${props => props.size};
  height: ${props => props.size};
  position: fixed;
  z-index: -1;
  right: 52px;
  top: ${props => props.top};
  opacity: ${props => props.opacity};
`

function renderDaiIcons(offset, size, howMany) {
  const icons = []
  const marginCorrection = 6;
  for (let i = 0; i < howMany; i++) {
    icons.push(<DaiIcon top={`${offset + (i * (size + marginCorrection))}px`} size={`${size}px`} opacity='0.12' />)
  }
  return icons
}

const GoldenBackground = ({ children, ...props }) =>
  <Box sx={{position: 'relative', overflow: 'hidden', ...props.sx}} {...props}>
    <GoldenGradient />
    {renderDaiIcons(-186, 335, 4)}
    {children}
  </Box>

export default GoldenBackground