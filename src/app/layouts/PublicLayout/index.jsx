import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import LoginPage from "../../pages/Login";
import HomePage from "../../pages/Home";
import ProfilePage from "../../pages/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function PublicLayout(props) {
  return (
    <Router>
      <Navbar
        container="fullwidth"
        color="dark"
        height="110"
        width="30"
        src="https://img.icons8.com/bubbles/2x/form.png"
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
      {/* <Footer position="left" text="The Form" /> */}
    </Router>
  );
}

export default PublicLayout;
// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// // import LoadingBoundary from "./LoadingBoundary";
// import Header from "../../components/Navbar";
// // import LinkList from "./LinkList";
// // import CreateLink from "./CreateLink";
// import Login from "../../components/LoginForm";

// const App = () => (
//   <div className="center w85">
//     <Router>
//       <Header />
//       <div className="ph3 pv1 background-gray">
//         {/* <LoadingBoundary> */}

//         <Switch>
//           {/* <Route exact path="/" component={LinkList} />
//           <Route exact path="/create" component={CreateLink} /> */}
//           <Route exact path="/login" component={Login} />
//         </Switch>

//         {/* </LoadingBoundary> */}
//       </div>
//     </Router>
//   </div>
// );

// export default App;
