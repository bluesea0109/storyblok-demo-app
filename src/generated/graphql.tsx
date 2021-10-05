import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockScalar: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  JsonScalar: any;
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type Asset = {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  focus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']>;
  content_string?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: Maybe<Scalars['ISO8601DateTime']>;
  /** Greater than float value */
  gt_float?: Maybe<Scalars['Float']>;
  /** Greater than integer value */
  gt_int?: Maybe<Scalars['Int']>;
  /** Matches exactly one value */
  in?: Maybe<Scalars['String']>;
  /** Matches any value of given array */
  in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Matches exactly one integer value */
  in_int?: Maybe<Scalars['Int']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: Maybe<Scalars['String']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: Maybe<Scalars['ISO8601DateTime']>;
  /** Less than float value */
  lt_float?: Maybe<Scalars['Float']>;
  /** Less than integer value */
  lt_int?: Maybe<Scalars['Int']>;
  /** Matches all without the given value */
  not_in?: Maybe<Scalars['String']>;
  /** Matches all without the given value */
  not_like?: Maybe<Scalars['String']>;
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']>;
  isFolder?: Maybe<Scalars['Boolean']>;
  isStartpage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['BlockScalar']>;
  component?: Maybe<Scalars['String']>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type PostComponent = {
  __typename?: 'PostComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  author?: Maybe<Story>;
  component?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  long_text?: Maybe<Scalars['JsonScalar']>;
  title?: Maybe<Scalars['String']>;
};


export type PostComponentAuthorArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};

export type PostFilterQuery = {
  author?: Maybe<FilterQueryOperations>;
  title?: Maybe<FilterQueryOperations>;
};

export type PostItem = {
  __typename?: 'PostItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PostComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type PostItems = {
  __typename?: 'PostItems';
  items?: Maybe<Array<Maybe<PostItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ProductComponent = {
  __typename?: 'ProductComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JsonScalar']>;
  images?: Maybe<Array<Maybe<Asset>>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProductFilterQuery = {
  name?: Maybe<FilterQueryOperations>;
  url?: Maybe<FilterQueryOperations>;
};

export type ProductItem = {
  __typename?: 'ProductItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<ProductComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type ProductItems = {
  __typename?: 'ProductItems';
  items?: Maybe<Array<Maybe<ProductItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  Links?: Maybe<LinkEntries>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  PostItem?: Maybe<PostItem>;
  PostItems?: Maybe<PostItems>;
  ProductItem?: Maybe<ProductItem>;
  ProductItems?: Maybe<ProductItems>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};


export type QueryTypeContentNodeArgs = {
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
};


export type QueryTypeLinksArgs = {
  paginated?: Maybe<Scalars['Boolean']>;
  starts_with?: Maybe<Scalars['String']>;
};


export type QueryTypePageItemArgs = {
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};


export type QueryTypePageItemsArgs = {
  by_slugs?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
};


export type QueryTypePostItemArgs = {
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};


export type QueryTypePostItemsArgs = {
  by_slugs?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<PostFilterQuery>;
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
};


export type QueryTypeProductItemArgs = {
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};


export type QueryTypeProductItemsArgs = {
  by_slugs?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<ProductFilterQuery>;
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
};


export type QueryTypeTagsArgs = {
  starts_with?: Maybe<Scalars['String']>;
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type Story = {
  __typename?: 'Story';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']>;
  createdAt?: Maybe<Scalars['String']>;
  firstPublishedAt?: Maybe<Scalars['String']>;
  fullSlug?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isStartpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['String']>;
  releaseId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sortByDate?: Maybe<Scalars['String']>;
  tagList?: Maybe<Array<Maybe<Scalars['String']>>>;
  translatedSlugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'QueryType', PostItems?: { __typename?: 'PostItems', items?: Array<{ __typename?: 'PostItem', content?: { __typename?: 'PostComponent', title?: string | null | undefined, image?: string | null | undefined, intro?: string | null | undefined, long_text?: any | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'QueryType', ProductItems?: { __typename?: 'ProductItems', items?: Array<{ __typename?: 'ProductItem', content?: { __typename?: 'ProductComponent', name?: string | null | undefined, description?: any | null | undefined, url?: string | null | undefined, images?: Array<{ __typename?: 'Asset', id?: number | null | undefined, title?: string | null | undefined, filename: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const GetPostsDocument = gql`
    query getPosts {
  PostItems {
    items {
      content {
        title
        image
        intro
        long_text
      }
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts {
  ProductItems {
    items {
      content {
        name
        description
        images {
          id
          title
          filename
        }
        url
      }
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    