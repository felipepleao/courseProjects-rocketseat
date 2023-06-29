import { FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";

export function ButtonText({ title, isActive = false, ...rest}) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      <FiArrowLeft />
      {title}
    </Container>
  );
}
