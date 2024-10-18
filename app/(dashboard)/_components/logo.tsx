import Link  from "next/link"
import Image from "next/image"


export const Logo = () => {
    return (
        <>
            <Link href="/">
                <Image
                    src={"/logo.png"}
                    alt="Logo"
                    width={200}
                    height={160}
                />
            </Link>
        </>
    )
}