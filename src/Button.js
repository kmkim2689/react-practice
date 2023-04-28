import PropTypes from "prop-types";
import styles from "./Button.module.css";


function Button({ text }) {
    return (
        <button className={styles.btn}>{text}</button>
    )
}

// 해당 컴포넌트에서 Proptypes를 지정한다.
//
Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;