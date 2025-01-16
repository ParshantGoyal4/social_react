import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HF/Header';
import Footer from './components/HF/Footer';
import Sidebar from './components/HF/Sidebar';
import CreatePost from './components/Subcomponents/CreatePost';
import PostList from './components/Subcomponents/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
let [Selectedtab,setSelectedtab]=useState()

function setup(a){
return setSelectedtab(a)
}

  return (
    <PostListProvider>
    <div className="App">
      <Sidebar Stab = {Selectedtab} Set ={setup}/>
      <div className="content">
      <Header/>
      {Selectedtab !== 'Home'?<PostList/> : <CreatePost/> }
     
      
      <Footer/>
      </div>
    </div>
    </PostListProvider>
    
  );
}

export default App;
