import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const StyledLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const StyledBtn = styled.button`
    background-color: inherit;
    border: 1px solid black;
    border-radius: 4px;

    &:focus {
        background-color: teal;
    }

    &:hover {
        backround-color: 
    }
`