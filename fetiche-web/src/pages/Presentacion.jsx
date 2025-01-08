import fetichenombre from "../assets/Burger/querico.mp4"

const Presentacion = () => {
  return (
    <div className="border-none p-0 m-0 h-screen w-screen flex items-center justify-start">
      <div className="w-full flex justify-center">
        <video src={fetichenombre} autoPlay loop muted className="rounded-full object-contain">
        </video>
      </div>
    </div>
  )
}

export default Presentacion
