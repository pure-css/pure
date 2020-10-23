import Link from '@docusaurus/Link';
import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import Example from '../../../components/Example';
import SectionHeader from '../../../components/SectionHeader';

const title = 'Forms';
const description = 'Simple CSS for HTML forms.';

function Forms() {
    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content">
                <SectionHeader heading="Default Form" />

                <p>
              To create a default inline form, add the <code>pure-form</code> classname to any <code>&lt;form&gt;</code> element.
                </p>

                <Example>
                    <form className="pure-form">
                        <fieldset>
                            <legend>A compact inline form</legend>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <label htmlFor="default-remember">
                                <input id="default-remember" type="checkbox" /> Remember me
                            </label>
                            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
                        </fieldset>
                    </form>
                </Example>

                <SectionHeader heading="Stacked Form" />

                <p>
              To create a stacked form with input elements below the labels, add the <code>pure-form-stacked</code> classname to a <code>&lt;form&gt;</code> element alongside <code>pure-form</code>.
                </p>

                <Example>
                    <form className="pure-form pure-form-stacked">
                        <fieldset>
                            <legend>A Stacked Form</legend>
                            <label htmlFor="stacked-email">Email</label>
                            <input id="stacked-email" type="email" placeholder="Email" />
                            <span className="pure-form-message">This is a required field.</span>
                            <label htmlFor="stacked-password">Password</label>
                            <input id="stacked-password" type="password" placeholder="Password" />
                            <label htmlFor="stacked-state">State</label>
                            <select id="stacked-state">
                                <option>AL</option>
                                <option>CA</option>
                                <option>IL</option>
                            </select>
                            <label htmlFor="stacked-remember" className="pure-checkbox">
                                <input id="stacked-remember" type="checkbox" /> Remember me
                            </label>
                            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
                        </fieldset>
                    </form>
                </Example>

                <SectionHeader heading="Aligned Form" />

                <p>
              To create an aligned form, add the <code>pure-form-aligned</code> classname to a <code>&lt;form&gt;</code> element alongside <code>pure-form</code>. In an aligned form, the labels are right-aligned against the form input controls, but on smaller screens revert to a <Link to="#stacked-form">stacked form</Link>.
                </p>

                <Example>
                    <form className="pure-form pure-form-aligned">
                        <fieldset>
                            <div className="pure-control-group">
                                <label htmlFor="aligned-name">Username</label>
                                <input id="aligned-name" type="text" placeholder="Username" />
                                <span className="pure-form-message-inline">This is a required field.</span>
                            </div>
                            <div className="pure-control-group">
                                <label htmlFor="aligned-password">Password</label>
                                <input id="aligned-password" type="password" placeholder="Password" />
                            </div>
                            <div className="pure-control-group">
                                <label htmlFor="aligned-email">Email Address</label>
                                <input id="aligned-email" type="email" placeholder="Email Address" />
                            </div>
                            <div className="pure-control-group">
                                <label htmlFor="aligned-foo">Supercalifragilistic Label</label>
                                <input id="aligned-foo" type="text" placeholder="Enter something here..." />
                            </div>
                            <div className="pure-controls">
                                <label htmlFor="aligned-cb" className="pure-checkbox">
                                    <input id="aligned-cb" type="checkbox" /> I've read the terms and conditions
                                </label>
                                <button type="submit" className="pure-button pure-button-primary">Submit</button>
                            </div>
                        </fieldset>
                    </form>
                </Example>

                <SectionHeader heading="Multi-Column Form (with Pure Grids)" />

                <p>
              To create multi-column forms, include your form elements within a <Link to="/grids">Pure Grid</Link>. Creating responsive multi-column forms (like the example below) requires <Link to="/grids/#pure-responsive-grids">Pure Responsive Grids</Link> to be present on the page.
                </p>

                <Example>
                    <form className="pure-form pure-form-stacked">
                        <fieldset>
                            <legend>Legend</legend>
                            <div className="pure-g">
                                <div className="pure-u-1 pure-u-md-1-3">
                                    <label htmlFor="multi-first-name">First Name</label>
                                    <input id="multi-first-name" className="pure-u-23-24" type="text" />
                                </div>
                                <div className="pure-u-1 pure-u-md-1-3">
                                    <label htmlFor="multi-last-name">Last Name</label>
                                    <input id="multi-last-name" className="pure-u-23-24" type="text" />
                                </div>
                                <div className="pure-u-1 pure-u-md-1-3">
                                    <label htmlFor="multi-email">E-Mail</label>
                                    <input id="multi-email" className="pure-u-23-24" type="email" required />
                                </div>
                                <div className="pure-u-1 pure-u-md-1-3">
                                    <label htmlFor="multi-city">City</label>
                                    <input id="multi-city" className="pure-u-23-24" type="text" />
                                </div>
                                <div className="pure-u-1 pure-u-md-1-3">
                                    <label htmlFor="multi-state">State</label>
                                    <select id="multi-state" className="pure-input-1-2">
                                        <option>AL</option>
                                        <option>CA</option>
                                        <option>IL</option>
                                    </select>
                                </div>
                            </div>
                            <label htmlFor="multi-terms" className="pure-checkbox">
                                <input id="multi-terms" type="checkbox" /> I've read the terms and conditions
                            </label>
                            <button type="submit" className="pure-button pure-button-primary">Submit</button>
                        </fieldset>
                    </form>
                </Example>

                <SectionHeader heading="Grouped Inputs" />

                <p>
              To group sets of text-based input elements, wrap them in a <code>&lt;fieldset&gt;</code> element with a <code>pure-group</code> classname. Grouped inputs work well for sign-up forms and look natural on mobile devices.
                </p>

                <Example>
                    <form className="pure-form">
                        <fieldset className="pure-group">
                            <input type="text" className="pure-input-1-2" placeholder="Username" />
                            <input type="text" className="pure-input-1-2" placeholder="Password" />
                            <input type="email" className="pure-input-1-2" placeholder="Email" />
                        </fieldset>
                        <fieldset className="pure-group">
                            <input type="text" className="pure-input-1-2" placeholder="A title" />
                            <textarea className="pure-input-1-2" placeholder="Textareas work too"></textarea>
                        </fieldset>
                        <button type="submit" className="pure-button pure-input-1-2 pure-button-primary">Sign in</button>
                    </form>
                </Example>

                <SectionHeader heading="Input Sizing" />

                <p>
              Input elements have fluid width sizes in a syntax that is similar to <Link to="/grids/">Pure Grids</Link>. You can apply a <code>pure-input-*</code> class to these elements.
                </p>

                <Example>
                    <form className="pure-form">
                        <input className="pure-input-1" type="text" placeholder=".pure-input-1" /><br />
                        <input className="pure-input-2-3" type="text" placeholder=".pure-input-2-3" /><br />
                        <input className="pure-input-1-2" type="text" placeholder=".pure-input-1-2" /><br />
                        <input className="pure-input-1-3" type="text" placeholder=".pure-input-1-3" /><br />
                        <input className="pure-input-1-4" type="text" placeholder=".pure-input-1-4" /><br />
                    </form>
                </Example>

                <p>
              You can control input sizing even further by wrapping them in grid containers. In the example below, the <code>&lt;input&gt;</code> elements have a <code>pure-input-1</code> class, but are wrapped in a <code>&lt;div&gt;</code> with a specific grid class.
                </p>

                <Example>
                    <form className="pure-form pure-g">
                        <div className="pure-u-1-4">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-4" />
                        </div>
                        <div className="pure-u-3-4">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-3-4" />
                        </div>
                        <div className="pure-u-1-2">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-2" />
                        </div>
                        <div className="pure-u-1-2">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-2" />
                        </div>
                        <div className="pure-u-1-8">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-8" />
                        </div>
                        <div className="pure-u-1-8">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-8" />
                        </div>
                        <div className="pure-u-1-4">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-4" />
                        </div>
                        <div className="pure-u-1-2">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-2" />
                        </div>
                        <div className="pure-u-1-5">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1-5" />
                        </div>
                        <div className="pure-u-2-5">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-2-5" />
                        </div>
                        <div className="pure-u-2-5">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-2-5" />
                        </div>
                        <div className="pure-u-1">
                            <input className="pure-input-1" type="text" placeholder=".pure-u-1" />
                        </div>
                    </form>
                </Example>

                <SectionHeader heading="Required Inputs" />

                <p>
              To mark a form control as required, add the <code>required</code> attribute.
                </p>

                <Example>
                    <form className="pure-form">
                        <input type="email" placeholder="Requires an email" required />
                    </form>
                </Example>

                <SectionHeader heading="Disabled Inputs" />

                <p>
              To disable a form control, add the <code>disabled</code> attribute.
                </p>

                <Example>
                    <form className="pure-form">
                        <input type="text" placeholder="Disabled input here..." disabled />
                    </form>
                </Example>

                <SectionHeader heading="Read-Only Inputs" />

                <p>
              To make a form input read-only, add the <code>readonly</code> attribute. The difference between <code>disabled</code> and <code>readonly</code> is read-only inputs are still focusable. This allows people to interact with the input and select its text, whereas disabled controls are not interactive.
                </p>

                <Example>
                    <form className="pure-form">
                        <input type="text" value="Readonly input here..." readOnly />
                    </form>
                </Example>

                <SectionHeader heading="Rounded Inputs" />

                <p>
              To display a form control with rounded corners, add the <code>pure-input-rounded</code> classname.
                </p>

                <Example>
                    <form className="pure-form">
                        <input type="text" className="pure-input-rounded" />
                        <button type="submit" className="pure-button">Search</button>
                    </form>
                </Example>

                <SectionHeader heading="Checkboxes and Radios" />

                <p>
              To normalize and align checkboxes and radio inputs, add the <code>pure-checkbox</code> or <code>pure-radio</code> classname.
                </p>

                <Example>
                    <form className="pure-form">
                        <label htmlFor="checkbox-radio-option-one" className="pure-checkbox">
                            <input id="checkbox-radio-option-one" type="checkbox" value="" /> Here's option one.
                        </label>
                        <label htmlFor="checkbox-radio-option-two" className="pure-radio">
                            <input id="checkbox-radio-option-two" type="radio" name="optionsRadios" value="option1" defaultChecked /> Here's a radio button. You can choose this one..
                        </label>
                        <label htmlFor="checkbox-radio-option-three" className="pure-radio">
                            <input id="checkbox-radio-option-three" type="radio" name="optionsRadios" value="option2" /> ..Or this one!
                        </label>
                    </form>
                </Example>
            </div>
        </Layout>
    );
}

export default Forms;
