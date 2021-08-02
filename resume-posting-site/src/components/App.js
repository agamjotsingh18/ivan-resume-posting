import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
// import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
// import ForgotPassword from "./ForgotPassword"
// import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex"
      style={{ minHeight: "100vh" }}
      id="big"
    >
      <div className="w-100" id="ful">
        <Router>
          {/* <AuthProvider> */}
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
            </Switch>
          {/* </AuthProvider> */}
        </Router>
      </div>
    </Container>
  )
}

export default App