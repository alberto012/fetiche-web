import sucursal1 from "../assets/sucursal1.png"
import sucursal2 from "../assets/sucursal2.png"
const Sucursales = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-medium">Pedi Ahora</h1>
      <div className="flex flex-wrap  items-center justify-center gap-4">
        <div className="rounded-full border-4 border-neutral-800 p-4">
          <img src={sucursal2} className="rounded-full max-h-60"/>
         </div>
         <div className="rounded-full border-4 border-neutral-800 p-4">
          <img src={sucursal1} className="rounded-full max-h-60"/>
          
         </div>
      </div>
    </div>
  )
}

export default Sucursales
