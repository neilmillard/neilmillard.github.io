import { replaceSiteDataTokens, replaceLegacySiteUrls } from '@/lib/blogs';

describe('replaceSiteDataTokens', () => {
  test('replaces the leftover Jekyll slack invite token with the contact page', () => {
    const content = 'You can find me on [Slack]({{site.data.slack.invite}}).';

    const result = replaceSiteDataTokens(content);

    expect(result).toBe('You can find me on [Slack](/contact).');
  });

  test('replaces multiple occurrences in the same content', () => {
    const content = '[a]({{site.data.slack.invite}}) and [b]({{site.data.slack.invite}})';

    const result = replaceSiteDataTokens(content);

    expect(result).toBe('[a](/contact) and [b](/contact)');
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
});
