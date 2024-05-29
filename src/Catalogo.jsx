import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card, Badge, Label, TextInput, Select, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const example = [{
  title: 'EDIFICIO RESIDENCIAL EN VILLA ASIA',
  imgSrc: 'https://placehold.co/600x400',
  imgAlt: 'Placeholder image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem sus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  price: '$100,000',
  tags: ['Casa', '2 plantas', 'Conjunto Cerrado', 'Villa Asia'],
}, {
  title: 'EDIFICIO RESIDENCIAL EN UNARE I',
  imgSrc: 'https://placehold.co/600x400',
  imgAlt: 'Placeholder image 2',
  description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Aenean la',
  price: '$100,000',
  tags: ['Casa', '1 planta', '7 Cuartos', 'Unare I'],
}, {
  title: 'EDIFICIO RESIDENCIAL EN UNARE II',
  imgSrc: 'https://placehold.co/600x400',
  imgAlt: 'Placeholder image 2',
  description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, s. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
  price: '$100,000',
  tags: ['Casa', '1 planta', '7 Cuartos', 'Unare II'],
}]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-gray-300 flex'>
      <aside className='w-full max-w-xs bg-gray-100 h-auto min-h-screen lg:block hidden py-8 px-5'>
        <div className='w-full p-3'>
          <div className='mb-3'>
            <div className="mb-2 block">
              <Label value="Metros Cuadrados:" className='text-lg font-semibold' />
            </div>
            <div className='flex gap-5'>
              <TextInput type="number" placeholder="34 m2" />
              <TextInput type="number" placeholder="134 m2" />
            </div>
          </div>

          <div className='mb-3'>
            <div className="mb-2">
              <Label value='Tipo:' className='text-lg font-semibold'></Label>
            </div>
            <Select>
              <option value='casa'>Casa</option>
              <option value='apartamento'>Apartamento</option>
              <option value='condominio'>Condominio</option>
            </Select>
          </div>

          <div className='mb-3'>
            <div className="mb-2">
              <Label value='Comercialización:' className='text-lg font-semibold'></Label>
            </div>
            <Select>
              <option value='casa'>Venta</option>
              <option value='apartamento'>Traspaso</option>
              <option value='condominio'>Alquiler</option>
            </Select>
          </div>

          <div className='grid grid-cols-2 gap-2'>
            <div className='mb-3'>
              <div className="mb-2">
                <Label value='Baños:' className='text-lg font-semibold'></Label>
              </div>

              <TextInput type="number" placeholder="2" />
            </div>

            <div className='mb-3'>
              <div className="mb-2">
                <Label value='Habitaciones:' className='text-lg font-semibold'></Label>
              </div>

              <TextInput type="number" placeholder="4" />
            </div>

          </div>

          <div className='mb-3'>
            <div className="mb-2">
              <Label value='Precio Maximo:' className='text-lg font-semibold'></Label>
            </div>

            <TextInput type="number" placeholder="100$" />
          </div>

          <Button className='w-full' size='lg'>Filtrar</Button>
        </div>
      </aside>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center py-10 px-3 w-full'>
        {example.map((el, index) => {
          return (
            <Link className='h-min' to='/login' key={el.title}>
              <Card
                className="max-w-[21rem]"
                imgAlt="Placeholder image"
                imgSrc="https://placehold.co/600x400"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.title}
                </h5>
                <div className='flex flex-wrap gap-2'>
                  {el.tags.map((tag, index) => {
                    return (
                      <Badge size='sm' color={['warning', 'success', 'purple', 'info', 'indigo', 'pink'][Math.floor(Math.random() * 6)]} key={el.title + tag}>{tag}</Badge>
                    )
                  })}
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {el.description}
                </p>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default App
