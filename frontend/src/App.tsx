import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Login/Signin';
import CreatePost from './components/BlogPost/CreatePost';
import PostList from './components/BlogPost/PostList';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}></Route>
      <Route path='/post' element={<CreatePost/>}></Route>
      <Route path='/blogls' element={<PostList/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
