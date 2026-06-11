function withMessage(Component) {
  return function EnhancedComponent() {
    return (
      <>
        <h3>Welcome User</h3>
        <Component />
      </>
    );
  };
}

export default withMessage;