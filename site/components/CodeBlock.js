import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock({ children, language = 'html', full = false, wrap = false }) {
    var fullClass = classnames({ 'is-code-full': full });
    var codeClass = classnames({ code: true, 'code-wrap': wrap });
    return (
        <div className={fullClass}>
            <div className={codeClass}>
                <SyntaxHighlighter language={language} style={a11yLight} wrapLongLines={full}>{children}</SyntaxHighlighter>
            </div>
        </div>
    );
}

export default CodeBlock;
