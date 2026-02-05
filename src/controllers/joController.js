import JoModel from '../models/joModel.js';

export const buatJO = async (req, res) => {
  try {
    const now = new Date();
    const bulan = String(now.getMonth() + 1).padStart(2, '0');
    const tahun = now.getFullYear();

    // Ambil nomor urut terbesar di bulan & tahun ini
    const [rows] = await JoModel.findByMonthYear(bulan, tahun);
    let maxUrut = 0;
    rows.forEach(row => {
      const urutStr = row.nomor_fjo.split('/')[0];
      const urutNum = parseInt(urutStr, 10);
      if (urutNum > maxUrut) maxUrut = urutNum;
    });
    const urut = (maxUrut + 1).toString().padStart(5, '0');

    const nomor_fjo = `${urut}/FJO.HEW/${bulan}/${tahun}`;
    const status = 0;
    const data = { ...req.body, nomor_fjo, status };

    await JoModel.create(data);
    res.status(200).json({ status: 200, message: 'FJO dengan nomor ' + nomor_fjo + ' berhasil disimpan!', nomor_fjo });
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
};

export const riwayatJO = async (req, res) => {
  try {
    const { nama_departemen } = req.body;
    if (!nama_departemen) {
      return res.status(400).json({ error: "nama_departemen wajib diisi" });
    }
    const [rows] = await JoModel.findByDepartemen(nama_departemen);

    // Format tanggal
    const formattedRows = rows.map(row => ({
      ...row,
      tanggal: row.tanggal
        ? (typeof row.tanggal === 'string'
            ? row.tanggal.split('T')[0]
            : row.tanggal.toISOString().split('T')[0])
        : row.tanggal
    }));

    res.json({ data: formattedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const daftarJO = async (req, res) => {
  try {
    const [rows] = await JoModel.findAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};