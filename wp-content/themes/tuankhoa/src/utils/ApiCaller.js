class ApiCaller {
    constructor() {
        const appUrl = 'http://tuankhoa.xxx';

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
    }

    // Method for getting data from the provided end point url
    api(endPoint, method = 'GET', body = []) {
        if (method === 'GET') {
            return fetch(endPoint, {
                method: method
            }).then(res => res.json()).catch(err => console.log(err));
        } else {
            return fetch(endPoint, {
                method: method,
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).catch(err => console.log(err));
        }
    }

    getPosts() {
        return this.api(this.postsEndPoint);
    }
}

export default new ApiCaller;