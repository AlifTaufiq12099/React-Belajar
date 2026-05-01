import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/ordersData.json";

const INITIAL_ORDER = {
  orderId: "",
  customerName: "",
  status: "Pending",
  totalPrice: "",
  orderDate: ""
};

function Order() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState(INITIAL_ORDER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextOrder = {
      ...formValues,
      orderId: formValues.orderId || `ORD-${1000 + orders.length + 1}`,
      totalPrice: formValues.totalPrice || "Rp 0",
    };

    setOrders((prev) => [nextOrder, ...prev]);
    setFormValues(INITIAL_ORDER);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Orders" breadcrumb={["Home", "Orders"]}>
        <button
          type="button"
          className="bg-hijau hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Close Form" : "Add Orders"}
        </button>
      </PageHeader>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="font-medium text-slate-700">Order ID</span>
              <input
                type="text"
                name="orderId"
                value={formValues.orderId}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="ORD-1031"
              />
            </label>
            <label className="space-y-2">
              <span className="font-medium text-slate-700">Customer Name</span>
              <input
                type="text"
                name="customerName"
                value={formValues.customerName}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Nama pelanggan"
              />
            </label>
            <label className="space-y-2">
              <span className="font-medium text-slate-700">Status</span>
              <select
                name="status"
                value={formValues.status}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </label>
            <label className="space-y-2">
              <span className="font-medium text-slate-700">Total Price</span>
              <input
                type="text"
                name="totalPrice"
                value={formValues.totalPrice}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Rp 1.500.000"
              />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="font-medium text-slate-700">Order Date</span>
              <input
                type="date"
                name="orderDate"
                value={formValues.orderDate}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-hijau hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
            >
              Save Order
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Order ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Customer</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Total Price</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Order Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {orders.map((order) => (
              <tr key={order.orderId} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-700">{order.orderId}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{order.customerName}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{order.status}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{order.totalPrice}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
