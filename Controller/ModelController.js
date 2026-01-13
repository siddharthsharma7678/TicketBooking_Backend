import Movies from "../Model/Movies.js";

export const addTicket = async (req, res) => {
  try {
    const ticket = await Movies.create(req.body);
    res.status(200).json({ success: true, data: ticket });
  } catch (e) {
    res.status(400).json({ success: false, error: e.message });
  }
};

export const getlatesTicket = async (req, res) => {
  try {
    const ticket = await Movies.create(req.body);
    res.status(201).json({ success: true, data: ticket });
  } catch (e) {
    res.status(400).json({ success: false, error: e.message });
  }
};
