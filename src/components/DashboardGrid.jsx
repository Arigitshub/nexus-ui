import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Zap, Server, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Chart configurations optimized for Dark Mode "GlassBox" themes
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#888' } },
    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#888' } }
  }
};

const lineData = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
  datasets: [{
    fill: true,
    data: [65, 85, 45, 115, 95, 130, 110],
    borderColor: '#00ffcc',
    backgroundColor: 'rgba(0, 255, 204, 0.1)',
    tension: 0.4,
  }]
};

const barData = {
  labels: ['Compute', 'Database', 'Cache', 'Storage', 'Network'],
  datasets: [{
    data: [90, 75, 60, 45, 80],
    backgroundColor: 'rgba(128, 90, 255, 0.6)',
    borderColor: '#805aff',
    borderWidth: 1,
    borderRadius: 4,
  }]
};

const MetricCard = ({ title, value, change, trend, icon }) => (
  <div className="glass-panel p-6 flex flex-col justify-between h-36 border-t-2 border-t-nexus-accent/50">
    <div className="flex justify-between items-start">
      <span className="text-gray-400 font-medium text-sm">{title}</span>
      <div className="text-nexus-accent bg-nexus-accent/10 p-2 rounded-lg">
        {icon}
      </div>
    </div>
    <div className="flex items-end justify-between">
      <h3 className="text-3xl font-bold tracking-tight text-white">{value}</h3>
      <span className={`flex items-center text-sm font-semibold ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
        {trend === 'up' ? <ArrowUpRight size={16} className="mr-1"/> : <ArrowDownRight size={16} className="mr-1"/>}
        {change}
      </span>
    </div>
  </div>
);

export default function DashboardGrid() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Total Compute Output" value="2.4 PFLOPs" change="+14.5%" trend="up" icon={<Server size={20} />} />
        <MetricCard title="Active Connections" value="14,093" change="+2.4%" trend="up" icon={<Activity size={20} />} />
        <MetricCard title="Energy Consumption" value="482 kWh" change="-5.2%" trend="down" icon={<Zap size={20} />} />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart spanning 2 columns */}
        <div className="lg:col-span-2 glass-panel p-6 h-96 flex flex-col">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">Network Activity Telemetry</h2>
            <p className="text-sm text-gray-400">Real-time packet throughput over 24h cycle.</p>
          </div>
          <div className="flex-1 min-h-0 relative">
            <Line data={lineData} options={commonOptions} />
          </div>
        </div>

        {/* Bar Chart 1 column */}
        <div className="glass-panel p-6 h-96 flex flex-col border-t-2 border-t-[#805aff]/50">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">Resource Allocation</h2>
            <p className="text-sm text-gray-400">Current load distributions.</p>
          </div>
          <div className="flex-1 min-h-0 relative">
            <Bar data={barData} options={commonOptions} />
          </div>
        </div>
      </div>
      
      {/* Bottom Data Table section */}
      <div className="glass-panel p-6 overflow-x-auto">
        <h2 className="text-lg font-semibold text-white mb-4">Live Edge Nodes</h2>
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="text-gray-400 border-b border-nexus-border">
            <tr>
              <th className="pb-3 font-medium px-4">Node ID</th>
              <th className="pb-3 font-medium px-4">Status</th>
              <th className="pb-3 font-medium px-4">Region</th>
              <th className="pb-3 font-medium px-4 text-right">Latency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-nexus-border">
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 font-mono text-nexus-accent">nx-node-a1</td>
              <td className="py-4 px-4"><span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Healthy</span></td>
              <td className="py-4 px-4">us-east-1</td>
              <td className="py-4 px-4 text-right">14ms</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 font-mono text-nexus-accent">nx-node-b4</td>
              <td className="py-4 px-4"><span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Healthy</span></td>
              <td className="py-4 px-4">eu-west-2</td>
              <td className="py-4 px-4 text-right">42ms</td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 font-mono text-nexus-accent">nx-node-c9</td>
              <td className="py-4 px-4"><span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Warning</span></td>
              <td className="py-4 px-4">ap-south-1</td>
              <td className="py-4 px-4 text-right text-yellow-400">214ms</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
