import { Col, Row } from 'antd'
import React from 'react'
import { DrumsWrapper } from '../../styles/styles'
import Drum from './Drum'

type Props = {}

const DrumMachine = (props: Props) => {
  return (
    <DrumsWrapper>
          <Row>
            <Col >
            <Drum/>
            </Col>
          </Row>
    </DrumsWrapper>
  )
}

export default DrumMachine