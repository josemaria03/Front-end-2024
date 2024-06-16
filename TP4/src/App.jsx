import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, AppBar, Toolbar, Card, CardContent, Grid, Paper, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import Tareapendiente from './components/Tareapendiente';
import Tareacompletada from './components/Tareacompletada';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [editInput, setEditInput] = useState('');
  const [finishedTasks, setFinishedTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const initialTasks = data.slice(0, 10).map(task => ({
          ...task,
          completed: false
        }));
        setTasks(initialTasks);
      });
  }, []);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: tasks.length + finishedTasks.length + 1,
      title: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    setFinishedTasks(finishedTasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
    setEditInput(task.title);
  };

  const updateTask = () => {
    setTasks(tasks.map(task => 
      task.id === taskToEdit.id ? { ...task, title: editInput } : task
    ));
    setFinishedTasks(finishedTasks.map(task => 
      task.id === taskToEdit.id ? { ...task, title: editInput } : task
    ));
    setTaskToEdit(null);
    setEditInput('');
  };

  const toggleTaskComplete = (task) => {
    if (task.completed) {
      setFinishedTasks(finishedTasks.filter(t => t.id !== task.id));
      setTasks([...tasks, { ...task, completed: false }]);
    } else {
      setTasks(tasks.filter(t => t.id !== task.id));
      setFinishedTasks([...finishedTasks, { ...task, completed: true }]);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ mb: 4, backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
            APP TO DO
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ textAlign: 'center', fontWeight: 'medium' }}>
            TRABAJO PRACTICO Nº4 - JOSE MARIA
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ mb: 4, backgroundColor: '#e3f2fd', padding: 2 }}>
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1976d2' }}>
                  TU SIGUIENTE TAREA
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField 
                    label="ESCRIBE AQUI TU SIGUIENTE TAREA" 
                    variant="outlined" 
                    fullWidth 
                    value={taskInput} 
                    onChange={(e) => setTaskInput(e.target.value)} 
                    margin="normal"
                  />
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={addTask}
                    startIcon={<Add />}
                    sx={{ alignSelf: 'center', height: 'fit-content' }}
                  >
                    AGREGAR
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Paper sx={{ padding: 2, backgroundColor: '#ffccbc' }}>
              <Tareapendiente 
                todos={tasks} 
                handleToggleComplete={toggleTaskComplete}
                handleEditTodo={editTask}
                handleDeleteTodo={deleteTask}
                editTodo={taskToEdit}
                editText={editInput}
                setEditText={setEditInput}
                handleUpdateTodo={updateTask}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2, backgroundColor: '#c8e6c9' }}>
              <Tareacompletada 
                completedTodos={finishedTasks} 
                handleToggleComplete={toggleTaskComplete}
                handleEditTodo={editTask}
                handleDeleteTodo={deleteTask}
                editTodo={taskToEdit}
                editText={editInput}
                setEditText={setEditInput}
                handleUpdateTodo={updateTask}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
