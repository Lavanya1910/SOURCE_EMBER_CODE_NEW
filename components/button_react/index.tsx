
        // MyButton.tsx
        import React, { useState } from 'react'
        import { 
          useNavigate, 
          useSearch,
          useParams,
          Link 
        } from '@tanstack/react-router'
        import { 
          styled,
          useTheme 
        } from '@mui/material/styles'
        import { 
          Container,
          Typography,
          Box,
          CircularProgress,
          Alert,
          Button 
        } from '@mui/material'

        interface MyButtonProps {
          // Add your props here
        }

        const MyButton: React.FC<MyButtonProps> = ({
          // Add your props here
        }) => {
          // Add your state here

          const navigate = useNavigate()
          const search = useSearch()
          const params = useParams()
          const theme = useTheme()

          // Add your hooks here

          const handleClick = () => {
            // Add your click handling here
          }

          return(
            <Container maxWidth="sm">
              <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Create LLM Use Case
                </Typography>
                <Button onClick={handleClick} disabled={/* Add your disabled condition here */}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth>
                  Create LLM Use Case
                </Button>
              </Box>
            </Container>
          }
        }

        export default MyButton