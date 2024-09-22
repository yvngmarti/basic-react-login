import { useEffect } from "react"

function App() {
  const handleGoogleLogin =()=> {
    window.location.href='http://localhost:3000/api/auth/google/login'
  }

  useEffect(()=> {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if(token){
      // guarda el token en el local storage or algun otro estado
      localStorage.setItem("jwtToken", token)

      // redirige a la vista que se configure
      window.location.href="http://localhost:5173"
    }
  },[])

  return (
    <div className="App">
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default App
