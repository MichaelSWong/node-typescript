import * as shell from 'shelljs';

// Copy all the build folder from react
shell.cp('-R', 'client/build', 'dist/');
