"use strict";

module.exports.createCard = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: "new card is created!",
      },
      null,
      2
    ),
  };
};

module.exports.updateCard = async (event) => {
  let cardToken = event.pathParameters.cardToken;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `card id ${cardToken} is updated`,
      },
      null,
      2
    ),
  };
};

module.exports.deleteCard = async (event) => {
  let cardToken = event.pathParameters.cardToken;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `card id ${cardToken} is deleted`,
      },
      null,
      2
    ),
  };
};

module.exports.getCard = async (event) => {
  let cardToken = event.pathParameters.cardToken;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `here is card id ${cardToken}`,
    }),
  };
};

module.exports.getAllCards = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        message: "card 1",
      },
      {
        message: "card 2",
      },
    ]),
  };
};
