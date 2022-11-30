import React from 'react'

import { 
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCol,
    CRow
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const displayMode2 = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]
  return (
   <>
   <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Season
              </h4>
              <div className="small text-medium-emphasis">Session 1-14</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Year'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: [
                'Session 1',
                'Session 2',
                'Session 3',
                'Session 4',
                'Session 5',
                'Session 6',
                'Session 7',
                'Session 8',
                'Session 9',
                'Session 10',
                'Session 11',
                'Session 12',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                  pointBackgroundColor: hexToRgba(getStyle('--cui-info'),10),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 75, 85],
                },
                {
                  label: 'My Fourth dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [3, 8],
                  data: [
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                    random(0, 100),
                  ],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
    </CCard>
   </>
  )
}

export default displayMode2
