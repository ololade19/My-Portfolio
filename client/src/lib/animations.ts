export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
