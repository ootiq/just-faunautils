import { Get, Match, Index, Collection, Create } from "faunadb";
import { DataProps } from "./utils";

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
const MatchIndex = <T>(index: string, value: T) => {
	return Get(Match(Index(index), value));
};
/**
 * Get data with the document's ref.id
 *
 * @param  {string} collection
 * @param  {Mixed} value
 */
const MatchCollections = <T>(collection: string, value: T) => {
	return Get(Collection(collection), value);
};

/**
 * Create a new data.
 *
 * @param  {string} collection
 * @param  {DataProps} data
 */
const CreateData = (collection: string, data: DataProps) => {
	return Create(Collection(collection), {
		data: data,
	});
};

// Export functions
export { MatchIndex, MatchCollections, CreateData };

// Export types
export type { FaunaResponseProps };
