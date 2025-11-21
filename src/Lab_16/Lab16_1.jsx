// Lab16_1.jsx
import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const initialStudents = [
  { id: 1, name: "Alice", age: 20, branch: "CSE" },
  { id: 2, name: "Bob", age: 21, branch: "MECH" },
  { id: 3, name: "Charlie", age: 19, branch: "CIVIL" },
];

const Lab16_1 = () => {
  const [rows, setRows] = useState(initialStudents);

  // Controlled selection model for DataGrid
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [mode, setMode] = useState("add"); // "add" | "edit"

  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    branch: "",
  });

  const selectedId = rowSelectionModel[0] ?? null;

  const selectedRow = useMemo(
    () => rows.find((r) => r.id === selectedId) || null,
    [rows, selectedId]
  );

  const handleOpenAdd = () => {
    setMode("add");
    setFormValues({ name: "", age: "", branch: "" });
    setDialogOpen(true);
  };

  const handleOpenEdit = () => {
    if (!selectedRow) return;
    setMode("edit");
    setFormValues({
      name: selectedRow.name,
      age: String(selectedRow.age),
      branch: selectedRow.branch,
    });
    setDialogOpen(true);
  };

  const handleDelete = () => {
    if (!selectedId) return;
    setRows((prev) => prev.filter((row) => row.id !== selectedId));
    setRowSelectionModel([]);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleDialogSubmit = () => {
    const { name, age, branch } = formValues;

    if (!name || !age || !branch) {
      alert("Please fill all fields");
      return;
    }

    if (mode === "add") {
      const newId = rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1;
      const newStudent = {
        id: newId,
        name,
        age: Number(age),
        branch,
      };
      setRows((prev) => [...prev, newStudent]);
    } else if (mode === "edit" && selectedId) {
      setRows((prev) =>
        prev.map((row) =>
          row.id === selectedId
            ? { ...row, name, age: Number(age), branch }
            : row
        )
      );
    }

    setDialogOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", width: 100, type: "number" },
    { field: "branch", headerName: "Branch", flex: 1 },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Lab 16 – Static CRUD with MUI Data Grid
      </Typography>

      <Paper sx={{ p: 2 }}>
        {/* Actions */}
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button variant="contained" onClick={handleOpenAdd}>
            Add Student
          </Button>

          <Button
            variant="outlined"
            onClick={handleOpenEdit}
            disabled={!selectedRow}
          >
            Edit Selected
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            disabled={!selectedRow}
          >
            Delete Selected
          </Button>
        </Stack>

        {/* Data Grid */}
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5]}
            // SINGLE selection controlled by state:
            rowSelectionModel={rowSelectionModel}
            onRowSelectionModelChange={(newSelection) => {
              // newSelection is an array of selected row ids
              // We only care about single row, so keep as-is
              setRowSelectionModel(newSelection);
            }}
            checkboxSelection={false}
            disableRowSelectionOnClick={false}
            sx={{
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.04)",
              },
            }}
          />
        </div>
      </Paper>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth>
        <DialogTitle>
          {mode === "add" ? "Add Student" : "Edit Student"}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleFormChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={formValues.age}
            onChange={handleFormChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Branch"
            name="branch"
            value={formValues.branch}
            onChange={handleFormChange}
            placeholder="e.g. CSE, MECH, CIVIL"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleDialogSubmit}>
            {mode === "add" ? "Add" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Lab16_1;
