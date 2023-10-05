import { HeroVideo } from "./components/HeroVideo";
import { HeroText } from "./components/HeroText";
import { MapImages } from "./components/MapImages";

export function Home() {
    return (
        <>
            <HeroText />
            <MapImages />
            <HeroVideo />
        </>
    )
}