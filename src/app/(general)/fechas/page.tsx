export default function Fechas() {
  return (
    <main className='container mx-auto border-4 border-red-500'>
      <h1 className='text-center text-5xl'>Página de fechas</h1>
      <ul className='border-4 border-green-500 py-3'>
        <li className='flex flex-col items-center gap-y-3 border-2 border-yellow-300'>
          <h2>01 de Agosto</h2>
          <p>Antofagasta</p>
          <button>Entradas</button>
          <hr />
        </li>
        <li className='flex flex-col items-center gap-y-3 border-2 border-yellow-300'>
          <h2>02 de Agosto</h2>
          <p>Iquique</p>
          <button>Entradas</button>
        </li>
        <li className='flex flex-col items-center gap-y-3 border-2 border-yellow-300'>
          <h2>03 de Agosto</h2>
          <p>Arica</p>
          <button>Entradas</button>
        </li>
      </ul>
    </main>
  )
}
