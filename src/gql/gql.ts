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
    "fragment ProductListFragment on Query {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}": types.ProductListFragmentFragmentDoc,
    "fragment ProductListItem on Product {\n  ...ProductListItemDescription_Product\n  images(first: 1) {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query GetProductsList {\n  ...ProductListFragment\n}": types.GetProductsListDocument,
    "\n\tfragment ProductListItemDescription_Product on Product {\n\t\tname\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t}\n\t\tprice\n\t}\n": types.ProductListItemDescription_ProductFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListFragment on Query {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductListFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  ...ProductListItemDescription_Product\n  images(first: 1) {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsList {\n  ...ProductListFragment\n}"): typeof import('./graphql').GetProductsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductListItemDescription_Product on Product {\n\t\tname\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t}\n\t\tprice\n\t}\n"): typeof import('./graphql').ProductListItemDescription_ProductFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
