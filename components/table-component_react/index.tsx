
        import { 
          useNavigate, 
          useSearch,
          useParams,
          Link 
        } from '@tanstack/react-router';
        import { 
          styled,
          useTheme 
        } from '@mui/material/styles';
        import { 
          Container,
          Typography,
          Box,
          CircularProgress,
          Alert,
          Table,
          TableHead,
          TableRow,
          TableCell,
          TableBody,
          TableSortLabel,
          TableContainer
        } from '@mui/material';
        
        interface Column {
          id: string;
          label: string;
          minWidth?: number;
          align?: 'right'
          format?: (value: number) => string;
}

interface DataItem {
  [key: string]: string;
}

interface TableComponentProps {
  data: DataItem[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableComponent(props: TableComponentProps) {
  const navigate = useNavigate();
  const { search } = useSearch();
  const { id } = useParams();

  const [sortBy, setSortBy] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');
  const [sortedData, setSortedData] = React.useState<DataItem[]>([]);

  React.useEffect(() => {
    // Sorting logic based on column and order
    const sortedData = props.data.sort((a, b) =>(
      (sortOrder === 'asc' ? 1 : -1) * («
        a[sortBy] > b[sortBy] ? 1 : -1
      »)
   );

    setSortedData(sortedData);
  }, [props.data, sortBy, sortOrder));
)

  const handleSortRequest = (column: string) => {
    if (column === sortBy){
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    ) else {
      setSortBy(column);
      setSortOrder('asc')
    }
  }

  return(
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {Object.keys(props.data[0]).map((column) =>(
              <StyledTableCell key={column}
                align="left"
                sortDirection={sortBy === column ? sortOrder : false}
                onClick={() => handleSortRequest(column)}>
                <TableSortLabel
                  active={sortBy === column}
                  direction={sortBy === column ? sortOrder : 'asc')
                >
                  {column}
                </TableSortLabel>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) =>(
            <StyledTableRow key={row.id}
              hover>
              {Object.values(row).map((value, index) =>(
                <StyledTableCell key={index}
                  align="left"
                >
                  {value}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
}

Note: The provided code snippet is a complete React component using TypeScript, Material-UI, and TanStack Router as requested. Make sure to install the required dependencies and adjust the code according to your project setup.