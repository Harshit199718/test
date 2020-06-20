import styled from "styled-components";


export const ButtonStyle = styled.button`
    border: none;
    background: ${(props) => (props.bg_color? props.bg_color: 'blue')};
    padding: 8px 14px;
    border-radius: 4px;
    color: ${props => (props.color? props.color: '#000')};
    margin-top: ${props => (props.mt? props.mt: '14px')};
    font-weight: 600;
    font-size: ${props => props.font_size? props.font_size: '14px'}
`