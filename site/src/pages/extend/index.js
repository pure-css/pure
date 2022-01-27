import Link from '@docusaurus/Link';
import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import CodeBlock from '../../../components/CodeBlock';
import SectionHeader from '../../../components/SectionHeader';
import { stripIndent } from 'common-tags';

const title = 'Extend';
const description = 'Build on top of Pure.';

function Extend() {
    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content">
                <p>
                    One of our goals when developing Pure was to make it extremely extensible. By including Pure and writing some CSS on top of it, you can ensure that your site or app works across browsers, while looking truly unique. Best of all, your CSS file size will remain tiny, which is a great thing for mobile users and others with slow connections.
                </p>

                <aside>
                    <p>
                        Want a quick start? Take a look at some <Link href="/layouts/">layouts</Link> that we've built on top of Pure.
                    </p>
                </aside>

                <SectionHeader heading="Style Guide" />

                <h3>Based on SMACSS</h3>

                <p>
                    Pure is broken up into a set of responsive modules. From the beginning, we adopted <a href="http://smacss.com/">SMACSS</a> as a convention for writing our CSS. For those who are new to SMACSS, you should give it a quick read, especially the section on <a href="http://smacss.com/book/type-module">module rules</a>.
                </p>

                <h3>Class Name Conventions</h3>

                <p>
                    One of the conventions in Pure is for every module to have a standard class name for common rules across a module, and then have additional class names for specific presentational rules for a specific sub-module. All classes start with a <code>pure-</code> prefix to prevent collisions. In addition, we try not to have presentational class names. Instead of calling something <code>pure-form-horizontal</code>, we prefer to call it <code>pure-form-aligned</code>. This prevents a tight coupling between class names and styles, which is good for maintainability.
                </p>

                <p>
                    For example, let's consider the HTML and CSS for a <Link href="/forms/">Stacked Form</Link>:
                </p>

                <h4>Stacked Form: HTML</h4>

                <p>
                    A stacked form is created by adding two class names, <code>pure-form</code> and <code>pure-form-stacked</code>.
                </p>

                <CodeBlock>
                    {'<form class="pure-form pure-form-stacked"></form>'}
                </CodeBlock>

                <h4>Stacked Form: CSS</h4>

                <p>
                    The two class names serve different purposes. One is used as a general selector to group common rules for all forms, while the other defines specific rules for a stacked form.
                </p>

                <CodeBlock>
                    {stripIndent`
                        /*
                            Standard rules that all Pure Forms have. This includes rules for
                            styling .pure-form &lt;inputs&gt;, &lt;fieldsets&gt;, and &lt;legends&gt;, as well as layout
                            rules such as vertical alignments.
                        */
                        .pure-form { ... }

                        /*
                            Specific rules that apply to stacked forms. This includes rules
                            such as taking child &lt;input&gt; elements and making them display: block
                            for the stacked effect.
                        */
                        .pure-form-stacked  { ... }
                    `}
                </CodeBlock>

                <SectionHeader heading="Extending Pure" />

                <p>
                    When you're extending Pure, we recommend that you follow this convention. For instance, if you wanted to create a new type of form, your HTML and CSS should look something like this:
                </p>

                <CodeBlock>
                    {'<form class="form-custom pure-form"></form>'}
                </CodeBlock>

                <CodeBlock className="test">
                    {stripIndent`
                        /* add your custom styles in this selector */
                        .form-custom { ... }
                    `}
                </CodeBlock>

                <p>
                    One common task that you may wish to do is to style buttons so they look different. The <a href="/buttons/">Pure Button Documentation</a> has some examples on how you can create buttons with custom sizes and styles by adopting this modular architecture.
                </p>

                <SectionHeader heading="Pure + Bootstrap + JavaScript" />

                <p>
                    Pure plays well with other libraries, including Bootstrap. As a developer, you can pull in Pure as a foundational CSS framework, and then include specific Bootstrap modules that your application may require. There are several benefits to doing this:
                </p>

                <ul>
                    <li>
                        <p>
                            Your website or webapp's CSS will be a lot smaller &mdash; up to <em>5X smaller</em> in some cases!
                        </p>
                    </li>
                    <li>
                        <p>
                            You get Pure's minimalist look that's easy to build on top of. No need to overwrite styles!
                        </p>
                    </li>
                </ul>

                <p>
                    For example, here's a Bootstrap Modal. It's created by including the Pure CSS Rollup, and just adding Bootstrap's <a href="https://getbootstrap.com/docs/5.0/components/modal/">Modal component</a> CSS and JS plugin.
                </p>

                <CodeBlock>
                    {stripIndent`
                    <!-- Button to trigger modal -->
                    <button type="button" class="pure-button-primary pure-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch Pure + Bootstrap Modal
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>
                                        This modal is launched by including <em>just</em> the <code>modal.css</code> and <code>modal.js</code> file from Bootstrap, and including Pure to drive all low-level styles. The result is a fully-functional Modal using just a fraction of the CSS.
                                    </p>
                                    <form class="pure-form pure-form-stacked">
                                        <legend>A Stacked Form</legend>
                                        <label for="email">Email</label>
                                        <input id="email" type="text" placeholder="Email">
                                        <label for="password">Password</label>
                                        <input id="password" type="password" placeholder="Password">
                                        <label for="state">State</label>
                                        <select id="state">
                                            <option>AL</option>
                                            <option>CA</option>
                                            <option>IL</option>
                                        </select>
                                        <label class="pure-checkbox">
                                        <input type="checkbox"> Remember me
                                        </label>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="pure-button" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="pure-button pure-button-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                    `}
                </CodeBlock>
            </div>
        </Layout>
    );
}

export default Extend;
