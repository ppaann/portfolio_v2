'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import classes from './imageContainer.module.css';

function ImageContainer({
  leftSrc = '',
  leftAlt = '',
  middleSrc = '',
  middleAlt = '',
  rightSrc = '',
  rightAlt = '',
  hideWhenSmall = false,
}) {
  if (middleSrc === '') {
    return (
      <div className={classes.imageContainer}>
        <motion.div
          className={`${classes.left} ${
            hideWhenSmall ? classes.hideWhenSmall : ''
          }`}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={leftSrc} alt={leftAlt} fill className={classes.image} />
        </motion.div>

        <motion.div
          className={`${classes.right} ${
            hideWhenSmall ? classes.hideWhenSmall : ''
          }`}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={rightSrc} alt={rightAlt} fill className={classes.image} />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`${classes.imageContainer} max-h-[50vh] h-[500px] max-w-5xl `}
    >
      <motion.div
        className={`${classes.left} ${
          hideWhenSmall ? classes.hideWhenSmall : ''
        }`}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={leftSrc} alt={leftAlt} fill className={classes.image} />
      </motion.div>
      <motion.div
        className={classes.mid}
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={middleSrc} alt={middleAlt} fill className={classes.image} />
      </motion.div>
      <motion.div
        className={`${classes.right} ${
          hideWhenSmall ? classes.hideWhenSmall : ''
        }`}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={rightSrc} alt={rightAlt} fill className={classes.image} />
      </motion.div>
    </div>
  );
}

export default ImageContainer;
