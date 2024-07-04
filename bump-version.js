// bump-version.mjs
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const packageJsonPath = join(process.cwd(), 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

const versionParts = packageJson.version.split('.');
versionParts[2] = parseInt(versionParts[2]) + 1; // Increase minor version
packageJson.version = versionParts.join('.');

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');

console.log(`Version bumped to ${packageJson.version}`);
