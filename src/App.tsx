import Form from './components/Form'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Form />
      </main>
    </>
  )
}

export default App
