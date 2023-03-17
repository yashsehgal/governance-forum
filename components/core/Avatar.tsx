import Image from "next/image";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallback?: string | React.ReactNode;
    img?: string;
};

export default function Avatar({ fallback, img, ...htmlAttributes }: AvatarProps) {
    if (img) {
        return (
            <Image src={img} width={"32"} height={"32"} alt={htmlAttributes?.alt || "profile-avatar"} priority />
        )
    } else {
        return (
            <span className={`avatar-content-wrapper w-[32px] h-[32px] rounded-full flex flex-row items-center justify-center gap-0.5` + " " + htmlAttributes?.className}
                {...htmlAttributes}
            >
                {fallback}
            </span>
        )
    }
}