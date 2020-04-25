import React from 'react';
import Example from '@theme/Example';

const title = 'Blog';
const description = 'A layout example that shows off a blog page with a list of posts.';

function Blog() {
    return (
        <Example description={description} title={title} type="blog">
            <link rel="stylesheet" href="/css/layouts/blog.css" />
            <div id="layout" className="pure-g">
                <div className="sidebar pure-u-1 pure-u-md-1-4">
                    <div className="hdr">
                        <h1 className="brand-title">A Sample Blog</h1>
                        <h2 className="brand-tagline">Creating a blog layout using Pure</h2>

                        <nav className="nav">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <a className="pure-button" href="http://purecss.io">Pure</a>
                                </li>
                                <li className="nav-item">
                                    <a className="pure-button" href="http://yuilibrary.com">YUI Library</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="content pure-u-1 pure-u-md-3-4">
                    <div>
                        {/*<!-- A wrapper for all the blog posts -->*/}
                        <div className="posts">
                            <h1 className="content-subhead">Pinned Post</h1>

                            {/*<!-- A single blog post -->*/}
                            <section className="post">
                                <header className="post-header">
                                    <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" className="post-avatar" src="/img/common/tilo-avatar.png" />

                                    <h2 className="post-title">Introducing Pure</h2>

                                    <p className="post-meta">
                                        By <a href="#" className="post-author">Tilo Mitra</a> under <a className="post-category post-category-design" href="#">CSS</a> <a className="post-category post-category-pure" href="#">Pure</a>
                                    </p>
                                </header>

                                <div className="post-description">
                                    <p>
                                        Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a href="https://speakerdeck.com/tilomitra/pure-bliss">slides from the presentation</a>. Although it looks pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="posts">
                            <h1 className="content-subhead">Recent Posts</h1>

                            <section className="post">
                                <header className="post-header">
                                    <img width="48" height="48" alt="Eric Ferraiuolo&#x27;s avatar" className="post-avatar" src="/img/common/ericf-avatar.png" />

                                    <h2 className="post-title">Everything You Need to Know About Grunt</h2>

                                    <p className="post-meta">
                                        By <a className="post-author" href="#">Eric Ferraiuolo</a> under <a className="post-category post-category-js" href="#">JavaScript</a>
                                    </p>
                                </header>

                                <div className="post-description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </section>

                            <section className="post">
                                <header className="post-header">
                                    <img width="48" height="48" alt="Reid Burke&#x27;s avatar" className="post-avatar" src="/img/common/reid-avatar.png" />

                                    <h2 className="post-title">Photos from CSSConf and JSConf</h2>

                                    <p className="post-meta">
                                        By <a className="post-author" href="#">Reid Burke</a> under <a className="post-category" href="#">Uncategorized</a>
                                    </p>
                                </header>

                                <div className="post-description">
                                    <div className="post-images pure-g">
                                        <div className="pure-u-1 pure-u-md-1-2">
                                            <a href="http://www.flickr.com/photos/uberlife/8915936174/">
                                                <img alt="Photo of someone working poolside at a resort"
                                                     className="pure-img-responsive"
                                                     src="http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg" />
                                            </a>

                                            <div className="post-image-meta">
                                                <h3>CSSConf Photos</h3>
                                            </div>
                                        </div>

                                        <div className="pure-u-1 pure-u-md-1-2">
                                            <a href="http://www.flickr.com/photos/uberlife/8907351301/">
                                                <img alt="Photo of the sunset on the beach"
                                                     className="pure-img-responsive"
                                                     src="http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg" />
                                            </a>

                                            <div className="post-image-meta">
                                                <h3>JSConf Photos</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="post">
                                <header className="post-header">
                                    <img width="48" height="48" alt="Andrew Wooldridge&#x27;s avatar" className="post-avatar" src="/img/common/andrew-avatar.png" />

                                    <h2 className="post-title">YUI 3.10.2 Released</h2>

                                    <p className="post-meta">
                                        By <a className="post-author" href="#">Andrew Wooldridge</a> under <a className="post-category post-category-yui" href="#">YUI</a>
                                    </p>
                                </header>

                                <div className="post-description">
                                    <p>
                                        We are happy to announce the release of YUI 3.10.2! You can find it now on the Yahoo! CDN, download it directly, or pull it in via npm. We’ve also updated the YUI Library website with the latest documentation.
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="footer">
                            <div className="pure-menu pure-menu-horizontal">
                                <ul>
                                    <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">About</a></li>
                                    <li className="pure-menu-item"><a href="http://twitter.com/yuilibrary/" className="pure-menu-link">Twitter</a></li>
                                    <li className="pure-menu-item"><a href="http://github.com/pure-css/pure/" className="pure-menu-link">GitHub</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Example>
    );
}

export default Blog;
