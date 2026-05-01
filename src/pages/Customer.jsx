import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../assets/customersData.json";

const INITIAL_CUSTOMER = {
  customerId: "",
  customerName: "",
  email: "",
  phone: "",
  loyalty: "Bronze"
};

function Customer() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState(INITIAL_CUSTOMER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextCustomer = {
      ...formValues,
      customerId: formValues.customerId || `CUST-${2000 + customers.length + 1}`,
    };

    setCustomers((prev) => [nextCustomer, ...prev]);
    setFormValues(INITIAL_CUSTOMER);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Customers" breadcrumb={["Homea", "Customers"]}>
        <button
          type="button"
          className="bg-hijau hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Close Form" : "Add Customer"}
        </button>
      </PageHeader>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="font-medium text-slate-700">Customer ID</span>
              <input
                type="text"
                name="customerId"
                value={formValues.customerId}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="CUST-2031"
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
              <span className="font-medium text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="email@example.com"
              />
            </label>
            <label className="space-y-2">
              <span className="font-medium text-slate-700">Phone</span>
              <input
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="0812-3456-7890"
              />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="font-medium text-slate-700">Loyalty</span>
              <select
                name="loyalty"
                value={formValues.loyalty}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
              >
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-hijau hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
            >
              Save Customer
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Customer ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-slate-600">Loyalty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {customers.map((customer) => (
              <tr key={customer.customerId} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-700">{customer.customerId}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{customer.customerName}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{customer.email}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{customer.phone}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{customer.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customer;
