
import './App.css'
import Grandpa from './components/Grandpa'
import HookForm from './components/HookForm'
import RefForm from './components/RefForm'
import ReusableForm from './components/ReusableForm'
import SimpleForm from './components/SimpleForm'
import StatefulForm from './components/StatefulForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log(data);
  // }
  // const handleUpdateProfile = data => {
  //   console.log(data);
  // }
  return (
    <>
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReusableForm formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'
      >
        <div>
          <h2>Update</h2>
          <p>Always keep update your profile</p>
        </div>
      </ReusableForm> */}

      <Grandpa></Grandpa>
    </>
  )
}

export default App
