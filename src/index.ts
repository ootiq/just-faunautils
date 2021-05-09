import { Client, query } from "faunadb";
import type { FaunaResponseProps } from "./query/match";

const getClient = (token: string) => {
	return new Client({ secret: token });
};
const q = query;

// export utils
export { getClient, q };
export type { FaunaResponseProps };
