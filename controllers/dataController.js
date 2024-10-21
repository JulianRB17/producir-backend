require('dotenv').config();

const getData = function (req, res, next) {
  const privData = {
    pixelId: process.env.PIXEL_ID,
    activeCampaignApiKey: process.env.ACTIVE_CAMPAIGN_API_KEY,
  };

  res.json(privData);
};

module.exports = {
  getData,
};
