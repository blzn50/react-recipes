/* eslint-disable */
import Enzyme from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16';
import polyfil from './polyfill';

Enzyme.configure({ adapter: new Adaptar() });
