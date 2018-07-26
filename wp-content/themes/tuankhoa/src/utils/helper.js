export const getPostThumbnail = (post, size = null) => {
    if (post._embedded['wp:featuredmedia']) {
        if (null !== size && post._embedded['wp:featuredmedia'][0].media_details.sizes[size]) {
            return post._embedded['wp:featuredmedia'][0].media_details.sizes[size].source_url;
        }
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    }
    return null;
};
