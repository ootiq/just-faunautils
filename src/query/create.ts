import { Create, Collection, If, Exists, Expr } from "faunadb";
import { DataProps } from "../utils";

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

/**
 * Create Data if the reference doesn't exist.
 *
 * @param  {Expr} ref
 * @param  {string} collection
 * @param  {DataProps} data
 */
const CreateIfNotExists = (ref: Expr, collection: string, data: DataProps) => {
	return If(Exists(ref), false, Create(Collection(collection), { data }));
};

// export functions
export { CreateData, CreateIfNotExists };
