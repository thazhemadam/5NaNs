// Configure the environment, and wiring up enzyme to work with its adapter.

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as path from 'path';

require("dotenv").config({ path: '.env.test'})

Enzyme.configure({
    adapter: new Adapter()
})