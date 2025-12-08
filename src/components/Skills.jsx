export default function Skills({ href, icon, title }) {
    return(

        <li className="shrink-0 min-w-max px-6">
            <a
                href={href}
                className="
                    flex items-center gap-2 text-2xl font-bold text-[#9ca3af] min-w-max px-4 py-2 
                    hover:text-[#cbd0d8] lg:text-3xl
                ">
                {icon}
                <span>{title}</span>
            </a>
        </li>

    );
};