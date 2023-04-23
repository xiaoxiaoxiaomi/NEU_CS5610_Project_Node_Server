import * as appointmentsDao from "../appointments/appointments-dao.js";

const AppointmentController = (app) => {
  app.get("/api/appointments", findAllAppointments);
  app.get("/api/appointments/user/:id", findAppointmentsByUserId);
  app.post("/api/appointments", createAppointment);
  app.delete("/api/appointments/:id", deleteAppointment);
  app.put("/api/appointments/:id", updateAppointment);
};

const findAllAppointments = async (req, res) => {
  const appointments = await appointmentsDao.findAllAppointments();
  res.json(appointments);
};

const findAppointmentsByUserId = async (req, res) => {
  const userId = req.params.id;
  const appointments = await appointmentsDao.findAppointmentsByUserId(userId);
  res.json(appointments);
};

const createAppointment = async (req, res) => {
  const appointment = req.body;
  appointment._id = new Date().getTime() + "";
  console.log(appointment);
  const newAppointment = await appointmentsDao.createAppointment(appointment);
  res.json(newAppointment);
};

const deleteAppointment = async (req, res) => {
  const appointmentId = req.params.id;
  const status = await appointmentsDao.deleteAppointment(appointmentId);
  res.send(status);
};

const updateAppointment = async (req, res) => {
  const appointmentId = req.params.id;
  const appointment = req.body;
  const status = await appointmentsDao.updateAppointment(
    appointmentId,
    appointment
  );
  res.send(status);
};

export default AppointmentController;
