import styled from 'styled-components';
import Title from '../Title';

const StyledTitle = styled(Title)`
    color: ${(props) => props.color};
`;
export default StyledTitle;
