import React from 'react';
import errorImage from '../assets/error.jpg';
import notFoundImage from '../assets/404.png';

const ErrorPage = (props) => {
  return (
    <div className="error-page-container">
      {!props.isNotfound && (
        <>
          <h1>Oops! Something Went Wrong</h1>
          <h3>It seems like we encountered an issue.</h3>
        </>
        )}
      <img className="error-image" src={props.isNotfound ? notFoundImage: errorImage} alt="error"/>
    </div>
  );
}

export default ErrorPage;
