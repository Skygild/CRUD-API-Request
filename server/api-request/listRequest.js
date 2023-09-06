const List = require("../model/list");

const getAllList = async (req, res) => {
  try {
    const getAllList = await List.find({});

    res.status(200).json(getAllList);
  } catch (error) {
    console.log(error);
  }
};

const createNewList = async (req, res) => {
  try {
    const { title, description } = req.body;

    const list = { title, description };

    const createList = await List.create(list);

    res.status(201).json(createList);
  } catch (error) {
    console.log(error);
  }
};

const updateList = async (req, res) => {
  try {
    const { id, title } = req.query;
    if (id && title) {
      const getList = await List.findOneAndUpdate({ _id: id, title: title }, req.body, { new: true });
      res.status(200).json(getList);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteList = async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const getList = await List.findOneAndDelete({ _id: id }, req.body);
      res.status(200).json(getList);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllList, createNewList, updateList, deleteList };
