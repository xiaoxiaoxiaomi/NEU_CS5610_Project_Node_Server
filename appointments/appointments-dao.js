import appointmentsModel from "./appointments-model.js";

export const findAllAppointments = () => appointmentsModel.find();

export const findAppointmentsByUserId = (id) => {
  return appointmentsModel.find({ user_id: id });
};

export const createAppointment = (appointment) =>
  appointmentsModel.create(appointment);

export const deleteAppointment = (id) =>
  appointmentsModel.deleteOne({ _id: id });

export const updateAppointment = (id, appointment) =>
  appointmentsModel.updateOne({ _id: id }, appointment);
