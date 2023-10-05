import HeroVideoSource from '../assets/video.mp4'

export function HeroVideo() {
    return (
        <>
            <video className="h-screen w-full object-cover animate-clip-from-top-animation" autoPlay muted loop playsInline>
                <source src={HeroVideoSource} type="video/mp4" />
                <source src={HeroVideoSource} type="video/ogv" />
                <source src={HeroVideoSource} type="video/webm" />
            </video>
        </>
    )
}