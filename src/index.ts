// Makes an import from node API after installed @types/node
import * as path from 'path';
// Componets imports
import {
    Default,
    DefaultInterface
} from './entities/index';
// Here is the entry point for the module, where other modules will call and have access to its APIs
// Replace with your module name, signature and implementation
const index = (opts?: any): any => {
    let d = new Default();

    d.setDefault(1);

    return d.getDefault();
};

export default index;