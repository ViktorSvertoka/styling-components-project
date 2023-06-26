// import styled from "styled-components";
import styles from "./Button.module.css";

// tagged template literals
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   color: white;
//   background: #00358b;
//   border-radius: 4px;
//   box-shadow: 0 0 4px rgba(50, 50, 50, 0.25);
//   cursor: pointer;

//   @media (min-width: 700px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #245fbd;
//     box-shadow: 0 0 8px rgba(50, 50, 50, 0.25);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
