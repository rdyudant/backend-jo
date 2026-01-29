const db = require('../config/db')

exports.create = (data) => {
  const sql = `
    INSERT INTO eng_fjo (
      nomor_fjo, tanggal, jam, shift, departemen, bagian, nama, uraian
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `
  return db.query(sql, [
    data.nomor_fjo,
    data.tanggal,
    data.jam,
    data.shift,
    data.departemen,
    data.bagian,
    data.nama,
    data.uraian
  ])
}

exports.findAll = () => {
  return db.query('SELECT * FROM eng_fjo ORDER BY id DESC')
}