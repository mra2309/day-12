import React, { useState } from "react";
import { redirect } from "react-router-dom";

export default function SiswaAdd() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");

  function saveDataSiswa() {
    fetch("http://localhost:3000/siswa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: nama,
        alamat: alamat,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("simpan sukses");
        redirect("/siswa");
      });
  }

  return (
    <div className="w-1/3">
      <form>
        <div className="flex flex-col">
          <label htmlFor="">Nama</label>
          <input
            type="text"
            className="p-2 border"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Alamat</label>
          <input
            type="text"
            className="p-2 border"
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>
        <input
          type="button"
          onClick={() => {
            saveDataSiswa();
          }}
          value={"simpan"}
          className="w-full p-2 my-2 text-blue-600 bg-blue-100 rounded"
        />
      </form>
    </div>
  );
}
