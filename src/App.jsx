import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import useCrud from './hooks/useCrud'
import UserCard from './UserCard'



function App() {

  const [closeForm, setCloseForm] = useState(true)

  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useCrud()
  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      <br />
      <button onClick={() => setCloseForm(false)} className='App__btn'>Open Form</button>
      <div className={`form__container ${closeForm && 'close__form'}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className='user__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
