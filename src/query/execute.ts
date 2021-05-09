import { Exists, Expr, If } from "faunadb";
/**
 * Execute function depending on exists.
 *
 * @param  {Expr} ref
 * @param  {boolean} exists
 * @param  {Expr} fql
 */
function Execute(ref: Expr, exists: boolean, fql: Expr) {
	If(Exists(ref), exists, fql);
}

/**
 * Execute function if the reference exists.
 *
 * @param  {Expr} ref
 * @param  {Expr} fql
 */
function ExecuteIfExists(ref: Expr, fql: Expr) {
	Execute(ref, true, fql);
}

/**
 * Execute function if the reference does not exist.
 *
 * @param  {Expr} ref
 * @param  {Expr} fql
 */
function ExecuteIfNotExists(ref: Expr, fql: Expr) {
	Execute(ref, false, fql);
}

// export functions
export { Execute, ExecuteIfExists, ExecuteIfNotExists };
