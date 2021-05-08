import { Login, Match, Index, Logout } from "faunadb";
import { getClient } from ".";

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

// Export functions
export { FaunaLogin, TokenLogout };
