const Hero = () => {
    return (
        <section>
            <div className="bg-[url(/assets/group.png)] bg-no-repeat relative bg-cover bg-center min-h-[90vh]"></div>
            <div className="sm:h-[206px] pb-10 pt-32 bg-zinc-900 px-6 sm:px-0 -mt-20 flex sm:flex-row flex-col items-center justify-center sm:pb-0 sm:pt-20 text-base font-medium text-white gap-14">
                <button className="w-[140px] h-[39px] bg-green-500 rounded-[30px]"> Greenblade </button>
                <button> Residential </button>
                <button> Commercial </button>
                <button> Weed Control </button>
                <button> Custom Sprayers </button>
            </div>
        </section>
    )
}

export default Hero