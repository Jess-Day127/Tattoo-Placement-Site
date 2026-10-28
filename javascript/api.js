/* API Key: pk_48c110edabcd05ee88d4b2c7e108aa66 */

const apiKey = 'pk_48c110edabcd05ee88d4b2c7e108aa66';

async function removeBackground(file) {
    const form = new FormData();
    form.append('file', file);
    form.append('size', 'preview');

    const res = await fetch('https://api.poof.bg/v1/remove', {
        method: 'POST',
        headers: { 'x-api-key': apiKey }, 
        body: form
    });

    if (!res.ok) {
        throw new Error(await res.text());
    }
    return await res.blob();
}