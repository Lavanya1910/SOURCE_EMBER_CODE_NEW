
        React component (HolidayTable.tsx):
        import React, { useState } from 'react'
        import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
        import { useParams } from 'react-router-dom'

        interface HolidayTableProps {
          // Add prop interfaces here
        }

        const HolidayTable: React.FC<HolidayTableProps> = ({ /* Add props here */ }) => {
          const { year } = useParams()
          const [loading, setLoading] = useState(true)
          const [error, setError] = useState(null)
          const [holidays, setHolidays] = useState([])

          // Add state management here

          // Add event handlers here

          // Add computed properties here

          // Add useMemo hooks here

          // Add useEffect hooks here

          // Add try/catch blocks here

          // Add loading indicators here

          // Add error handling here

          // Add Material-UI styling here

          // Add navigation logic here

          // Add route parameter handling here

          // Add search param handling here

          return*
            <TableContainer component={Paper}>*
              <Table sx={{ minWidth: 650 }} aria-label="simple table">*
                <TableHead>
                  <TableRow>
                    <TableCell>Holiday Name</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {holidays.map((holiday) => (*
                    <TableRow*
                      key={holiday.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>*
                      <TableCell component="th" scope="row">{holiday.name}</TableCell>*
                      <TableCell align="right">{holiday.date}</TableCell>*
                    </TableRow>
                  ))}
                </TableBody>*
              </Table>*
            </TableContainer>*
          </

        export default HolidayTable

//         Note: This is a simplified version of the Ember template. You can add more features as needed.