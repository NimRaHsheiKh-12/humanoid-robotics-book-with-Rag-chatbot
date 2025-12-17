#!/usr/bin/env node
/**
 * Start Docusaurus on the first available preferred port (3000..3010).
 * This avoids interactive prompts when a port is already in use and ensures
 * `npm run start-dev` doesn't exit prematurely.
 */
import getPort from 'get-port';
import { spawn } from 'child_process';
import path from 'path';

(async () => {
  const preferred = [3000, 3001, 3002, 3003, 3004, 3005];
  const port = await getPort({ port: preferred });

  process.env.PORT = port;
  console.log(`Starting Docusaurus on port ${port}...`);

  let command;
  let args;

  if (process.platform === 'win32') {
    command = 'cmd.exe';
    args = ['/c', 'npm', 'run', 'start'];
  } else {
    command = 'npm';
    args = ['run', 'start'];
  }

  // Use npm to run the docusaurus start script
  const child = spawn(command, args, {
    stdio: 'inherit',
    env: process.env,
  });

  child.on('exit', (code) => process.exit(code));
  child.on('error', (err) => {
    console.error('Failed to start Docusaurus:', err);
    process.exit(1);
  });
})();