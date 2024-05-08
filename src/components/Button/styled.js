import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    height: 56PX;
    border: 0;
    padding: 0 16PX;
    margin-top: 16;
    border-radius: 10PX;
    font-weight: 500;
    &:disabled{
        opacity: 0.5;
        
    }
`