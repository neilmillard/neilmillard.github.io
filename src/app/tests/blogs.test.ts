import { replaceSiteDataTokens, replaceLegacySiteUrls, replaceJekyllIncludes, replaceHighlightTags, getAllBlogPosts, getBlogPost } from '@/lib/blogs';

const MUSTACHE_TAG_REGEX = /{{\s*[\w.]+\s*}}|{%\s*[\w.]+[\s\S]*?%}/;

describe('replaceSiteDataTokens', () => {
  test('replaces the leftover Jekyll slack invite token with the contact page', () => {
    const content = 'You can find me on [Slack]({{site.data.slack.invite}}).';

    const result = replaceSiteDataTokens(content);

    expect(result).toBe('You can find me on [Slack](/contact/).');
  });

  test('replaces multiple occurrences in the same content', () => {
    const content = '[a]({{site.data.slack.invite}}) and [b]({{site.data.slack.invite}})';

    const result = replaceSiteDataTokens(content);

    expect(result).toBe('[a](/contact/) and [b](/contact/)');
  });

  test('replaces the leftover Jekyll youtube channel token', () => {
    const content = 'look out for my [YouTube channel]({{site.data.youtube.channel}}).';

    const result = replaceSiteDataTokens(content);

    expect(result).toBe('look out for my [YouTube channel](https://www.youtube.com/channel/UCAaoh3jk1qtvD3ALPp48_8w/).');
  });

  test('leaves content without the token unchanged', () => {
    const content = 'Nothing to see here, just plain markdown.';

    expect(replaceSiteDataTokens(content)).toBe(content);
  });
});

describe('replaceLegacySiteUrls', () => {
  test('rewrites a legacy Jekyll permalink to the current blog route', () => {
    const content = 'See <a href="{{ site.url }}/2019/01/25/four-steps-automate.html">this post</a>.';

    const result = replaceLegacySiteUrls(content);

    expect(result).toBe('See <a href="/blog/2019-01-25-four-steps-automate/">this post</a>.');
  });

  test('rewrites a legacy public/img path to the current /img path', () => {
    const content = '<img src="{{ site.url }}/public/img/con-VPC-sec-grp.png" alt="x" />';

    const result = replaceLegacySiteUrls(content);

    expect(result).toBe('<img src="/img/con-VPC-sec-grp.png" alt="x" />');
  });

  test('rewrites a bare site.url token to the site root', () => {
    const content = 'Following blogs such as [this one]({{ site.url }}) or elsewhere.';

    const result = replaceLegacySiteUrls(content);

    expect(result).toBe('Following blogs such as [this one](/) or elsewhere.');
  });

  test('leaves content without the token unchanged', () => {
    const content = 'Nothing to see here, just plain markdown.';

    expect(replaceLegacySiteUrls(content)).toBe(content);
  });

  test('rewrites a bare legacy Jekyll permalink (no site.url token) to the current blog route', () => {
    const content = 'See <a href="/2019/01/25/four-steps-automate.html">this post</a>.';

    const result = replaceLegacySiteUrls(content);

    expect(result).toBe('See <a href="/blog/2019-01-25-four-steps-automate/">this post</a>.');
  });

  test('rewrites a bare /public/img path (no site.url token) to the current /img path', () => {
    const content = '<img src="/public/img/docker.jpg" alt="x" />';

    const result = replaceLegacySiteUrls(content);

    expect(result).toBe('<img src="/img/docker.jpg" alt="x" />');
  });

  test('rewrites an absolute-domain /public/img path to the current relative /img path', () => {
    const content = 'img="https://www.neilmillard.com/public/img/cloudy-sunrise_640.jpg"';

    const result = replaceLegacySiteUrls(content);

    expect(result).toBe('img="/img/cloudy-sunrise_640.jpg"');
  });

  test('rewrites an absolute-domain (no www) /public/img path to the current relative /img path', () => {
    const content = 'img="https://neilmillard.com/public/img/wackamole.jpg"';

    const result = replaceLegacySiteUrls(content);

    expect(result).toBe('img="/img/wackamole.jpg"');
  });
});

describe('replaceJekyllIncludes', () => {
  test('replaces the book_info include with a link to the book page', () => {
    const content = 'Some text.\n{% include book_info.html %}\nMore text.';

    const result = replaceJekyllIncludes(content);

    expect(result).toBe(
      'Some text.\n<div><p>Read <a href="/book/">Who Moved My Servers</a>. ' +
      'Available from Amazon in <a href="https://amzn.to/2HxjFXf">Paperback</a> ' +
      'and <a href="https://amzn.to/2RbKKig">Kindle</a> now.</p></div>\nMore text.'
    );
  });

  test('replaces a youtube include with an embedded iframe using its ref', () => {
    const content = '{% include youtube.html\nref="yd5SNo1eOWc"\n%}';

    const result = replaceJekyllIncludes(content);

    expect(result).toBe(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/yd5SNo1eOWc" frameborder="0" allowfullscreen></iframe>'
    );
  });

  test('leaves content without any include tags unchanged', () => {
    const content = 'Nothing to see here, just plain markdown.';

    expect(replaceJekyllIncludes(content)).toBe(content);
  });
});

describe('replaceHighlightTags', () => {
  test('converts a highlight block into a fenced code block with the same language', () => {
    const content = '{% highlight yaml %}\nkey: "{{ value }}"\n{% endhighlight %}';

    const result = replaceHighlightTags(content);

    expect(result).toBe('```yaml\nkey: "{{ value }}"\n```');
  });

  test('leaves content without any highlight tags unchanged', () => {
    const content = 'Nothing to see here, just plain markdown.';

    expect(replaceHighlightTags(content)).toBe(content);
  });
});

describe('rendered blog post content', () => {
  test('every published post is free of unrendered Jekyll/mustache template tags', async () => {
    const posts = getAllBlogPosts();
    const leftovers: { id: string; matches: string[] }[] = [];

    for (const post of posts) {
      const { content } = await getBlogPost(post.id);
      // Strip fenced code blocks first: example code (e.g. Ansible/Jinja2 snippets showing
      // `{{ var }}` syntax) is intentionally literal, not an unrendered Jekyll/Liquid tag.
      const withoutCodeFences = content.replace(/```[\s\S]*?```/g, '');
      const matches = withoutCodeFences.match(new RegExp(MUSTACHE_TAG_REGEX, 'g'));

      if (matches) {
        leftovers.push({ id: post.id, matches });
      }
    }

    expect(leftovers).toEqual([]);
  });

  test('every published post is free of broken /public/img, legacy YYYY/MM/DD permalinks, and /tags/ links', async () => {
    const posts = getAllBlogPosts();
    const BROKEN_LINK_REGEX = /public\/img\/|\/\d{4}\/\d{2}\/\d{2}\/[\w-]+\.html|\/tags\//;
    const leftovers: { id: string; matches: string[] }[] = [];

    for (const post of posts) {
      const { content } = await getBlogPost(post.id);
      const matches = content.match(new RegExp(BROKEN_LINK_REGEX, 'g'));

      if (matches) {
        leftovers.push({ id: post.id, matches });
      }
    }

    expect(leftovers).toEqual([]);
  });
});
