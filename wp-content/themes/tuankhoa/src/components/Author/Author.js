import React from 'react';

class Author extends React.Component {
    render() {
        const author = this.props.post._embedded.author[0];
        return (
            <div class="post-author">
                <div class="author-image">
                    <img
                        src={author.avatar_urls[96]}
                        alt={author.name}
                    />
                </div>

                <div class="author-info">
                    <h4 class="name"><b class="light-color">{author.name}</b></h4>

                    <p>{author.description}</p>

                    <ul class="social-icons">
                        <li><a href="#"><i class="ion-social-facebook-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-vimeo-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-pinterest-outline"></i></a></li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default Author;