import { NextSeo } from 'next-seo'

import { Page } from '../_App/interfaces'

import { useState, useCallback } from 'react'

export const MainPage: Page = () => {
  const TestPage = () => {
    const [name, setName] = useState('')

    const onChange = useCallback(
      (e) => {
        setName(e.target.value)
      },
      [setName]
    )

    return (
      <div>
        <form>
          <input
            type="text"
            value={name}
            onChange={onChange}
            placeholder="Your Name 1"
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
      <TestPage />
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
