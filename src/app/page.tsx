import { getCollectionsList } from "@/api/collections";

import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

export default async function Home() {
	const collections = await getCollectionsList();

	return (
		<div>
			<h1 className="text-center text-9xl">Aloha!</h1>
			<div className="mt-10">
				<h2 className="pb-6 text-xl">Check out our newest collections!</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{collections.map((collection) => (
						<ul key={collection.id}>
							<CollectionListItem collection={collection} key={collection.id} />
						</ul>
					))}
				</div>
			</div>
		</div>
	);
}
