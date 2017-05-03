const Showable = props => {
  if (!props.error) {
    return null;
  }

  return props.children;
};

export default Showable;
