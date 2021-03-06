import { Get, Match, Index, Collection, Create } from "faunadb";

interface FaunaResponseProps<T> {
	ref: object;
	ts: number;
	data: T;
	ttl?: number;
}
/**
 * Get the data using index value.
 *
 * @param  {string} index
 * @param  {Mixed} value
 */
function MatchIndex<T>(index: string, value: T) {
	return Get(Match(Index(index), value));
}
/**
 * Get data with the document's ref.id
 *
 * @param  {string} collection
 * @param  {Mixed} value
 */
function MatchCollections<T>(collection: string, value: T) {
	return Get(Collection(collection), value);
}

// Export functions
export { MatchIndex, MatchCollections };

// Export types
export type { FaunaResponseProps };
