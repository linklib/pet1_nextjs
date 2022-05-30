import { NextSeo } from 'next-seo'

import { Page } from '../_App/interfaces'

import { useState } from 'react'



export const MainPage: Page = () => {

const TestPage = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
    </div>
  )
}



  return (
    <>
      <NextSeo title="Main page" description="Main page description" />
      <div>Main Page 123</div>
      <TestPage/>
    </>
  )
}

/**
 * Example.
 * Commit this if not needed.
 *
 * Get data before render page
 */
MainPage.getInitialProps = () => {
  return {
    statusCode: 200,
  }
}

export default MainPage
