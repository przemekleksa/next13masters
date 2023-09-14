import React from "react";

interface Page1LaooutProps {
	children: React.ReactNode;
}

export default function Page1Layout({ children }: Page1LaooutProps) {
	return <div>page layout 1 {children} </div>;
}
