const Journey=()=>{
    return(
        <div className="flex flex-col items-center justify-center ml-[3rem]">
            <div>
               <h1 className="text-2xl font-bold mb-2">Journey To The Skies Made Simple</h1>
               <p>Welcome to the Journey page!</p>
            </div>

            <div className="flex justify-around mt-[2rem]">
                <div className="w-[20rem] h-[10rem] self-baseline-last pl-5 rounded-t-2xl flex flex-col justify-center bg-gray-300">
                    <h1 className="text-xl font-medium mb-2">Find Your</h1>
                    <h1 className="text-xl font-medium mb-2">Destination</h1>
                </div>
                <div className="w-[20rem] text-white h-[20rem] pl-5 bg-blue-700 rounded-t-2xl flex flex-col justify-center">
                    <p className="text-xl font-bold">Book</p>
                    <p className="text-xl font-bold">A Ticket</p>
                    <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptate quos! Voluptas eum aperiam asperiores, ipsam illum maxime sapiente voluptatem fugiat at, fugit eos minima fuga, veniam repellendus quasi ea?</p>
                    <p className="text-sm mt-6">Learn More </p>
                </div>
                <div className="w-[20rem] h-[10rem] self-baseline-last pl-5  bg-gray-300 rounded-t-2xl flex flex-col justify-center">
                    <h1 className="text-xl font-medium mb-2">Pay &</h1>
                    <h1 className="text-xl font-medium mb-2">Start Journey</h1>
                </div>
            </div>
        </div>
    )
}
export default Journey