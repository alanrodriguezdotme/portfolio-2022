import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../styles/scss/Tooltip.module.scss";

export default function Tooltip({ text, children, yOffset = 0, delay = 0 }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{
              y: -10 + yOffset,
              scale: 0.95,
              opacity: 0,
              transition: { delay },
            }}
            animate={{ y: 0 + yOffset, scale: 1, opacity: 1 }}
            exit={{ y: -10 + yOffset, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.25 }}
          >
            <div className={styles.tooltip}>{text}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
