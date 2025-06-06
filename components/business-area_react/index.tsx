
        React component (BusinessArea.tsx):
        import React, { useState, useMemo } from 'react';
        import { useParams, useSearchParams } from '@tanstack/router';
        import { useTheme } from '@mui/material/styles';
        import { Box, Typography } from '@mui/material';
        import { BusinessAreaProps } from './types';
        
        const BusinessArea: React.FC<BusinessAreaProps> = ({
          businessAreaName,
        }) => {
          const theme = useTheme();
          const { businessArea } = useParams();
          const [searchParams] = useSearchParams();
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);
          
          const businessAreaNameMemo = useMemo(() => {
            if (businessArea) {
              return businessArea.toUpperCase();
            }
            return '';
          }, [businessArea]);
          
          const fetchData = async () => {
            try {
              setLoading(true);
              // Replace this with actual API call
              await new Promise((resolve) => setTimeout(resolve, 1000));
              setLoading(false);
            } catch (err) {
              setError(err);
              setLoading(false);
            }
          };
          
          React.useEffect(() => {
            fetchData();
          }, []);
          
          if (loading) {
            return <div>Loading...</div>;
          }
          
          if (error) {
            return <div>Error: {error.message}</div>;
          }
          
          return (
            <Box>
              <Typography variant="h3" color="primary">
                {businessAreaNameMemo}
              </Typography>
            </Box>
          );
        };
        
        export default BusinessArea;
        
        types/BusinessAreaProps.ts:
        export interface BusinessAreaProps {
          businessAreaName: string;
        }