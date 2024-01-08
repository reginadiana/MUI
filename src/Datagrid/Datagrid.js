import { Box } from '@mui/material'

import { DataGrid as DataGridComponent } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DataGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
      <DataGridComponent {...data} checkboxSelection initialState={{
        ...data.initialState,
        pagination: { paginationModel: { pageSize: 10 } },
      }}
        pageSizeOptions={[5, 10, 25]} />
    </Box>
  )
}
