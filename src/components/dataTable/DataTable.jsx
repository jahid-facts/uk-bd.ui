import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { theme } from "../../theme";

const DataTable = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredItems = data.filter((item) => {
      return columns.some((column) => {
        const cellValue = String(item[column.field]).toLowerCase();
        return cellValue.includes(searchValue);
      });
    });

    setFilteredData(filteredItems);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end", // Change to "flex-end" for proper alignment
        }}
      >
        <TextField
          variant="outlined"
          label="Search"
          size="small"
          onChange={handleSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                {/* Use InputAdornment */}
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{ boxShadow: theme.palette.boxShadow, border: "none", p: 3 }}
          rows={filteredData}
          slots={{ toolbar: GridToolbar }}
          pageSize={12}
          rowsPerPageOptions={[12, 24, 36]}
          pagination 
          sortingOrder={["asc", "desc"]}
          columns={[...columns]}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default DataTable;
