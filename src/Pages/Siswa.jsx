import React, { useEffect, useState } from "react";
import ListSiswa from "../Components/ListSiswa";
import { Link } from "react-router-dom";

export default function Siswa() {
  const [siswa, setSiswa] = useState([]);

  function loadDataSiswa() {
    fetch(`http://localhost:3000/siswa`)
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
      <Link to="/siswa/add" className="">
        TAMBAH SISWA BARU
      </Link>
      <ListSiswa data={siswa} />
    </div>
  );
}
