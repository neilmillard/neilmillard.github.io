// Builds a unique, search-engine-friendly meta description from raw markdown/HTML content
// by stripping formatting and truncating to a target length on a word boundary.
export function buildMetaDescription(content: string, maxLength = 155): string {
  const plain = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[.*?]\(.*?\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (plain.length <= maxLength) {
    return plain;
  }

  const truncated = plain.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  const cut = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;

  return cut.trim().replace(/[.,;:]+$/, '') + '…';
}
