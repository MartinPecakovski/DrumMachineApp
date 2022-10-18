import React from 'react'
import { DrumEdit, DrumInitial, DrumWrapper } from '../../styles/styles'

type Props = {}

const Drum = (props: Props) => {
  return (
  
    <DrumWrapper>
          <DrumInitial>
              d
          </DrumInitial>
          <DrumEdit>
            <span>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6133 10.3075C16.3657 10.3075 16.165 10.5082 16.165 10.7558V14.7362C16.1641 15.4786 15.5626 16.0803 14.8201 16.081H2.24147C1.49898 16.0803 0.897462 15.4786 0.896587 14.7362V3.05409C0.897462 2.31178 1.49898 1.71008 2.24147 1.70921H6.22182C6.46943 1.70921 6.67011 1.50853 6.67011 1.26092C6.67011 1.01348 6.46943 0.812622 6.22182 0.812622H2.24147C1.00411 0.814023 0.00140092 1.81673 0 3.05409V14.7363C0.00140092 15.9737 1.00411 16.9764 2.24147 16.9778H14.8201C16.0575 16.9764 17.0602 15.9737 17.0616 14.7363V10.7558C17.0616 10.5082 16.8609 10.3075 16.6133 10.3075Z" fill="black"/>
</svg>

            </span>
          </DrumEdit>
  </DrumWrapper>
    
  )
}

export default Drum