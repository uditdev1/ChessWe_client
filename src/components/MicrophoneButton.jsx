import { useEffect, useState } from 'react';

function MicrophoneButton({muted}) {
    const [isMuted, setIsMuted] = useState(muted);

    useEffect(() => {
        setIsMuted(muted);
    }, [muted]);

    return (
        <>
            <label
                htmlFor="checkbox"
                className="relative w-12 h-12 flex justify-center items-center bg-gray-700 text-white rounded-full cursor-pointer transition-all duration-300 ease-in-out"
            >
                <div
                    className={`${
                        !isMuted ? 'opacity-100 z-10' : 'opacity-0'
                    } w-full h-full flex justify-center items-center transition-all ease-in-out`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-mic-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"></path>
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
                    </svg>
                </div>
                <div
                    className={`${
                        isMuted ? 'opacity-100 z-10' : 'opacity-0'
                    } absolute inset-0 w-full h-full flex justify-center items-center transition-all ease-in-out`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-mic-mute-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"></path>
                        <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"></path>
                    </svg>
                </div>
            </label>
        </>
    );
}

export default MicrophoneButton;
