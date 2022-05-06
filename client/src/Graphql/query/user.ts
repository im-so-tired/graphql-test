import { gql } from "@apollo/client";

export const getUsers = gql(`
	query{
		getUsers{
			email
			phone
			id
		}
	}
`);
