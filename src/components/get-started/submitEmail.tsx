import { useState } from "react"
import { Send2 } from "../../icons/send2.tsx"
import { Player, Controls } from '@lottiefiles/react-lottie-player'

export const SubmitEmail = () => {

    const [state, setState] = useState(false)
    const [modal, setModal] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        const value = e.target.email.value

        if(value.length < 1){
            setState(true)
            return
        }

        if(!value.includes('@')){
            setState(true)
            return
        }

        if(value.split('@')[1].length < 1 || value.split('@')[0].length < 1){
            setState(true)
            return
        }

        setState(false)
        setModal(true)
        e.target.reset()

    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <>
            <div data-aos='fade-down' style={state ? { border: '1px solid red' } : { border: '0px solid transparent' } } className="bg-[#0a0a0a] mt-4 md:pl-6 px-2 py-2 flex justify-between max-w-[400px] rounded-full relative">
                <form onSubmit={handleSubmit} className="w-full flex justify-between">
                    <input name="email" className="w-full outline-none bg-transparent max-w-[200px]" type="text" placeholder="Email" />
                    <button type="submit" className="bg-spotifyGreen px-5 py-2 hover:bg-spotifyGreen/80 transition-all rounded-full text-black">
                        <span className="hidden lg:block">
                            Sign Up
                        </span>
                        <span className="block lg:hidden">
                            <Send2 />
                        </span>
                    </button>
                </form>
                {state && 
                    <span className="text-red-500 mt-2 absolute -bottom-6 md:-bottom-8">
                        Ingresa un email valido.
                    </span>
                }
            </div>
            <div className={!modal ? 'hidden' : 'w-full h-full fixed flex justify-center items-center bg-black/70 z-[100] top-0 left-0'}>
                <div className="mx-5 md:mx-0 md:w-3/4 px-4 lg:w-1/2 py-10 flex flex-col justify-center items-center bg-deepBlack rounded-2xl shadow-sm shadow-white">
                    <div id="animation">
                        <Player
                            autoplay
                            loop
                            keepLastFrame={true}
                            src="/sent.json"
                            style={{ width: '300px', height: '300px' }}
                        >
                            <Controls visible={false} />
                        </Player>
                    </div>
                    <div className='flex justify-center items-center'>
                        <h2 className='text-white text-center text-3xl font-semibold'>
                            Successful Registration!
                        </h2>
                    </div>
                    <button className="bg-spotifyGreen/80 text-black px-5 py-2 rounded-full mt-5" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}