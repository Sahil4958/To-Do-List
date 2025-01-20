
import { Toaster } from 'react-hot-toast';
import InputField from './components/InputField';
import Todos from './components/Todos';
import useGetTodos from './hooks/useGetTodos'
import './styles/index.css'

function App() {
 const {todos, loading} = useGetTodos();

  return (
    <div>
    <Toaster/>
    <InputField/>
    <Todos todos={todos} loading={loading} />
    </div>
  )
}

export default App
