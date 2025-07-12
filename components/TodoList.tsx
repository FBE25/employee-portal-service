
'use client';
import { useState } from 'react';

interface TodoItem {
  id: number;
  task: string;
  progress: number;
  priority: 'high' | 'medium' | 'low';
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, task: 'Complete quarterly report', progress: 75, priority: 'high' },
    { id: 2, task: 'Review team performance', progress: 40, priority: 'medium' },
    { id: 3, task: 'Schedule client meeting', progress: 90, priority: 'high' },
    { id: 4, task: 'Update project documentation', progress: 25, priority: 'low' },
  ]);
  
  const [newTask, setNewTask] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const addTodo = () => {
    if (!newTask.trim()) return;
    
    const newTodo: TodoItem = {
      id: Date.now(),
      task: newTask,
      progress: 0,
      priority: 'medium'
    };
    
    setTodos([...todos, newTodo]);
    setNewTask('');
    setShowAddForm(false);
  };

  const updateProgress = (id: number, progress: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, progress } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-amber-900">To-Do List</h3>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-amber-900 text-white px-3 py-2 rounded-lg hover:bg-amber-800 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line w-4 h-4 flex items-center justify-center text-lg"></i>
        </button>
      </div>

      {showAddForm && (
        <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          />
          <div className="flex space-x-2 mt-3">
            <button
              onClick={addTodo}
              className="bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors text-sm whitespace-nowrap cursor-pointer"
            >
              Add Task
            </button>
            <button
              onClick={() => {
                setShowAddForm(false);
                setNewTask('');
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm whitespace-nowrap cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {todos.map((todo) => (
          <div key={todo.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 mb-2">{todo.task}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(todo.priority)}`}>
                  {todo.priority}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
              >
                <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center text-lg"></i>
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-amber-900">{todo.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${todo.progress}%` }}
                ></div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={todo.progress}
                onChange={(e) => updateProgress(todo.id, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
