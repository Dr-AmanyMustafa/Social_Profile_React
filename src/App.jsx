import './App.css'
import ProfileDetails from './components/ProfileDetails/ProfileDetails'
import ProfilePicture from './components/ProfilePicture/ProfilePicture'

function App() {

  return (
    
      <main className='main_container'>
        <ProfilePicture></ProfilePicture>
        <ProfileDetails></ProfileDetails>
      </main>
  )
}

export default App
