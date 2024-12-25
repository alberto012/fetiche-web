import logo from "../assets/fetiche.png";
const Nosotros = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl font-medium">
        ¿Quienes <span className="text-neutral-500">somos</span>?
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="imagen empresa"
              className="rounded-2xl max-h-80"
            />
          </div>
         
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
<p className="my-20 max-w-xl px-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam illum harum veritatis omnis? Minus repellendus necessitatibus, voluptatem ducimus sed optio. Dicta explicabo reiciendis dolore non, iste similique suscipit rerum. </p>
          </div>

          </div>
      </div>
    </div>
  );
};

export default Nosotros;
