interface Props {
  bgColor: string
}

const Footer = ({ bgColor }: Props) => {
  return (
    <footer className={`${bgColor} pt-24 pb-20`}>
      <section className="flex flex-col items-center justify-center w-[95%] md:w-[60%] mx-auto">
        <div className="flex flex-col items-center sm:items-stretch justify-between w-full md:flex-row"> 
          <div>
            <h3 className="mb-12 text-2xl font-medium text-white ">Call Klon Today</h3>
            <div className="pl-5 mb-5 border-l-4 border-l-neutral-700">
              <p className="text-white text-xl font-normal leading-[35px]">General Inquiries</p>
              <p className="text-green-600 text-xl font-normal underline leading-[35px]">780-841-5985</p>
            </div>
            <div className="mb-5 pl-5 border-l-4 h-[65px] border-l-neutral-700">
              <p className="text-white text-xl font-normal leading-[35px]">Klon Offic</p>
              <p className="text-green-600 text-xl font-normal underline leading-[35px]">780-841-5985</p>
            </div>
          </div>
          <div>
            <h3 className="mb-12 text-2xl font-medium text-white ">Mail Address</h3>
            <div className="mb-5 pl-5 border-l-4 h-[65px] border-l-neutral-700">
              <p className="text-white text-xl font-normal leading-[35px]">P.O. Box 23375Grande <br /> Prairie, ABT8V 7G7</p>
            </div>
          </div>
          <div>
            <h3 className="mb-12 text-2xl font-medium text-white">Physical Address</h3>
            <div className="mb-5 pl-5 border-l-4 h-[65px] border-l-neutral-700">
              <p className="text-white text-xl font-normal leading-[35px]">713040 Range Rd 64,Grande <br /> Prairie, ABT0H 0W0</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-20 mb-24 sm:flex-row mt-11 ">
          <img src="/assets/image 9.svg" alt="" />
          <img src="/assets/image 6.svg" alt="" />
          <img src="/assets/image 8.svg" alt="" />
          <img src="/assets/image 7.svg" alt="" />
          <img src="/assets/image 10.svg" alt="" />
        </div>
        <p className="text-base font-normal text-white">© 2020 - 2022 KLon Services | <span className="underline ">Sitemap</span> | <span className="underline">Grande Prairie Web Design</span></p>
      </section>
    </footer>
  )
};

export default Footer;
