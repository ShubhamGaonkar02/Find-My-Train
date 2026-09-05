import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchStations } from '../services/dataService';
import { MapPin, LayoutDashboard, Train } from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader';

const StationDetails = () => {
  const { id } = useParams();
  const [station, setStation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStation = async () => {
      try {
        setLoading(true);
        // We reuse the search endpoint since our mock API doesn't have a specific station ID endpoint
        const data = await searchStations(id);
        if(data.length > 0) {
          setStation(data[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStation();
  }, [id]);

  if (loading) return <div className="max-w-3xl mx-auto py-8"><SkeletonLoader count={1} /></div>;
  if (!station) return <div className="text-center py-12">Station not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link to="/" className="text-brand-600 hover:underline mb-4 inline-block">&larr; Back to Search</Link>
      
      <div className="card p-6 md:p-10 mb-8 border-t-4 border-t-brand-500">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 rounded-2xl flex items-center justify-center">
              <MapPin size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {station.stationName}
              </h1>
              <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-semibold rounded uppercase tracking-wider text-sm">
                {station.stationCode}
              </span>
            </div>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-4">
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 min-w-[100px]">
              <LayoutDashboard className="mx-auto text-slate-400 mb-2" size={24} />
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{station.platforms}</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Platforms</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6 text-center">
        <Train className="mx-auto text-slate-300 dark:text-slate-600 mb-4" size={48} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Live Departures / Arrivals</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
          This mock application currently displays station info. Live train boards for specific stations would appear here.
        </p>
        <Link to="/route" className="btn-primary inline-flex">
          Search trains from here
        </Link>
      </div>
    </div>
  );
};

export default StationDetails;
