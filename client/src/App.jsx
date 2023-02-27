import { useGetAllUsersQuery, useCreateUserMutation } from "./store/services/userService"


function App() {
/* const {data, isError, isLoading}=useGetAllUsersQuery(); */
const [data]=useCreateUserMutation();
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ data:", data)

  const handleClick = () =>{
    data({
      name:"David",
      lastName:"Farias",
      password:"123456",
      email:"david@eldavid.com",
      tel:"123456789",
      role:"user"
    })
  }

  return (
    <>
      <button onClick={handleClick}>Soy un boton aca re loco</button>
    </>
  )
}

export default App
