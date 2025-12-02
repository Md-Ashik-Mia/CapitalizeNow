// export default function TrendCard({ trend }: any) {
//   return (
//     <div className="bg-black/30 border border-white/10 rounded-xl p-5 shadow-lg flex flex-col">

//       {/* Tags */}
//       <div className="flex gap-2 mb-3">
//         <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
//           {trend.category}
//         </span>
//         <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
//           {trend.duration}
//         </span>
//       </div>
//       <h3 className="text-lg font-semibold text-white">{trend.title}</h3>
//       <p className="text-gray-300 text-sm mt-2">{trend.description}</p>
//       {/* Confidence Meter */}
//       <div className="mt-4">
//         <p className="text-sm text-gray-400">Confidence</p>
//         <div className="w-full bg-white/10 rounded-full h-2 mt-1">
//           <div
//             className="bg-pink-500 h-full rounded-full"
//             style={{ width: `${trend.confidence}%` }}
//           ></div>
//         </div>
//       </div>
//       <button className="mt-4 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full text-white text-sm">
//         Boost
//       </button>
//     </div>
//   );
// }



