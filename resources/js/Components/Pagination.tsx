import { MetaLinksPaginate } from "@/types/public";
import { Link } from "@inertiajs/react";
import React from "react";

interface PaginateProps {
    links: MetaLinksPaginate[];
}

const Pagination: React.FC<PaginateProps> = ({ links }) => {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={
                        "inline-block py-2 px-3 mx-0.5 rounded-lg text-gray-300 text-xs " +
                        (link.active ? "bg-gray-700 " : "") +
                        (!link.url
                            ? "!text-gray-500 cursor-not-allowed"
                            : "hover:bg-gray-700")
                    }
                ></Link>
            ))}
        </nav>
    );
};

export default Pagination;
