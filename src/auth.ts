import {
	Login,
	Match,
	Index,
	Logout,
	Create,
	Tokens,
	Ref,
	Select,
	Get,
	Collection,
} from "faunadb";
import { getClient } from ".";
import { MatchIndex } from "./query";

/**
 * User Login password
 *
 * @param  {string} index index from the user's collection
 * @param  {string} value value to match to the index
 * @param  {string} password password of the user
 */
const FaunaLogin = (index: string, value: string, password: string) => {
	return Login(Match(Index(index), value), {
		password: password,
	});
};

/**
 * Logout token
 *
 * @param  {string} token the token to logout
 * @param  {boolean=false} logoutAll logout all current tokens related
 */
const TokenLogout = (token: string, logoutAll: boolean = false) => {
	return getClient(token).query(Logout(logoutAll));
};

/**
 * Create New Token using Reference to collection
 *
 * @param  {string} collection
 * @param  {Mixed} value
 */
const AuthToken = <T>(collection: string, value: T) => {
	return Create(Tokens(), {
		instance: Ref(Collection(collection), value),
	});
};
/**
 * Create New Token by selecting the reference from Match
 *
 * @param  {string} index
 * @param  {Mixed} value
 */
const AuthTokenByIndex = <T>(index: string, value: T) => {
	return Create(Tokens(), {
		instance: Select("ref", MatchIndex(index, value)),
	});
};

// Export functions
export { FaunaLogin, TokenLogout, AuthToken, AuthTokenByIndex };
