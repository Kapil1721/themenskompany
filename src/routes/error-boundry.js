import React from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="error-page">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img loading="lazy" src="https://i.imgur.com/qIufhof.png" />

          <h1>
            <span>500</span> <br />
            Internal server error
          </h1>
          <p>We are currently trying to fix the problem.</p>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
};
