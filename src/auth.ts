import {
	Login,
	Match,
	Index,
	Logout,
	Create,
	Tokens,
	Ref,
	Select,
	Collection,
} from "faunadb";
import { getClient } from ".";
import { MatchIndex } from "./query/match";

// AuthReponseProps is the response from the query when trying to login or creating a token. (unsure)
export interface AuthReponseProps {
	ref: object;
	ts: number;
	instance: object;
	ttl?: number;
	secret: string;
}

/**
 * User Login password
 *
 * @param  {string} index index from the user's collection
 * @param  {string} value value to match to the index
 * @param  {string} password password of the user
 */
function FaunaLogin(index: string, value: string, password: string) {
	return Login(Match(Index(index), value), {
		password: password,
	});
}

/**
 * Logout token
 *
 * @param  {string} token the token to logout
 * @param  {booleanfalse} logoutAll logout all current tokens related
 */
async function TokenLogout(token: string, logoutAll: boolean = false) {
	return await getClient(token).query(Logout(logoutAll));
}

/**
 * Create New Token using Reference to collection
 *
 * @param  {string} collection
 * @param  {Mixed} value
 */
function AuthToken<T>(collection: string, value: T) {
	return Create(Tokens(), {
		instance: Ref(Collection(collection), value),
	});
}
/**
 * Create New Token by selecting the reference from Match
 *
 * @param  {string} index
 * @param  {Mixed} value
 */
function AuthTokenByIndex<T>(index: string, value: T) {
	return Create(Tokens(), {
		instance: Select("ref", MatchIndex(index, value)),
	});
}

// Export functions
export { FaunaLogin, TokenLogout, AuthToken, AuthTokenByIndex };
