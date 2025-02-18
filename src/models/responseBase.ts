
interface APIResponse<T> {
    message: string,
    isError: boolean,
    payload: T
};

export default APIResponse;