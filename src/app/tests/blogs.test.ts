import { replaceSiteDataTokens } from '@/lib/blogs';

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
