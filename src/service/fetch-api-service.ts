export default function fetchApiService() {
    async function sendRequest(request: Request): Promise<Response> {
        const res: Response = await fetch(request);
        return res;
    }
    return sendRequest;
}