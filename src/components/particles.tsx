import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 100,
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: 0.1,
                        straight: false,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            speed: 0.1,
                            sync: false,
                        },
                        value: { min: 0, max: 0.5 },
                    },
                    size: {
                        value: 1,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};