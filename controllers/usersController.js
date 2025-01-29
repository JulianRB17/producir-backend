const AppError = require('../utils/appError');
const User = require('../models/user');
//const activeCampaignApi = require('../utils/activeCampaign');

const catchAsync = require('./../utils/catchAsync');

const getUsers = catchAsync(async function (req, res, next) {
  const users = await User.find({});
  res.json({
    length: users.length,
    users: users,
  });
});

const createUser = catchAsync(async function (req, res, next) {
  const { firstName, number } = req.body;

  const user = await User.find({ number: number });
  if (user[0]) {
    user[0].webinarDate = process.env.WEBINAR_DATE;
    res.json(user);
  }
  if (!user[0]) {
    const newUser = await User.create({
      number,
      firstName,
      webinarDate: process.env.WEBINAR_DATE,
    });
    res.json(newUser);
  }
  /* if (user[0]) {
    const updatedList = await activeCampaignApi.postContactToAList(
      user[0].id,
      next
    );
    res.json(user);
  }
  if (!user[0]) {
    const contact = await activeCampaignApi.createContact(req.body, next);
    const { cdate, udate, links, hash, id } = contact.contact;
    const newUser = await User.create({
      number,
      firstName,
      cdate,
      udate,
      links,
      hash,
      id,
    });
    const masterList = await activeCampaignApi.postContactToMasterList(
      id,
      next
    );
    const updatedList = await activeCampaignApi.postContactToAList(id, next);
    const updatedTagsEngaged = await activeCampaignApi.postTagToAContact(
      id,
      1,
      next
    );
    const updatedTagsRegistered = await activeCampaignApi.postTagToAContact(
      id,
      2,
      next
    );
    const updatedTagsRegisteredDate = await activeCampaignApi.postTagToAContact(
      id,
      process.env.ACTIVE_CAMPAIGN_TAG_ID,
      next
    );
    res.json(newUser);
  } */
});

const deleteUsers = catchAsync(async function (req, res, next) {
  const deletedUsers = await User.deleteOne({ number: req.params.number });
  res.json({ deletedUsers });
});

module.exports = {
  createUser,
  getUsers,
  deleteUsers,
};
