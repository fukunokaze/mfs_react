
interface APIResponse<T> {
    Message: string,
    IsError: boolean,
    Payload?: T
};

export default APIResponse;