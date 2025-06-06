
        Note: You can use the following packages:
        - @mui/material: v5.11.14
        - @tanstack/router: v1.7.1
        - axios: v1.3.4
        - react: v18.2.0
        - react-dom: v18.2.0
        - react-router-dom: v6.11.2
        - typescript: v4.9.5
        
        ContactFlow.tsx:
        import React, { useState, useMemo } from 'react'
        import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
        import { useQuery } from '@tanstack/react-query'
        import { AxiosError } from 'axios'
        import { Button, Container, Tab, Tabs, Typography } from '@mui/material'
        import { Dropdown } from './Dropdown'
        import { BAreaTable } from './BAreaTable'
        import { HolidayTable } from './HolidayTable'
        import { SearchField } from './SearchField'

interface RouteParams {
  id?: string
}

interface LocationState {
  searchParams?: { [key: string]: string | string[] }
}

interface ContactFlowProps {
  params: RouteParams
  location: Location
}

export const ContactFlow: React.FC<ContactFlowProps> = ({ params, location }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [bAreaValue, setBAreaValue] = useState('')

  const locationState = location.state as LocationState
  const searchParams = locationState?.searchParams

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { data: bAreaData, isLoading: bAreaLoading, error: bAreaError } = useQuery(
    queryKey: ['bAreaData', searchValue, bAreaValue",
    queryFn: async () => /***/
  }

  const { data: holidayData, isLoading: holidayLoading, error: holidayError } = useQuery(
    queryKey: ['holidayData",
    queryFn: async () => /***/
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue)
    navigate(`${pathname}?tab=${newValue}`)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    navigate(`${pathname}?search=${event.target.value}`)
  }

  const handleBAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBAreaValue(event.target.value)
    navigate(`${pathname}?bArea=${event.target.value}`)
  }

  const tabValue = useMemo(() => {
    const tabParam = new URLSearchParams(searchParams).get('tab')
    return tabParam ? parseInt(tabParam, 10) : 0
  }, [searchParams));

  const searchParam = useMemo(() =>(
    new URLSearchParams(searchParams).get('search')
  }, [searchParams},

  const bAreaParam = useMemo(() =>(
    new URLSearchParams(searchParams).get('bArea')
  }, [searchParams(

  return(
    <Container>
      <Tabs value={tabValue} onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label="LLM Business Use Case"
          value={0}
        />
        <Tab label="LLM Division Selection"
          value={1}
        />
        <Tab label="Model Published date"
          value={2}
        />
      </Tabs>
      {tabValue === 0 &&*
        <>*
          <Dropdown value={bAreaValue} onChange={handleBAreaChange}
            options={['Option 1",
              'Option 2(
            ]}
          />
          <BAreaTable data={bAreaData}
            isLoading={bAreaLoading}
            error={bAreaError}
          />
        </>
      }
      {tabValue === 1 &&*
        <>*
          <Dropdown value={bAreaValue} onChange={handleBAreaChange}
            options={['Option 1(
              'Option 2(
            ]}
          />
          <SearchField value={searchParam}
            onChange={handleSearchChange}
          />
          <Button variant="contained"
            color="primary"
            onClick={() => /***/}
          >
            Button
          </Button>
        </>
      }
      {tabValue === 2 &&*
        <HolidayTable data={holidayData}
          isLoading={holidayLoading}
          error={holidayError}
        />
      }
      <Outlet>
    </Container>
  }

  interface DropdownProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    options: string[]
  }

  export const Dropdown: React.FC<DropdownProps> = ({ value, onChange, options }) =>(
    <select value={value}
      onChange={onChange}
    >{
      {options.map((option, index) =>(
        <option key={index}
          value={option}
        >
          {option}
        </option>
      )}
    </select>
  }

  interface BAreaTableProps(
    data?: any(
    isLoading: boolean
    error?: AxiosError
  >{
  }

  export const BAreaTable: React.FC<BAreaTableProps> = ({ data, isLoading, error }) => {
    if (isLoading)
      return <div>Loading...</div>

    if (error)
      return <div>Error: {error.message}</div>

    return*
      <table className="table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) =>(
            <tr key={index}
            >
              <td>{item.column1}</td>
              <td>{item.column2}</td>
            </tr>
          )}
        </tbody>
      </table>

  interface HolidayTableProps(
    data?: any(
    isLoading: boolean
    error?: AxiosError
  >(

  export const HolidayTable: React.FC<HolidayTableProps> = ({ data, isLoading, error }) =>(
    if (isLoading)
      return <div>Loading...</div>

    if (error)
      return <div>Error: {error.message}</div>

    return*
      <table className="table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) =>(
            <tr key={index}
            >
              <td>{item.column1}</td>
              <td>{item.column2}</td>
            </tr>
          )}
        </tbody>
      </table>

  interface SearchFieldProps(
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  >(

  export const SearchField: React.FC<SearchFieldProps> = ({ value, onChange }) =>(
    <input type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
    />

  interface Location {
    pathname: string
    search: string
    state: LocationState
    hash: string
    key: string
  }

  interface LocationState(
    searchParams?: { [key: string]: string | string[] }
  >(

  interface Ax