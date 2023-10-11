import { Cart } from "@/ui/molecules/Cart";
import { NavBar } from "@/ui/molecules/NavBar";

export async function Header() {
	return (
		<div className="fixed flex w-full items-center justify-between bg-red-600 pb-2 pt-2 ">
			<NavBar />
			<Cart />
		</div>
	);
}
