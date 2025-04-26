const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const POSTS_DIR = path.join(process.cwd(), '_posts');

// Function to extract date from filename (format: YYYY-MM-DD-title.md)
function extractDateFromFilename(filename) {
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) {
    return dateMatch[1];
  }
  return null;
}

// Function to add date to frontmatter if missing
function addDateToFrontmatter() {
  const files = fs.readdirSync(POSTS_DIR);
  let updatedCount = 0;

  files.forEach(file => {
    const filePath = path.join(POSTS_DIR, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    // Check if date is missing
    if (!data.date) {
      console.log(`Date missing in ${file}`);

      // Extract date from filename
      const dateFromFilename = extractDateFromFilename(file);

      if (dateFromFilename) {
        // Add date with time 13:00
        const formattedDate = `${dateFromFilename} 13:00:00 +0000`;
        data.date = formattedDate;

        // Create new frontmatter content
        const updatedFileContent = matter.stringify(content, data);

        // Write updated content back to file
        fs.writeFileSync(filePath, updatedFileContent);

        console.log(`Added date ${formattedDate} to ${file}`);
        updatedCount++;
      } else {
        console.log(`Could not extract date from filename: ${file}`);
      }
    }
  });

  console.log(`Updated ${updatedCount} files`);
}

// Run the function
addDateToFrontmatter();
