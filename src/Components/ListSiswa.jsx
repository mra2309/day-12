import React from "react";
import { Link } from "react-router-dom";

export default function ListSiswa(props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {props.data.map((siswa) => {
        return (
          <Link
            to={`/siswa/${siswa.id}`}
            className="p-4 text-center border hover:border-blue-400"
            key={siswa.id}
          >
            <h1 className="font-semibold">{siswa.nama}</h1>
            <label className="mt-4 font-semibold">{siswa.alamat}</label>
          </Link>
        );
      })}
    </div>
  );
}
