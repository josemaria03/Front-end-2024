import React from 'react';
import { Card, CardContent, CardActions, ListItemText, IconButton, TextField, Button, Grid, Checkbox, Typography } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';

const Tareacompletada = ({
  completedTodos, 
  handleToggleComplete, 
  handleEditTodo, 
  handleDeleteTodo, 
  editTodo, 
  editText, 
  setEditText, 
  handleUpdateTodo
}) => {
  return (
    <>
      <Typography variant="h5" component="h2" style={{ color: 'green', marginBottom: '20px' }}>
        TAREAS COMPLETADAS
      </Typography>
      <Grid container spacing={2}>
        {completedTodos.map((task) => (
          <Grid item xs={12} key={task.id}>
            <Card style={{ backgroundColor: '#f8f8f8', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <CardContent>
                {editTodo?.id === task.id ? (
                  <>
                    <TextField 
                      variant="outlined" 
                      fullWidth 
                      value={editText} 
                      onChange={(e) => setEditText(e.target.value)} 
                      style={{ marginBottom: '10px' }}
                    />
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={handleUpdateTodo}
                    >
                      GUARDAR
                    </Button>
                  </>
                ) : (
                  <>
                    <ListItemText primary={task.title} secondary="Completed" style={{ marginBottom: '10px' }} />
                    <CardActions>
                      <Checkbox
                        checked={task.completed}
                        onChange={() => handleToggleComplete(task)}
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleOutlineIcon />}
                      />
                      <IconButton aria-label="edit" onClick={() => handleEditTodo(task)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete" onClick={() => handleDeleteTodo(task.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Tareacompletada;
