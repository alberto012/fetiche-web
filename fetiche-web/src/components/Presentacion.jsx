import lomito from "../assets/lomito.png"
const Presentacion = () => {
  return (
    <div className="border-b border-none pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
<h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Fetiche</h1>
<span className="text-6xl font-extralight lg:mt-2 lg:text-3xl tracking-tight">Lomiteria</span>
<p className="my-2 max-w-xl py-6 font-light tracking-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum atque ab aut rerum qui deserunt velit, eius error facilis explicabo. Tempore porro iure, voluptates iusto similique consequuntur cupiditate sapiente non.</p>
       </div>
        </div>
      <div className="w-full lg:w-1/2 lg:p-8">
        <div>
            <img src={lomito} alt= "foto lomito presentacion"/>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Presentacion
