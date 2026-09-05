import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Train, Map, MapPin, Sparkles, Activity, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import { vandeBharatRoutes } from '../data/vandeBharat';
import { rajdhaniRoutes } from '../data/rajdhani';

const Home = () => {
  const navigate = useNavigate();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleRouteSearch = (e) => {
    e.preventDefault();
    if (source && destination) {
      navigate(`/route?source=${source}&destination=${destination}`);
    } else {
      navigate('/route');
    }
  };

  return (
    <div className="min-h-[90vh] w-full bg-transparent py-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl relative z-30"
      >
        <div className="text-center mb-12">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            Find your train <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
              routes & schedules.
            </span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Experience the fastest way to check train schedules, find routes between stations, and get platform details instantly.
          </p>
        </div>

        <div className="flex flex-col space-y-16 lg:space-y-24 max-w-3xl mx-auto">
          
          {/* Card 1: Live Train Status / PNR Status */}
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/50 dark:border-slate-700/50 relative overflow-visible"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-2xl">
                  <Activity className="text-brand-600 dark:text-brand-400" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Live Train Status / PNR Status
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Live NTES
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Real-time train running status, delay tracking, and 10-digit PNR enquiry
                  </p>
                </div>
              </div>
            </div>
            
            <a
              href="https://find-my-train-ntes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-500 hover:via-indigo-500 hover:to-brand-600 text-white font-bold py-5 px-6 rounded-2xl shadow-lg shadow-brand-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 text-base md:text-lg group cursor-pointer"
            >
              <Train size={22} className="group-hover:translate-x-0.5 transition-transform" />
              <span>Track Live Train Status / PNR Status</span>
              <ExternalLink size={18} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Card 2: Search by Station */}
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/50 dark:border-slate-700/50 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-2xl">
                  <Map className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Plan Journey</h2>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              {/* From Input */}
              <div className="relative bg-slate-50 dark:bg-slate-900/50 p-3 border border-slate-200 dark:border-slate-700 rounded-2xl flex-1 w-full focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
                 <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 pl-2">Leaving From</label>
                 <input 
                   type="text" 
                   className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white text-lg placeholder-slate-400 font-semibold uppercase pl-2" 
                   placeholder="e.g. NDLS" 
                   value={source}
                   onChange={(e) => setSource(e.target.value)}
                 />
              </div>
              
              {/* Swap Button */}
              <button 
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-full p-3 shadow-sm text-brand-500 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 transition-all z-10 shrink-0"
                onClick={() => {
                  const temp = source;
                  setSource(destination);
                  setDestination(temp);
                }}
              >
                <ArrowLeftRight size={20} />
              </button>

              {/* To Input */}
              <div className="relative bg-slate-50 dark:bg-slate-900/50 p-3 border border-slate-200 dark:border-slate-700 rounded-2xl flex-1 w-full focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
                 <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 pl-2">Going To</label>
                 <input 
                   type="text" 
                   className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white text-lg placeholder-slate-400 font-semibold uppercase pl-2" 
                   placeholder="e.g. MMCT"
                   value={destination}
                   onChange={(e) => setDestination(e.target.value)}
                 />
              </div>
            </div>

            <button 
              onClick={handleRouteSearch}
              className="w-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-500/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center text-base md:text-lg"
            >
              Search Trains
            </button>
          </motion.div>

          {/* Card 3: Search Station Details */}
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/50 dark:border-slate-700/50 relative overflow-visible"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-2xl">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Station Details</h2>
              </div>
            </div>
            
            <div className="relative group mb-2">
               <div className="relative z-20">
                 <SearchBox 
                   type="station" 
                   placeholder="Enter Station Name or Code (e.g. NDLS or New Delhi)" 
                   hideIcon={false}
                   inputClassName="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-5 text-slate-900 dark:text-white text-lg placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all outline-none pl-14 shadow-sm font-medium"
                 />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Vande Bharat Premium Section */}
        <div className="mt-32 w-full max-w-6xl mx-auto relative z-20 pb-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4 md:px-0 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white drop-shadow-sm flex items-center gap-3">
                <span className="bg-brand-100 dark:bg-brand-900/50 p-2 rounded-xl text-brand-600 dark:text-brand-400">
                  <Sparkles size={24} />
                </span>
                Vande Bharat Express
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm font-medium">Experience India's fastest and most premium train network.</p>
            </div>
            <div className="w-full md:w-80 relative">
              <SearchBox 
                type="train" 
                placeholder="Search VB Train No. (e.g. 22435)" 
                hideIcon={false}
                inputClassName="w-full bg-white dark:bg-slate-900 border-2 border-brand-600 dark:border-brand-500 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:ring-4 focus:ring-brand-500/20 transition-all outline-none pl-11 shadow-lg font-bold"
              />
            </div>
          </div>
          
          <div 
            className="flex overflow-x-auto pb-8 pt-4 px-4 md:px-0 gap-6 snap-x" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {vandeBharatRoutes.map((route) => {
              const t1 = route.numbers.split(' / ')[0]?.trim();
              const t2 = route.numbers.split(' / ')[1]?.trim();
              return (
              <motion.div 
                key={route.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className="min-w-[300px] bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50 dark:border-slate-700/50 snap-start shrink-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {route.numbers}
                    </div>
                    <Train size={20} className="text-brand-500 opacity-50" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">
                    {route.name}
                  </h3>
                  <div className="flex items-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                    <span>{route.codes.split(' – ')[0]}</span>
                    <ArrowLeftRight size={14} className="mx-2 text-slate-400" />
                    <span>{route.codes.split(' – ')[1].split('/')[0]}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-auto">
                  {t1 && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/train/${t1}`); }}
                      className="flex-1 bg-brand-100 hover:bg-brand-200 dark:bg-brand-900/30 dark:hover:bg-brand-800/50 text-brand-700 dark:text-brand-300 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      View {t1}
                    </button>
                  )}
                  {t2 && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/train/${t2}`); }}
                      className="flex-1 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:hover:bg-indigo-800/50 text-indigo-700 dark:text-indigo-300 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      View {t2}
                    </button>
                  )}
                </div>
              </motion.div>
            )})}
          </div>
        </div>
        
        {/* Rajdhani Express Section */}
        <div className="mt-8 w-full max-w-6xl mx-auto relative z-10 pb-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4 md:px-0 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white drop-shadow-sm flex items-center gap-3">
                <span className="bg-red-100 dark:bg-red-900/50 p-2 rounded-xl text-red-600 dark:text-red-400">
                  <Train size={24} />
                </span>
                Rajdhani Express
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm font-medium">India's legendary high-speed premier connectivity.</p>
            </div>
            <div className="w-full md:w-80 relative">
              <SearchBox 
                type="train" 
                placeholder="Search Rajdhani No. (e.g. 12951)" 
                hideIcon={false}
                inputClassName="w-full bg-white dark:bg-slate-900 border-2 border-red-600 dark:border-red-500 rounded-xl px-4 py-3 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:ring-4 focus:ring-red-500/20 transition-all outline-none pl-11 shadow-lg font-bold"
              />
            </div>
          </div>
          
          <div 
            className="flex overflow-x-auto pb-8 pt-4 px-4 md:px-0 gap-6 snap-x" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {rajdhaniRoutes.map((route) => {
              const t1 = route.numbers.split(' / ')[0]?.trim();
              const t2 = route.numbers.split(' / ')[1]?.trim();
              return (
              <motion.div 
                key={route.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className="min-w-[300px] bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50 dark:border-slate-700/50 snap-start shrink-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {route.numbers}
                    </div>
                    <Train size={20} className="text-red-500 opacity-50" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">
                    {route.name}
                  </h3>
                  <div className="flex items-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                    <span>{route.codes.split(' – ')[0]}</span>
                    <ArrowLeftRight size={14} className="mx-2 text-slate-400" />
                    <span>{route.codes.split(' – ')[1].split('/')[0]}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-auto">
                  {t1 && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/train/${t1}`); }}
                      className="flex-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/50 text-red-700 dark:text-red-300 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      View {t1}
                    </button>
                  )}
                  {t2 && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/train/${t2}`); }}
                      className="flex-1 bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/30 dark:hover:bg-orange-800/50 text-orange-700 dark:text-orange-300 py-2 rounded-lg text-sm font-bold transition-colors"
                    >
                      View {t2}
                    </button>
                  )}
                </div>
              </motion.div>
            )})}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Home;
