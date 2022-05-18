const axios = require("axios").default;
const getWeeklyBooks = (req, res) => {
  const options = {
    method: "GET",
    url: "https://hapi-books.p.rapidapi.com/week/horror",
    headers: {
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      "X-RapidAPI-Key": "2385336b51mshac5593ff9c397a4p1698ffjsnb6910d60abef",
    },
    params: {
      _limit: 10,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.error(error);
    });
};

module.exports = { getWeeklyBooks };
