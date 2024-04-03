import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import {  Feed,VideoDetail,ChannelDetail, SearchFeed, Navbar} from './components'

function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor:'#000'}}>
        <Navbar/>
        <h1>Helo</h1>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/video/:id" exact element={<VideoDetail/>} />
          <Route path="/channel/:id" exact element={<ChannelDetail/>} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed/>} />
        </Routes>

      </Box>
    </BrowserRouter>
  )
}

export default App
