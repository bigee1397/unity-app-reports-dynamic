import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartRadar
} from '@coreui/react-chartjs'

const displayMode3 = () => {
  return (
    <>
    <CRow>
        <CCol xs={6} lg={6}>
            <CCard className="mb-4">
            <CCardHeader>Radar Chart</CCardHeader>
            <CCardBody>
                <CChartRadar
                data={{
                    labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing'
                    ],
                    datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(220, 220, 220, 0.2)',
                        borderColor: 'rgba(220, 220, 220, 1)',
                        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                        pointBorderColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                        data: [65, 59, 90, 81],
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: 'rgba(151, 187, 205, 0.2)',
                        borderColor: 'black',
                        pointBackgroundColor: 'black',
                        pointBorderColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                        data: [28, 48, 40, 19],
                    },
                    ],
                }}
                />
            </CCardBody>
            </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default displayMode3
