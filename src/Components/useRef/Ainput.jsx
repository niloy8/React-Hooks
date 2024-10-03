import PropTypes from 'prop-types'
import { forwardRef } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
const Ainput = ({ text, place }, inputRef) => {
    return (
        <input type={text} ref={inputRef} placeholder={place} />
    );
};
const forward = forwardRef(Ainput)
Ainput.propTypes = {
    text: PropTypes.object,
    place: PropTypes.object
}
export default forward;