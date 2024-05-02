import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import AuthPage from "./pages/authpage/AuthPage"
import PageLayout from "./layout/pagelayout/PageLayout"
import ProfilePage from "./pages/profilepage/ProfilePage"

function App() {
  
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/auth' element={<AuthPage/> } />
          <Route path='/:username' element={<ProfilePage/> } />
        </Routes>
      </PageLayout>
    </>
  ) 
}

export default App
