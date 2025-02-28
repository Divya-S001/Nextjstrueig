import Script from 'next/script';
import React from 'react'

function about() {
  return (
    <div>
        <Script>{`alert ("Welcome to about page");`}

</Script>
        
    <h1 className="text-xl  text-black " > Now problem start by Next.js</h1>
    <ul className=' text-black'>
        <li>Full Stack Solution</li>
        <li>File based routing</li>
        <li>Additional feature like router from next/navigation</li>
        <li>Optimized rendering</li>
    </ul>
    </div>
  )
}

export default about;