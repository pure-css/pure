import Link from '@docusaurus/Link';
import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import Example from '../../../components/Example';
import SectionHeader from '../../../components/SectionHeader';
import { handleClick } from '../../../lib/utils';

const title = 'Buttons';
const description = 'Simple CSS for buttons.';

function Buttons() {
  return (
    <Layout description={description} title={title}>
        <Header description={description} title={title} />

        <div className="content" onClick={handleClick}>
            <SectionHeader heading="Default Buttons" />

            <p>
              To create a Pure Button, add the <code>pure-button</code> classname to any <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element.
            </p>

            <Example>
                <a className="pure-button" href="#">A Pure Button</a>
                <button className="pure-button">A Pure Button</button>
            </Example>

            <SectionHeader heading="Disabled Buttons" />

            <p>
              To mark a button as disabled, add the <code>pure-button-disabled</code> classname alongside <code>pure-button</code>.
              Alternatively, add the "disabled" attribute directly to your button.
            </p>

            <Example>
                <button className="pure-button pure-button-disabled">A Disabled Button</button>
                <button className="pure-button" disabled>A Disabled Button</button>
            </Example>

            <SectionHeader heading="Active Buttons" />

            <p>
              To style a button so that it appears "pressed", add the <code>pure-button-active</code> classname alongside <code>pure-button</code>.
            </p>

            <Example>
                <a className="pure-button pure-button-active" href="#">An Active Button</a>
                <button className="pure-button pure-button-active">An Active Button</button>
            </Example>

            <SectionHeader heading="Primary Buttons" />

            <p>
              To indicate that a button represents a primary action, add the <code>pure-button-primary</code> classname alongside <code>pure-button</code>.
            </p>

            <Example>
                <a className="pure-button pure-button-primary" href="#">A Primary Button</a>
                <button className="pure-button pure-button-primary">A Primary Button</button>
            </Example>

            <SectionHeader heading="Customizing Buttons" />

            <p>
              Thanks to Pure's minimal styling, it is easy to build off of the generic Pure button and create customized buttons for your own application.
            </p>

            <p>
              To customize button styles, you should group your custom CSS into a class such as <code>button-foo</code>, which you can then add to an element that already has the <code>pure-button</code> classname. Here are some examples.
            </p>

            <h3 className="content-subhead">Colored buttons with rounded corners</h3>

            <Example>
                <div>
                    <style scoped dangerouslySetInnerHTML={{ __html: `
                     .button-success,
                     .button-error,
                     .button-warning,
                     .button-secondary {
                         color: white;
                         border-radius: 4px;
                         text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
                     }
                     .button-success {
                         background: rgb(28, 184, 65); /* this is a green */
                     }
                     .button-error {
                         background: rgb(202, 60, 60); /* this is a maroon */
                     }
                     .button-warning {
                         background: rgb(223, 117, 20); /* this is an orange */
                     }
                     .button-secondary {
                         background: rgb(66, 184, 221); /* this is a light blue */
                     }
                    `}} />
                    <button className="button-success pure-button">Success Button</button>
                    <button className="button-error pure-button">Error Button</button>
                    <button className="button-warning pure-button">Warning Button</button>
                    <button className="button-secondary pure-button">Secondary Button</button>
                </div>
            </Example>

            <h3 className="content-subhead">Buttons with different sizes</h3>

            <Example>
                <div>
                  <style scoped dangerouslySetInnerHTML={{ __html: `
                     .button-xsmall {
                         font-size: 70%;
                     }
                     .button-small {
                         font-size: 85%;
                     }
                     .button-large {
                         font-size: 110%;
                     }
                     .button-xlarge {
                         font-size: 125%;
                     }
                  `}} />
                  <button className="button-xsmall pure-button">Extra Small Button</button>
                  <button className="button-small pure-button">Small Button</button>
                  <button className="pure-button">Regular Button</button>
                  <button className="button-large pure-button">Large Button</button>
                  <button className="button-xlarge pure-button">Extra Large Button</button>
                </div>
            </Example>

            <h3 className="content-subhead">Buttons with icons</h3>

            <p>
              Pure doesn't ship with icon fonts, but we play nice with existing ones. Incorporating icon fonts with Pure Buttons is easy. In the example below, we're using icon fonts from <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a>. Put the <a href="http://fortawesome.github.io/Font-Awesome/get-started/">Font Awesome CSS file</a> on your page and use an <code>&lt;i&gt;</code> element within a <code>pure-button</code> element.
            </p>

            <Example>
                <button className="pure-button">
                    <i className="fa fa-cog"></i>
                    Settings
                </button>
                <a className="pure-button" href="#">
                    <i className="fa fa-shopping-cart fa-lg"></i>
                    Checkout
                </a>
            </Example>

            <SectionHeader heading="Button Groups" />

            <p>
              Group multiple buttons together on a single line.
            </p>

            <aside>
              <p>
                 For assistive technologies (i.e, screen readers) a <code>role</code> attribute should be provided to ensure that proper meaning is conveyed. Button groups should have a <code>role&#x3D;&quot;group&quot;</code>, while toolbars should have <code>role&#x3D;&quot;toolbar&quot;</code>.
              </p>
              <p>
                 Additionally, a clear label should be provided since most assistive technologies will not announce them. The code snippet below provides an example.
              </p>
            </aside>

            <Example>
                <div className="pure-button-group" role="group" aria-label="...">
                  <button className="pure-button">A Pure Button</button>
                  <button className="pure-button">A Pure Button</button>
                  <button className="pure-button pure-button-active">A Pure Button</button>
                </div>
            </Example>
        </div>
    </Layout>
  );
}

export default Buttons;
