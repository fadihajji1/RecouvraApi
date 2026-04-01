const Client = require('../models/Client');

// @desc    Get all clients
// @route   GET /api/clients
// @access  Private (agent, manager, admin)
const getClients = async (req, res, next) => {
  try {
    const clients = await Client.find()
      .populate('createdBy', 'firstName lastName email')
      .sort('-createdAt');

    res.json({
      success: true,
      count: clients.length,
      clients,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single client
// @route   GET /api/clients/:id
// @access  Private (agent, manager, admin)
const getClient = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id)
      .populate('createdBy', 'firstName lastName');

    if (!client) return res.status(404).json({ message: 'Client not found' });

    res.json({ success: true, client });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new client
// @route   POST /api/clients
// @access  Private (agent, manager, admin)
const createClient = async (req, res, next) => {
  try {
    req.body.createdBy = req.user.id;

    const client = await Client.create(req.body);
    res.status(201).json({ success: true, client });
  } catch (error) {
    next(error); // Pass the error to the global error handler
  }
};

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private (agent, manager, admin)
const updateClient = async (req, res, next) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after', runValidators: true }
    );

    if (!client) return res.status(404).json({ message: 'Client not found' });

    res.json({ success: true, client });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Private (agent, manager, admin)
const deleteClient = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) return res.status(404).json({ message: 'Client not found' });

    await client.deleteOne();
    res.json({ success: true, message: 'Client removed' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
};