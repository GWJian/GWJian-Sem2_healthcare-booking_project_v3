//this is the appoiment page
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import Moment from "react-moment";
import { getOwnAppointments, updateStatus } from "@/pages/api/userappoiment";
import UserCreateAppoitment from "@/components/appoitment/UserCreateAppoitment";

export default function Appoiment() {
  const queryClient = useQueryClient();
  const [showAddAppointmentForm, setShowAddAppointmentForm] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState({
    status: "",
  });
  const [editModes, setEditModes] = useState({});

  // ================= Get Own Appoiment Start =================
  const { data } = useQuery("customerAppointments", getOwnAppointments, {
    select: (data) => data.sort((a, b) => new Date(b.date) - new Date(a.date)),
  });

  // ================= Get Own Appoiment End =================

  // ================= Update Appoiment Start =================
  const handleEditForm = (id) => {
    setEditModes((prevModes) => ({
      ...prevModes,
      [id]: true,
    }));
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [id]: "",
    }));
  };

  const handleCancelEdit = (id) => {
    setEditModes((prevModes) => ({
      ...prevModes,
      [id]: false,
    }));
  };

  const handleUpdateStatus = async (id) => {
    try {
      await updateStatus(id, { status: selectedStatus[id] });
      queryClient.invalidateQueries("customerAppointments");
      Swal.fire(
        "Updated!",
        "Your appointment has been updated.",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          handleCancelEdit(id);
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  // ================= Update Appoiment End =================

  // ================= Create Appoiment Start =================
  const handleAddAppointment = () => {
    setShowAddAppointmentForm(true);
  };

  const handleCancelAddAppointment = () => {
    setShowAddAppointmentForm(false);
  };

  if (showAddAppointmentForm) {
    return <UserCreateAppoitment onClose={handleCancelAddAppointment} />;
  }
  // ================= Create Appoiment End =================

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-20">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Appointment
          </h3>
          <p className="text-gray-600 mt-2">This is the Appoiment page</p>
        </div>

        {/* ================= Create Appoiment Button Start =================  */}
        <div className="mt-3 md:mt-0">
          <button
            onClick={handleAddAppointment}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Create Appointment
          </button>
        </div>
        {/* ================= Create Appoiment Button End =================  */}
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Doctor</th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y bg-gray-100">
            {data?.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.doctor.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Moment format="YYYY/MM/DD">{item.date}</Moment>
                </td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>

                {/* =================== Select Status Start ===================    */}

                <td
                  className={`px-6 py-4 whitespace-nowrap rounded-md block text-center font-medium mt-2
                  ${
                    item.status === "accepted"
                      ? "bg-green-500 text-gray-700"
                      : item.status === "cancelled"
                      ? "bg-red-500 text-gray-700"
                      : "border-2 border-yellow-300 text-gray-700"
                  }`}
                >
                  {editModes[item._id] ? (
                    <select
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      value={selectedStatus[item._id]}
                      onChange={(e) =>
                        setSelectedStatus((prevStatus) => ({
                          ...prevStatus,
                          [item._id]: e.target.value,
                        }))
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  ) : (
                    item.status
                  )}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {editModes[item._id] ? (
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleUpdateStatus(item._id)}
                        className="inline-flex items-center justify-center px-4 py-2 text-white duration-150 font-medium bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-700 md:text-sm"
                      >
                        Confirm
                      </button>

                      <button
                        onClick={() => handleCancelEdit(item._id)}
                        className="inline-flex items-center justify-center px-4 py-2 text-white duration-150 font-medium bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 md:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleEditForm(item._id)}
                        disabled={
                          item.status === "cancelled" ||
                          item.status === "accepted"
                            ? true
                            : false
                        }
                        className="btn"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </td>
                {/* =================== Select Status End ===================     */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
