import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import styles from "./Letter.module.css";

const Letter = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLoveMeter, setShowLoveMeter] = useState(false);
  const [lovePercent, setLovePercent] = useState(0);
  const [message, setMessage] = useState("");
  const [showNo, setShowNo] = useState(true);
  const [saidYes, setSaidYes] = useState(false);
  const [yesText,setYesText]= useState("YES!");
  const [showMessage,setShowMessage]= useState(true);

  const tryAgainMessages = [
    "Nice try! But you need to prove your love another way! 😋",
    "Almost there! Keep trying to show your love! 💝",
    "Not quite! There must be a better way to express your feelings! 💕",
    "Getting creative, but that's not it! Try something else! 🥰",
    "Hmm... I know you can do better than that! 😘",
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * tryAgainMessages.length);
    return tryAgainMessages[randomIndex];
  };

  const handleYes = () => {
    if (!showLoveMeter || lovePercent >= 100) {
      setShowConfetti(true);
      setShowNo(false);
      setSaidYes(true);
      setYesText("Congratulations! You have won my heart again!")
      setTimeout(() => {
        setShowConfetti(false);
        onClose();
      }, 5000);
    } else {
      increaseLove(20, "Now that's what I'm talking about! 💖");
    }
  };

  const handleNo = () => {
    if (!showLoveMeter) {
      setShowLoveMeter(true);
      setMessage("Oh no! You need to prove your love first! Fill up the Love Meter to unlock your true answer! 💝");
      setTimeout(() => {
        if (lovePercent < 100) {
          setMessage(getRandomMessage());
        }
      }, 3000);
    } else {
      increaseLove(30, "Playing hard to get, huh? That makes me love you more! 💝");
    }
  };

  const increaseLove = (amount, msg) => {
    const newLovePercent = Math.min(lovePercent + amount, 100);
    setLovePercent(newLovePercent);
    
    if (newLovePercent >= 100) {
      setMessage("Yay! Your love is proven! Now you can answer properly! 💖");
      setShowNo(false);
    } else {
      setMessage(msg);
      setTimeout(() => {
        if (lovePercent < 100) {
          setMessage(getRandomMessage());
        }
      }, 3000);
    }
  };

  const handleContainerClick = (e) => {
    if (showLoveMeter && !e.target.closest("button") && lovePercent < 100) {
      setMessage(getRandomMessage());
      setTimeout(() => {
        if (lovePercent < 100) {
          setMessage("");
        }
      }, 3000);
    }
  };


  useEffect(()=>{
    if(lovePercent>=100) setShowMessage(false);
  },[lovePercent])

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <button
        className={styles.closeButton}
        onClick={onClose}
        disabled={showConfetti}
      >
        ✕
      </button>
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            className={styles.envelope}
            onClick={() => {
              setIsOpen(true);
              if (showLoveMeter) increaseLove(20, "That's more like it! 💕");
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className={styles.envelopeFlap} />
          </motion.div>
        ) : (
          <motion.div
            className={styles.letter}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className={styles.letterContent}>
              <h2>Dear Bubu,</h2>
              <p>
                From the first time we met, to every moment we've shared, you've
                made my world brighter. This Valentine's, I just have one thing
                to ask...
              </p>
              <h3>Will you be my Valentine?</h3>

              {showLoveMeter && (
                <div className={styles.loveMeterContainer}>
                 { showMessage && <div className={styles.message}>{message}</div> }
                  <div className={styles.loveMeter}>
                    <div
                      className={styles.loveFill}
                      style={{ width: `${lovePercent}%` }}
                    />
                  </div>
                </div>
              )}

              <div className={styles.buttons}>
                <motion.button
                  onClick={handleYes}
                  disabled={showConfetti}
                  whileHover={lovePercent >= 100 ? { scale: 1.1 } : {}}
                  animate={
                    lovePercent >= 100 || saidYes
                      ? {
                          scale: [1, 1.1, 1],
                          transition: { repeat: Infinity },
                        }
                      : {}
                  }
                  className={lovePercent >= 100 ? styles.glowButton : ""}
                >
                  {yesText} ❤️
                </motion.button>
                {(!showLoveMeter || lovePercent < 100) && showNo && (
                  <button onClick={handleNo} disabled={showConfetti}>
                    NO! 💔
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {showConfetti && <Confetti />}
      {showConfetti && <Confetti />}
    </div>
  );
};

export default Letter;
