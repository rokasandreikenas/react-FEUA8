import PropTypes from "prop-types";
import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

const FieldContainer = styled.span`
  display: block;
`;

const StyledLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const StyledError = styled(ErrorMessage)`
  display: block;
  color: red;
  margin-top: 0.25rem;
  font-size: 0.875rem;
`;

const FormikField = ({ name, label, ...props }) => {
  return (
    <FieldContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledField id={name} name={name} {...props} />
      <StyledError component="div" name={name} />
    </FieldContainer>
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  // If there are other specific props you want to type-check, add them here.
};

export default FormikField;
