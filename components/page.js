import React from 'react';
import NavigationBar from './navbar'
import PageFooter from './footer'

export default function Page({ children }) {
  return (
    <>
    <div id="outerbox">
      <NavigationBar/>
      <br></br>
      <div id="innerbox">
        {children}
      </div>
      <PageFooter/>
    </div>

    <style jsx>{`
    #outerbox
    {
       max-width:80%;
       min-width:500px;
       display: inline-block;
       margin-left: auto;
       margin-right: auto;
       display: block;
    }

    #innerbox {
      padding-bottom: 30px;
    }

    @media only screen and (max-width: 500px) {
      #innerbox {
        padding-bottom: 40px;
      }    
    }
  `}</style>
  </>

  )
}