import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await container;
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