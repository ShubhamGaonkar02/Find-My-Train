import React, { useState, useEffect } from 'react';
import { getTrainsBetweenStations } from '../services/dataService';
import { Search, MapPin } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import TrainCard from '../components/TrainCard';
import SkeletonLoader from '../components/SkeletonLoader';
import { motion } from 'framer-motion';

const RouteSearch = () => {
  const [searchParams] = useSearchParams();
  const [source, setSource] = useState(searchParams.get('source') || '');
  const [destination, setDestination] = useState(searchParams.get('destination') || '');
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (source && destination && !searched) {
      handleSearch({ preventDefault: () => {} });
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!source || !destination) return;
    
    setLoading(true);
    setSearched(true);
    try {
      const data = await getTrainsBetweenStations(source, destination);
      setTrains(data);
    } catch (err) {
      console.error(err);
      setTrains([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
        Find Trains
      </h1>

      <form onSubmit={handleSearch} className="card p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1 relative">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">From Station</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                className="input-field pl-10 uppercase" 
                placeholder="Ex: NDLS" 
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex-1 relative">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">To Station</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                className="input-field pl-10 uppercase" 
                placeholder="Ex: MMCT" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto h-12 mt-4 md:mt-0">
            <Search className="h-5 w-5 mr-2" /> Search
          </button>
        </div>
      </form>

      <div>
        {loading ? (
          <SkeletonLoader count={3} />
        ) : searched ? (
          trains.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
                {trains.length} Trains Found
              </h2>
              {trains.map((train, i) => (
                <TrainCard key={i} train={train} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4 flex justify-center">
                <Search size={48} />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">No trains found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try changing the station codes or checking the spelling.</p>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default RouteSearch;
