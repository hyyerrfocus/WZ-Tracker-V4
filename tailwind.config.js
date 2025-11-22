module.exports = {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    'bg-green-500/10','bg-green-500/20','border-green-500/40','text-green-400',
    'bg-yellow-500/10','bg-yellow-500/20','border-yellow-500/40','text-yellow-400',
    'bg-red-500/10','bg-red-500/20','border-red-500/40','text-red-400',
    'bg-slate-600','bg-green-600','bg-blue-600','bg-orange-600','bg-pink-600','bg-teal-600','bg-red-600','bg-yellow-700','bg-purple-700','bg-fuchsia-800',
    'bg-opacity-10','bg-opacity-20'
  ]
}