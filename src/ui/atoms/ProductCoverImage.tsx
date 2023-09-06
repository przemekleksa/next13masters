// import Image from "next/image";

interface ProductCoverImageProps {
	src: string;
	alt: string;
}

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="cursor-pointer duration-500 hover:scale-110">
			{/* <Image src={src} alt={alt} width={420} height={420} className="cursor-pointer" /> */}
			<img src={src} alt={alt} width={320} height={320} />
		</div>
	);
};
