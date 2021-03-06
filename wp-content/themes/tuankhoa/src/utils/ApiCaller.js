class ApiCaller {
    constructor() {
        const appUrl = 'http://tuankhoa.xxx';

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
    }

    // Method for getting data from the provided end point url
    api(endPoint, method = 'GET', body = {}) {
        if (method === 'GET') {
            var esc = encodeURIComponent,
                query = Object.keys(body)
                    .map(k => esc(k) + '=' + esc(body[k]))
                    .join('&');
            return fetch(`${endPoint}?${query}`, {
                method: method,
            }).then(res => res.json())
                .catch(err => console.log(err));
        } else {
            return fetch(endPoint, {
                method: method,
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(err => console.log(err));
        }
    }
    getAllPosts() {
        return this.api(this.postsEndPoint, 'GET', {
            _embed: true
        });
    }


    getLastestPosts(limit = 4) {
        return this.api(this.postsEndPoint, 'GET', {
            _embed: true,
            per_page: limit
        });
    }


    getPost(postSlug) {
        return this.api(this.postsEndPoint, 'GET', {
            _embed: true,
            slug: postSlug
        }).then(res => res[0]);
    }
}

export default new ApiCaller;