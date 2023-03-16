import Link from "next/link";
import Button from "../core/Button";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> { };

export default function Navbar(htmlAttributes: NavbarProps) {
    return (
        <nav className="py-3 border-b border-gray-200 flex flex-row items-center justify-between
            w-full mx-auto max-xl:w-[920px] max-lg:w-[740px] max-md:w-[600px] max-sm:w-[420px]" {...htmlAttributes}>
            <span className="nav-logo-wrapper">
                <Link href={"/"}>
                    <h1 className="nav-logo-text">{"Governance Forum"}</h1>
                </Link>
            </span>
            <div className="nav-options-list-wrapper">
                <ul className="nav-options-list flex flex-row items-center justify-end gap-3">
                    {[
                        { path: "/login", content: <Button variant={"outline"}>{"Login"}</Button> },
                        { path: "/signup", content: <Button>{"Signup"}</Button> },
                    ]?.map((option, optionIndex) => (
                        <li className="nav-option-item" key={optionIndex}>
                            <Link href={option?.path}>
                                {option?.content}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}