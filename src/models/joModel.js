import db from '../config/db.js';

const JoModel = {
  create(data) {
    const sql = `
      INSERT INTO eng_fjo (
        nomor_fjo, tanggal, jam, shift, uraian, nik, nama_departemen, status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    return db.query(sql, [
      data.nomor_fjo,
      data.tanggal,
      data.jam,
      data.shift,
      data.uraian,
      data.nik,
      data.nama_departemen,
      data.status,
    ]);
  },

  findAll() {
    return db.query('SELECT * FROM eng_fjo ORDER BY id DESC');
  },

  findByMonthYear(bulan, tahun) {
    return db.query(
      'SELECT * FROM eng_fjo WHERE MONTH(tanggal) = ? AND YEAR(tanggal) = ?',
      [bulan, tahun]
    );
  },

  findByDepartemen(nama_departemen) {
    return db.query(
      'SELECT * FROM eng_fjo WHERE nama_departemen = ? ORDER BY id DESC',
      [nama_departemen]
    );
  }
};

export default JoModel;