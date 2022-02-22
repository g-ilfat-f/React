import ForTest from '../pages/Gists';
import { render } from '@testing-library/react';

describe('we want to test gists', () => {
    it('it is match to snapshot', () => {
        const component = render(<ForTest />);
        expect(component).toMatchSnapshot();
    });
});