const Navbar = ()=>{
    return (
        <div>
            <div className="w-auto h-15vh bg-blue-400 border-2 border-solid p-3 flex flex-row justify-center items-center">
                <div className="text-4xl font-bold text-white border-2 border-solid border-black p-2">
                Todo App
                </div>
                <div className="text-2xl font-bold border-2 border-solid border-white bg-amber-200 rounded-[25%] p-1">
                Home
                </div>
                <div>
                <button className="text-2xl font-bold border-2 border-solid border-white bg-amber-200 rounded-[25%] p-1">
                    Login
                </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;