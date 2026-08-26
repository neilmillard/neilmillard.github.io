import { buildMetaDescription, extractFirstImage } from '@/lib/seo';

describe('buildMetaDescription', () => {
  test('strips markdown formatting and returns plain text', () => {
    const content = '# Heading\n\nThis is **bold** and _italic_ text with a [link](https://example.com).';
    const result = buildMetaDescription(content);

    expect(result).not.toMatch(/[#*_\][]/);
    expect(result).toContain('link');
    expect(result).not.toContain('https://example.com');
  });

  test('strips images, code fences and HTML tags', () => {
    const content = '![alt text](/img/pic.png)\n\n```js\nconst x = 1;\n```\n\n<div>Some <strong>content</strong></div> after the code.';
    const result = buildMetaDescription(content);

    expect(result).not.toContain('![');
    expect(result).not.toContain('```');
    expect(result).not.toMatch(/<\/?[a-z]+>/i);
    expect(result).toContain('Some content after the code.');
  });

  test('returns short content unchanged (aside from whitespace collapse)', () => {
    const content = 'A short sentence about DevOps.';
    expect(buildMetaDescription(content)).toBe('A short sentence about DevOps.');
  });

  test('truncates long content to the max length on a word boundary with an ellipsis', () => {
    const content = 'word '.repeat(60).trim();
    const result = buildMetaDescription(content, 155);

    expect(result.length).toBeLessThanOrEqual(156);
    expect(result.endsWith('…')).toBe(true);
    expect(result.slice(0, -1)).toMatch(/^(word )*word$/); // only ever cuts on whole words, never mid-word
  });

  test('collapses repeated whitespace and newlines into single spaces', () => {
    const content = 'Line one.\n\n\nLine   two.';
    expect(buildMetaDescription(content)).toBe('Line one. Line two.');
  });
});

describe('extractFirstImage', () => {
  test('finds a standard Markdown image', () => {
    const content = 'Some intro text.\n\n![a diagram](/img/diagram.png)\n\nMore text.';
    expect(extractFirstImage(content)).toBe('/img/diagram.png');
  });

  test('finds an ImageWrapper JSX image when there is no Markdown image', () => {
    const content = 'Intro.\n\n<ImageWrapper img="/img/wrapper-pic.jpg" caption="x" />\n\nOutro.';
    expect(extractFirstImage(content)).toBe('/img/wrapper-pic.jpg');
  });

  test('prefers the first Markdown image over a later ImageWrapper image', () => {
    const content = '![first](/img/first.png)\n\n<ImageWrapper img="/img/second.jpg" />';
    expect(extractFirstImage(content)).toBe('/img/first.png');
  });

  test('returns null when the content has no images', () => {
    const content = 'Just plain text with no pictures at all.';
    expect(extractFirstImage(content)).toBeNull();
  });
});
