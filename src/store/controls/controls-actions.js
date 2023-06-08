export const SET_SEARCH = '@@controls/SET_SEARCH'
export const SET_REGION = '@@controls/SET_REGION'
export const CLEAR_CONTROLES = '@@controls/CLEAR_CONTROLES'

export const setSearch = (search) => ({
	type: SET_SEARCH,
	payload: search
})

export const setRegion = (region) => ({
	type: SET_REGION,
	payload: region
})

export const clearControles = () => ({
	type: CLEAR_CONTROLES
})
