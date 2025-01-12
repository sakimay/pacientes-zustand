import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientsList() {
  const { patients } = usePatientStore()

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-boldF">Pacientes y citas</span>
          </p>

          {patients.map((patient) => (
            <PatientDetails
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  )
}
