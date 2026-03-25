import Movies from "../Model/Schema.js";

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
    const ticket = await Movies.findOne().sort({ _id: -1 });
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: "No previous booking found",
      });
    }
    res.status(200).json({ success: true, data: ticket });
  } catch (e) {
    res.status(400).json({ success: false, error: e.message });
  }
};
