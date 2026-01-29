const JobOrder = require('../models/jobOrder-model')

exports.createJO = async (req, res) => {
  try {
    await JobOrder.create(req.body)
    res.json({ message: 'Job Order berhasil dibuat!' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getAllJO = async (req, res) => {
  try {
    const [rows] = await JobOrder.findAll()
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
