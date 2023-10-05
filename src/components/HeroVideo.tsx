export function HeroVideo() {
    return (
        <>
            <video className="h-screen w-full object-cover animate-clip-from-top-animation" autoPlay muted loop>
                <source src="src/assets/video.mp4" type="video/mp4" />
            </video>
        </>
    )
}