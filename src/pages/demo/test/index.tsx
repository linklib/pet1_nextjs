import { useState } from 'react'

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

export default TestPage
