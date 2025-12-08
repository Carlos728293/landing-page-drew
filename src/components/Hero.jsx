import Skills from './Skills';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight, faVideo, faCamera, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

export default function Hero() {

    const skills = [
        { icon: faVideo, title: "#Filmmakers" },
        { icon: faCamera, title: "#Photographers" },
        { icon: faWandMagicSparkles, title: "#Designers" },
    ];

    const loop = [...skills, ...skills, ...skills];

    return (

        <section  className="
            bg-[#111827] text-stone-50 pt-[117px] px-4 pb-9 text-center
            dark:bg-stone-50 dark:text-stone-900 lg:flex lg:items-center lg:flex-col
            lg:pt-[137px] lg:pb-13 overflow-x-hidden
        ">
            {/* Primeiro CTA */}
            <a href="#" className='
                bg-[#1f2937] py-1.5 px-3 rounded-2xl
                dark:bg-[#e5e7eb] lg:font-semibold
            '>
                <FontAwesomeIcon icon={faLightbulb} />
                <span className='pl-2 pr-3.5'>Mostre suas ideias para o mundo</span>
                <FontAwesomeIcon icon={faAngleRight} />
            </a>

            {/* Titulo */}
            <h1 className="
                text-3xl font-extrabold pt-7 pb-4
                lg:text-6xl lg:w-[58%] lg:pb-6
            ">
                Transforme sua marca em uma 
                <span className="text-blue-400"> experiência inesquecível</span>
            </h1>

            {/* Paragrafo */}
            <p className="
                text-[#9ca3af] text-[17px] font-light dark:text-stone-700
                lg:text-2xl lg:w-[60%]
            ">
                Imagens profissionais que elevam sua marca, destacam seus 
                diferenciais e criam experiências visuais que permanecem na memória.
            </p>

            {/* Secundo CTA */}
            <div className="
                pt-7 flex items-center flex-col gap-2.5 font-bold lg:flex-row lg:gap-5
                lg:w-[40%] lg:text-[20px] lg:pt-12
            ">
                <a href="#" className='bg-blue-400 py-2 w-full rounded-lg'>
                    <span className='pr-3'>Conhecer</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <a href="#" className='py-2 w-full border-2 border-blue-400 rounded-lg'>
                    <FontAwesomeIcon icon={faVideo} />
                    <span className='pl-3'>Assistir vídeo</span>
                </a>
            </div>

            {/* Skills */}
            <div className="mt-9 overflow-hidden fade-edges lg:mt-12">
                <ul className='flex items-center whitespace-nowrap slide hover:animate-paused'>
                    {loop.map((s, i) => (
                        <Skills 
                            key={i}
                            href={"#"}
                            icon={<FontAwesomeIcon icon={s.icon} />}
                            title={s.title}   
                        />
                    ))}
                </ul>
            </div>
        </section>

    );

};