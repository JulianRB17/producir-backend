require('dotenv').config();

const getData = function (req, res, next) {
  const dates = {
    webinarDate: process.env.WEBINAR_DATE,
    programaDate: process.env.PROGRAMA_DATE,
    moduleDates: process.env.MODULES_DATES,

    moduleDate_1: process.env.MODULE_DATE_1,
    moduleDate_2: process.env.MODULE_DATE_2,
    moduleDate_3: process.env.MODULE_DATE_3,
    moduleDate_4: process.env.MODULE_DATE_4,
    moduleDate_5: process.env.MODULE_DATE_5,
  };
  const urls = {
    repetitionUrl: process.env.REPETITION_URL,
    fbGroupUrl: process.env.FB_GROUP_URL,
    whatsappUrl: process.env.WHATSAPP_URL,
    encuestaWebinarUrl: process.env.ENCUESTA_WEBINAR_URL,
    encuestaCompraUrl: process.env.ENCUESTA_COMPRA_URL,

    graciasRegistroURL: process.env.GRACIAS_REGISTRO_URL,
    graciasCompraURL: process.env.GRACIAS_COMPRA_URL,

    communityUrl: process.env.COMMUNITY_URL,
    buyoutUrl: process.env.BUYOUT_URL,
    fbPermaUrl: process.env.FB_PERMA_URL,
    igUrl: process.env.IG_URL,
    tiktokUrl: process.env.TIKTOK_URL,
  };
  res.json({ dates, urls });
};

module.exports = {
  getData,
};
