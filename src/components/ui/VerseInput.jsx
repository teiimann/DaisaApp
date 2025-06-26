import React from 'react';
import styled from 'styled-components';

const VerseInput = () => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input type="text" placeholder="Your Email" />
        <button className="button">Send</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-container {
      display: flex;
      background: white;
      border-radius: 1rem;
      background: linear-gradient(135deg, #23272F 0%, #14161a 100%);
      box-shadow: 10px 10px 20px #0e1013, -10px -10px 40px #383e4b;
      padding: 0.3rem;
      gap: 0.3rem;
      margin-top: 40px;
    }

    .input-container {
      display: flex;
      background: white;
      border-radius: 1rem;
      background: linear-gradient(135deg, #23272F 0%, #14161a 100%);
      box-shadow: 10px 10px 20px #0e1013, -10px -10px 40px #383e4b;
      padding: 0.3rem;
      gap: 0.3rem;
  }

  .input-container input {
      border-radius: 0.8rem 0 0 0.8rem;
      background: #23272F;
      box-shadow: inset 5px 5px 10px #0e1013, inset -5px -5px 10px #383e4b, 0px 0px 100px rgba(53, 114, 239, 0), 0px 0px 100px rgba(20, 39, 155, 0);
      width: 100%;
      height: 50px;
      flex-basis: 75%;
      padding: 1rem;
      border: none;
      border: 1px solid transparent;
      color: white;
      transition: all 0.2s ease-in-out;
  }

  .input-container input:focus {
      border: 1px solid #3572EF;
      outline: none;
      box-shadow: inset 0px 0px 10px rgba(5, 12, 156, 0.5), inset 0px 0px 10px rgba(53, 114, 239, 0.5), 0px 0px 100px rgba(53, 114, 239, 0.5), 0px 0px 100px rgba(5, 12, 156, 0.5);
  }

  .input-container button {
      flex-basis: 25%;
      padding: 1rem;
      background: linear-gradient(135deg, rgb(53, 114, 239) 0%, rgb(20, 39, 155) 100%);
      box-shadow: 0px 0px 1px rgba(53, 114, 239, 0.5), 0px 0px 1px rgba(20, 39, 155, 0.5);
      font-weight: 900;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      color: #23272F;
      border: none;
      width: 100%;
      border-radius: 0 1rem 1rem 0;
      transition: all 0.2s ease-in-out;
  }

  .input-container button:hover {
      background: linear-gradient(135deg, rgb(53, 114, 239) 50%, rgb(20, 39, 155) 100%);
      box-shadow: 0px 0px 100px rgba(53, 114, 239, 0.5), 0px 0px 100px rgba(20, 39, 155, 0.5);
  }

  @media (max-width: 500px) {
      .input-container {
          flex-direction: column;
      }

      .input-container input {
          border-radius: 0.8rem;
      }

      .input-container button {
          padding: 1rem;
          border-radius: 0.8rem;
      }
  }`;

export default VerseInput;
