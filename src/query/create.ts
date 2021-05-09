import { Create, Collection, If, Exists, Expr } from "faunadb";
import { DataProps } from "../utils";
import { ExecuteIfNotExists } from "./execute";

/**
 * Create a new data.
 *
 * @param  {string} collection
 * @param  {DataProps} data
 */
function CreateData(collection: string, data: DataProps) {
	return Create(Collection(collection), {
		data: data,
	});
}

/**
 * Create Data if the reference doesn't exist.
 * (currently having webpack error)
 *
 * @param  {Expr} ref
 * @param  {string} collection
 * @param  {DataProps} data
 */
function CreateIfNotExists(ref: Expr, collection: string, data: DataProps) {
	return ExecuteIfNotExists(ref, Create(Collection(collection), { data }));
}

// export functions
export { CreateData, CreateIfNotExists };
