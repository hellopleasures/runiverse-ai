import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const assetFolder = path.join(process.cwd(), 'public/assets/villagers');

/**
 * Recursively gather all valid image file paths from a directory.
 */
function getImagesInDirectory(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Recurse into subfolders
      const subPath = path.join(dirPath, entry.name);
      files.push(...getImagesInDirectory(subPath));
    } else {
      // Check if it's a recognized image
      if (!entry.name.startsWith('.')) {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(ext)) {
          files.push(path.join(dirPath, entry.name));
        }
      }
    }
  }

  return files;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const topFolders = fs.readdirSync(assetFolder, { withFileTypes: true });
    const result: Record<string, string[]> = {};

    for (const folder of topFolders) {
      if (folder.isDirectory()) {
        const folderName = folder.name;
        const folderPath = path.join(assetFolder, folderName);
        // Gather all images from the subfolder (recursively)
        const imagePaths = getImagesInDirectory(folderPath);
        // Convert absolute paths to publicly accessible URLs
        const relativePaths = imagePaths.map(abs => {
          const rel = path.relative(assetFolder, abs).replace(/\\/g, '/');
          return `/assets/villagers/${rel}`;
        });
        result[folderName] = relativePaths;
      }
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Error reading villager assets:', error);
    res.status(500).json({ error: 'Failed to read villager assets' });
  }
}