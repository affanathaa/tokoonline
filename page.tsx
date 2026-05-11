import React from 'react';

// Kamu bisa memisahkan komponen ini ke folder /components jika ingin lebih rapi
const StatCard = ({ title, value, icon }: { title: string; value: string; icon: string }) => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-gray-900">{value}</h3>
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  </div>
);

export default function AdminDashboard() {
  // Data dummy untuk tampilan
  const recentOrders = [
    { id: '#1234', customer: 'Budi Santoso', status: 'Selesai', total: 'Rp 150.000' },
    { id: '#1235', customer: 'Siti Aminah', status: 'Proses', total: 'Rp 275.000' },
    { id: '#1236', customer: 'Andi Wijaya', status: 'Pending', total: 'Rp 50.000' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
        <p className="text-gray-600">Selamat datang kembali, berikut ringkasan toko Anda hari ini.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Penjualan" value="Rp 12.500.000" icon="💰" />
        <StatCard title="Pesanan Baru" value="24" icon="📦" />
        <StatCard title="Pelanggan" value="1,240" icon="👥" />
        <StatCard title="Produk Aktif" value="48" icon="🛒" />
      </div>

      {/* Main Content: Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Pesanan Terbaru</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Lihat Semua
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">ID Pesanan</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Pelanggan</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Selesai' ? 'bg-green-100 text-green-700' : 
                      order.status === 'Proses' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}