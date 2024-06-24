export default function Fechas() {
  return (
    <main className='container mx-auto border border-red-500'>
      <h1 className='text-center text-5xl'>Página de fechas</h1>
      <ul className='border border-green-500 py-3'>
        <li className='flex flex-col items-center gap-y-3 border border-yellow-300'>
          <h2>01 de Agosto</h2>
          <p>Antofagasta</p>
          <button className='rounded-none border border-blue-900 px-5'>
            Entradas
          </button>
        </li>
        <li className='flex flex-col items-center gap-y-3 border border-yellow-300'>
          <h2>02 de Agosto</h2>
          <p>Iquique</p>
          <button className='rounded-none border border-blue-900 px-5'>
            Entradas
          </button>
        </li>
        <li className='flex flex-col items-center gap-y-3 border border-yellow-300'>
          <h2>03 de Agosto</h2>
          <p>Arica</p>
          <button className='rounded-none border border-blue-900 px-5'>
            Entradas
          </button>
        </li>
      </ul>
    </main>
  )
}
