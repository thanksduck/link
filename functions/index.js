export async function onRequest(context) {
    const {
        request,
        evn,
        params,
        waitUntil,
        next,
        data,
    } = context;
    return new Response("Hello Functions");
}