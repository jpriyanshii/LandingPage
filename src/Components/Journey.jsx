const Journey=()=>{
    return(
        <div className="flex flex-col items-center justify-center ml-[3rem]">
            <div className="flex flex-col items-center justify-center">
               <h1 className="text-2xl font-bold mb-2">Journey To The Skies Made Simple</h1>
               <p>Welcome to the Journey page!</p>
            </div>

            <div className="flex justify-around mt-[2rem]">
                <div className="w-[20rem] h-[10rem]  self-baseline-last pl-5 rounded-t-2xl flex flex-col justify-center bg-gray-300">
                    <h1 className="text-xl font-medium mb-2">Find Your</h1>
                    <h1 className="text-xl font-medium mb-2">Destination</h1>
                </div>
                <div className="size-[10rem] sm:size-[19rem] text-white bg-blue-700 rounded-t-2xl flex flex-col gap-2 md:gap-4 pl-1.5 md:pl-4 justify-center">
                    <div>
                       <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.25rem]  font-bold">Book</p>
                       <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1.25rem] font-bold">A Ticket</p>
                    </div>
                    <p className=" text-[0.5rem] sm:text-[0.6rem] md:text-[0.825rem]">Lorem obcaecati, deserunt fugit! Itaque sint beatae consequuntur commodi facere explicabo suscipit eveniet! Lorem ipsum dolor sits, voluptate quos! Voluptas eum aperiam asperiores, ipsam illum maxime sapiente voluptatem fugiat at, fugit eos minima fuga, veniam repellendus quasi ea?</p>
                    <p className="text-[0.5rem] sm:text-[0.6rem] md:text-[0.825rem]">Learn More </p>
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