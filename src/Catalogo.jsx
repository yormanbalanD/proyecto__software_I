import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Card } from 'flowbite-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-gray-300 grid grid-cols-2'>
      <aside className='w-full max-w-xs bg-gray-100 h-screen'>

      </aside>
      <div>
        {[].map(() => {
          return (
            <Card
              className="max-w-sm"
              imgAlt="Placeholder image"
              imgSrc="https://placehold.co/600x400"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                EDIFICIO RESIDENCIAL EN VILLA ASIA
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                si
              </p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default App
