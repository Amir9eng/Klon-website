
const Info = () => {
  return (
    <section className="bg-[url(/assets/info.png)] bg-no-repeat text-center sm:text-left relative bg-cover bg-center mx-auto flex flex-col items-center justify-center pt-20 pb-44">
      <p><span className="text-4xl font-normal text-white sm:text-6xl">Welcome to </span><span className="text-6xl font-normal text-yellow-400">KLon</span></p>
      <p className="text-white text-3xl sm:text-[35px] font-normal">We Make Business Personal</p>
      <div className="w-[70%] pt-12 text-center text-white text-[26px] font-normal">KLon Services is a Leading Service Provider of Herbicide, Lawn Care,Snow Removal, and Custom Sprayers</div>

      <div className="absolute flex items-center sm:w-4/5 px-6 sm:px-12 bg-white rounded-2xl top-[80%] sm:top-[75%]">
        <div className="py-6 text-center sm:pt-16 sm:pb-14 sm:text-left">
          <p className="text-3xl font-semibold text-green-600 mb-7">NEW! We now offer all landscape and garden services at your fingertips!</p>
          <p className="text-2xl font-normal text-neutral-950 block sm:w-[70%]">KLon Services and Greenblade have joined forces and are now your one-stop-shop for everything green, snowy, maintained, and serviced in your yard, on your acreage, or at your commercial property.</p>
        </div>
        <div className="absolute -bottom-6 -right-20">
          <img src="/public/assets/image 4.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Info