/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CollectionItem on Collection {\n  name\n  description\n  products {\n    ...ProductListItem\n    collections {\n      name\n    }\n  }\n  image {\n    url\n    size\n    width\n    height\n  }\n}": types.CollectionItemFragmentDoc,
    "query CollectionsList {\n  collections {\n    ...CollectionsListFragment\n  }\n}": types.CollectionsListDocument,
    "fragment CollectionsListFragment on Collection {\n  id\n  name\n  description\n  slug\n  image {\n    url\n    size\n    width\n    height\n  }\n}": types.CollectionsListFragmentFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n    collections {\n      name\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetListPage($skip: Int!) {\n  products(skip: $skip, first: 2) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListPageDocument,
    "query ProductVariantBySizeAndColor($id: ID!) {\n  product(where: {id: $id}) {\n    name\n    id\n  }\n  productColorVariants {\n    color\n    name\n    id\n  }\n  productSizeColorVariants {\n    color\n    size\n    name\n    id\n  }\n}": types.ProductVariantBySizeAndColorDocument,
    "fragment ProductListFragment on Query {\n  products(first: 20) {\n    ...ProductListItem\n  }\n}": types.ProductListFragmentFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollection($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionItem\n  }\n}": types.ProductsGetByCollectionDocument,
    "query ProductsGetList {\n  ...ProductListFragment\n}": types.ProductsGetListDocument,
    "query ProductsSearchList($searchTerm: String!) {\n  products(where: {name_contains: $searchTerm}) {\n    ...ProductListItem\n  }\n}": types.ProductsSearchListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionItem on Collection {\n  name\n  description\n  products {\n    ...ProductListItem\n    collections {\n      name\n    }\n  }\n  image {\n    url\n    size\n    width\n    height\n  }\n}"): typeof import('./graphql').CollectionItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsList {\n  collections {\n    ...CollectionsListFragment\n  }\n}"): typeof import('./graphql').CollectionsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionsListFragment on Collection {\n  id\n  name\n  description\n  slug\n  image {\n    url\n    size\n    width\n    height\n  }\n}"): typeof import('./graphql').CollectionsListFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n    collections {\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListPage($skip: Int!) {\n  products(skip: $skip, first: 2) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductVariantBySizeAndColor($id: ID!) {\n  product(where: {id: $id}) {\n    name\n    id\n  }\n  productColorVariants {\n    color\n    name\n    id\n  }\n  productSizeColorVariants {\n    color\n    size\n    name\n    id\n  }\n}"): typeof import('./graphql').ProductVariantBySizeAndColorDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListFragment on Query {\n  products(first: 20) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductListFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollection($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionItem\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  ...ProductListFragment\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchList($searchTerm: String!) {\n  products(where: {name_contains: $searchTerm}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsSearchListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
