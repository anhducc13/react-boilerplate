import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-testing-library/cleanup-after-each';
import 'jest-localstorage-mock';
import moment from 'moment-timezone';

// set default timezone to utc +7
moment.tz.setDefault('Asia/Ho_Chi_Minh');

configure({ adapter: new Adapter() });

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}

global.console.error = jest.fn();
global.console.warn = jest.fn();
