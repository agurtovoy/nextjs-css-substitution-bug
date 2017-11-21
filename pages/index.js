import styles from "./index.css";
import applyStyles from "next-style-loader/applyStyles";

export default applyStyles( styles )( () => <div>Welcome to next.js!</div> );
