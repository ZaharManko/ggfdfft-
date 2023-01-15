import logo from './logo.svg';
import stylle from './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

/* let DialogsComponent  = () =>{
  return (
    <Dialogs/>
  )
}
let ProfileComponents = () =>{
  return(
    <Profile/>
  )
} */
/*  posts={state.ProfilePage.PostsData}  DialogsData={state.ProfilePage.DialogsData}  MessagesData={state.DialogsPage.MessagesData} */
function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-dialogs__container'>
          {/*<Route  path='/dialogs' component={DialogsComponent} />
          <Route path='/profile' component={ProfileComponents} />*/}

          <Route  path='/dialogs' render={() =><Dialogs store={props.store} DialogsData={props.state.ProfilePage} MessagesData={props.state.DialogsPage}/>} />
          <Route path='/profile' render={() => <Profile dispatch={props.dispatch}  postsProfilePage={props.state.ProfilePage}/>} />
          
          {/* <Profile/>*/}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
