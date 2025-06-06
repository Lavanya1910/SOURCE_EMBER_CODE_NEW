
        React component (Dropdown.tsx):
        import React, { useState } from 'react'
        import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material'
        import { useNavigate, useLocation } from 'react-router-dom'

        interface DropdownProps {
    /** The selected value */
    value: string
    /** The options to display */
    options: string[]
    /** The label for the dropdown */
    label: string
}

        const Dropdown: React.FC<DropdownProps> = ({ value, options, label }) => {
    const [selectedValue, setSelectedValue] = useState(value)
    const navigate = useNavigate()
    const location = useLocation()

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value)
        navigate(`/${event.target.value}`)
    }

    return(
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={selectedValue}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

        export default Dropdown