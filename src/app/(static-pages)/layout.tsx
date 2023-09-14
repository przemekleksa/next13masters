import { type ReactNode } from "react";

interface StaticLayoutProps {
	children: ReactNode;
}

export default function StaticLayout({ children }: StaticLayoutProps) {
	return (
		<div className="mx-auto max-w-md text-center" data-testid="group-layout">
			{children}
		</div>
	);
}
