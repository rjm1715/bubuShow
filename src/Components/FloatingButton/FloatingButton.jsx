import { motion } from 'framer-motion';
import styles from './FloatingButton.module.css';

const  FloatingButton = ({ onClick }) => {
    return (
        <motion.button
            className={styles.floatingButton}
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title='A letter for you...'
        >
            <span className={styles.envelope}>✉️</span>
            <span className={styles.tooltip}>A letter for you...</span>
        </motion.button>
    );
};


export default FloatingButton;