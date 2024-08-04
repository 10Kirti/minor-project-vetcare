import robert from '../../assets/Images/robert.png'
function Feedback () {
    return(
        <>
            <div className="feedback">
                <div className="container m-auto">
                
                    <div className='feedback-card'>
                    <div className='text-center'>
                        <h2 className='text-5xl font-bold mb-24'>Happy Clients and Feedback</h2>
                    </div>
                    <div className="grid grid-cols-3 place-items-center gap-4">
                        {/* first-feedback */}
                        <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                            <div className=" rounded-full bg-custom_green  absolute top-[-15%] left-[10%]">
                            <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                            </div>
                            <p className='text-gray-400 px-3'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <div className="flex items-center gap-4 mt-5">
                                <img src={robert} alt="man" className='rounded-full h-[100px]'/>
                                <div className='px-4'>
                                    <h2 className='text-3xl font-semibold'>Robert Scott</h2>
                                    <span>Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                        {/* secod-feedback */}
                        <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                            <div className="rounded-full bg-custom_green absolute top-[-15%] left-[10%]">
                            <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                            </div>
                            <p className='text-gray-400 px-3'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <div className="flex items-center gap-4 mt-5">
                                <img src={robert} alt="man" className='rounded-full h-[100px]'/>
                                <div className='px-4'>
                                    <h2 className='text-3xl font-semibold'>Robert Scott</h2>
                                    <span>Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                        {/* third-feedback */}
                        <div className="relative py-10 shadow-md bg-custom_gray px-5 rounded-md">
                            <div className=" flex items-cenrounded-full bg-custom_green absolute top-[-15%] left-[10%]">
                            <i className="fa-solid fa-quote-left text-white text-3xl p-5"></i>
                            </div>
                            <p className='text-gray-400 px-3'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <div className="flex items-center gap-4 mt-5">
                                <img src={robert} alt="man" className='rounded-full h-[100px]'/>
                                <div className='px-4'>
                                    <h2 className='text-3xl font-semibold'>Robert Scott</h2>
                                    <span>Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Feedback;