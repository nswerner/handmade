export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const APPEND_SEARCH = "APPEND_SEARCH";

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH
    };
};

export const appendSearch = (input) => {
    return {
        type: APPEND_SEARCH,
        input: input
    }
}

