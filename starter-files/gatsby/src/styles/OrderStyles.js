import styled from 'styled-components';

export const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  fieldset {
    display: grid;
    grid-column: span 2;
    gap: 1rem;
    max-height: 600px;
    overflow: auto;
    align-content: start;

    &.order,
    &.menu {
      grid-column: span 1;
    }

    @media (max-width: 900px) {
      fieldset.menu,
      fieldset.order {
        grid-column: span 2;
      }
    }

    .remove {
      background: none;
      color: var(--red);
      font-size: 3rem;
      position: absolute;
      top: 0;
      right: 0;
      box-shadow: none;
      line-height: 1rem;
    }
  }
`;
