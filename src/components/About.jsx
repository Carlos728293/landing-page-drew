import filmaker from "../assets/images/about/filmaker.jpg";
import photographer from "../assets/images/about/photographer.jpg";

export default function About() {

    return(

        <section className="
            bg-[#111827] text-stone-50 px-4 py-6 border-t border-[#4b5563]
            dark:bg-stone-50 dark:text-stone-900
            lg:flex lg:items-center lg:justify-between lg:px-32 lg:pt-30
        ">
        
            {/* Conteúdo */}
            <div className="lg:w-1/2">
                <h2 className="text-blue-500 lg:text-[20px]">Sobre nós</h2>
                <h3 className="text-3xl font-extrabold lg:text-4xl">Sua empresa Online</h3>

                <p className="text-[#9ca3af] my-5 dark:text-stone-700 lg:text-[20px]">
                    Somos especialistas em transformar produtos em histórias visuais que conquistam. Nossa missão é cuidar de toda a presença digital da sua marca: desde a fotografia e filmagem dos seus produtos até o design estratégico para mídias sociais. Planejamos, criamos e gerenciamos seu conteúdo, focados em engajar o público e alavancar suas vendas.
                </p>

                <p className="text-[#9ca3af] mb-10 dark:text-stone-700 lg:text-[20px]">
                    Combinamos criatividade, estratégia e inovação para garantir que sua marca brilhe e alcance o destaque que merece.
                </p>
            </div>

            {/* Imagens */}
            <div className="flex items-start gap-4 pr-4">
                <img
                    src={filmaker}
                    alt="Filmaker"
                    className="w-1/2 -translate-y-6 rounded-xl lg:w-[17vw] shadow-lg object-cover"
                />

                <img
                    src={photographer}
                    alt="Photographer"
                    className="w-1/2 rounded-xl lg:w-[17vw] shadow-lg object-cover"
                />
            </div>

        </section>


    );

}