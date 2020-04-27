import React from 'react';

    function SectionHeader({ heading, TagName = 'h2' }) {
    // Remove HTML entities, and all chars except whitespace, word chars, and from the `heading`.
    const id = heading.toLowerCase()
            .replace(/&[^\s;]+;?/g, '')
            .replace(/[^\s\w\-]+/g, '')
            .replace(/\s+/g, '-');

    return (
        <TagName id={id} className="content-subhead">
            {heading}
            <a href={`#${id}`} className="content-link" title="Heading anchor"></a>
        </TagName>
    );
}

export default SectionHeader;
