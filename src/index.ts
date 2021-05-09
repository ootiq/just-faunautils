import { Client, query } from "faunadb";

import { FaunaLogin, TokenLogout, AuthToken, AuthTokenByIndex } from "./auth";

import {
	CreateData,
	CreateIfNotExists,
	MatchIndex,
	MatchCollections,
	Execute,
	ExecuteIfNotExists,
	ExecuteIfExists,
} from "./query";
import type { FaunaResponseProps } from "./query/match";

function getClient(token: string) {
	return new Client({ secret: token });
}
const q = query;

// export functions and utils
export {
	getClient,
	q,
	CreateData,
	CreateIfNotExists,
	MatchIndex,
	MatchCollections,
	Execute,
	ExecuteIfNotExists,
	ExecuteIfExists,
	FaunaLogin,
	TokenLogout,
	AuthToken,
	AuthTokenByIndex,
};
export type { FaunaResponseProps };
