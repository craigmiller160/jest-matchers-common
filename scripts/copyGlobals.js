const path = require('path');
const fs = require('fs');

const copyGlobals = () => {
    fs.copyFileSync(
        path.resolve(process.cwd(), 'src', 'global.d.ts'),
        path.resolve(process.cwd(), 'lib', 'global.d.ts')
    );
};

copyGlobals();