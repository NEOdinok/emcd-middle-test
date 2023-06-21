import axios from 'axios';
import { useCallback } from 'react';

export const api = axios.create({
	baseURL: 'https://randomuser.me/api/?results=10'
});

//infinite scroll/query are essentially a version of pagination and
//we will be requesting a page of results at a time
export const getEntriesPage = async (entries = 10, options = {}) => {
	const response = await api.get(`/?results=${entries}`, options);
	return response.data();
}
