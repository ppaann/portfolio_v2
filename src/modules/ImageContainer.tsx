'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import classes from './imageContainer.module.css';
import { twMerge } from 'tailwind-merge';

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
      className={`${classes.imageContainer} max-h-[50vh]  h-96 md:h-[500px] max-w-4xl `}
    >
      {leftSrc == '' ? (
        ''
      ) : (
        <motion.div
          className={twMerge(
            classes.left,
            hideWhenSmall ? classes.hideWhenSmall : ''
          )}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '10%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={leftSrc} alt={leftAlt} fill className={classes.image} />
        </motion.div>
      )}
      <div className={classes.mid}>
        <Image src={middleSrc} alt={middleAlt} fill className={classes.image} />
      </div>
      {rightSrc == '' ? (
        ''
      ) : (
        <motion.div
          className={`${classes.right} ${
            hideWhenSmall ? classes.hideWhenSmall : ''
          }`}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '-10%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={rightSrc} alt={rightAlt} fill className={classes.image} />
        </motion.div>
      )}
    </div>
  );
}

export default ImageContainer;
