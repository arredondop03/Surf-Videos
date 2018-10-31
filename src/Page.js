import React   from "react";
import { Route } from 'react-router-dom'

import  VideosList  from './components/VideosList'
import  VideoPlayer  from './components/VideoPlayer'

const Page = () => {
  return (
    <div> 
      <Route path="/" exact component={VideosList} />
      <Route path="/:id" exact render={(props) => <VideoPlayer {...props}/>}  />
    </div>
  )
}

export default Page

