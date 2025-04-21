import React from 'react';
import { StyledButton } from './Button.styled';

export default function Button({ title, onClick }) {
    return (
        <StyledButton type="button" onClick={onClick}>
            {title}
        </StyledButton>
    );
}
