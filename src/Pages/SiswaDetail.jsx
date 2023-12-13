import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SiswaDetail() {
  const [siswa, setSiswa] = useState({});
  let { idsiswa } = useParams();

  function loadDataSiswa() {
    fetch(`http://localhost:3000/siswa/${idsiswa}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSiswa(res);
      });
  }

  useEffect(() => {
    loadDataSiswa();
  }, []);

  return (
    <div>
      <div>
        <Link to="/siswa">Back</Link>
      </div>
      <div className="p-4 border">
        <div> id {siswa.id}</div>
        <div> nama {siswa.nama}</div>
        <div> alamat {siswa.alamat}</div>
      </div>
    </div>
  );
}
