import { useState } from "react"
import RegisterForm from './RegisterForm'

const RegisterHere: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      {!showForm && (
        <button
          onClick={toggleForm}
          className="ml-8 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-500"
        >
          Rekisteröidy
        </button>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Rekisteröidy</h2>
              <button
                onClick={toggleForm}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <RegisterForm />
          </div>
        </div>
      )}
    </>
  )
}

export default RegisterHere
