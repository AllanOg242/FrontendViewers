export const Api = {
    async call(
        url,
        options = {
            method: 'GET',
            credentials: 'include',
            headers: {},
        }
    ) {
        const { method, credentials, headers } = options

        if (!credentials) {
            options = { ...options, credentials: 'include' }
        }

        options = Object.assign({}, options, {
            headers,
        })

        return fetch("http://178.33.234.128:8022/api/articles/", options)
    },

    async get(
        url,
        options = {
            method: 'GET',
            credentials: 'include',
        }
    ) {
        return this.call("http://178.33.234.128:8022/api/articles/", { ...options, method: 'GET' })
    },

    async post(
        url,
        options = {
            method: 'POST',
            credentials: 'include',
        }
    ) {
        return this.call("http://178.33.234.128:8022/api/articles/", { ...options, method: 'POST' })
    },
}
