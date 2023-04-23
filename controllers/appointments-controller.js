import * as appointmentsDao from "../appointments/appointments-dao.js";

function combineDateAndTime(timeString) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const [hours, minutes] = timeString.split(":");

  return new Date(year, month, day, parseInt(hours, 10), parseInt(minutes, 10));
}

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
  // appointment.time = combineDateAndTime(appointment.time);
  const localDateTime = combineDateAndTime(appointment.time);
  appointment.time = localDateTime.toISOString().slice(0, 19);
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
  appointment.time = combineDateAndTime(appointment.time);
  const status = await appointmentsDao.updateAppointment(
    appointmentId,
    appointment
  );
  res.send(status);
};

export default AppointmentController;
