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