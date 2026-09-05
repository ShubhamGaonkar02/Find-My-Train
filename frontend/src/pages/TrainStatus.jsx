import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTrainStatus } from '../services/dataService';
import { MapPin, Clock, ArrowRight, Activity, AlertTriangle, ExternalLink } from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader';
import { motion } from 'framer-motion';

const TrainStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true);
        const data = await getTrainStatus(id);
        setStatus(data);
      } catch (err) {
        setError('Train not found or API error.');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [id]);

  if (loading && !status) return <div className="max-w-3xl mx-auto py-8"><SkeletonLoader count={1} /></div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link to="/" className="text-brand-600 hover:underline mb-4 inline-block">&larr; Back to Search</Link>
      
      <div className="card p-6 mb-8 bg-gradient-to-br from-brand-600 to-indigo-700 text-white border-0">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">{status.trainName}</h1>
            <p className="text-brand-100 font-medium">#{status.trainNumber}</p>
          </div>
          <a
            href="https://find-my-train-ntes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-md self-start sm:self-auto"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Track Live NTES Status</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Route Schedule</h2>
      <div className="card overflow-hidden">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
          
          <ul className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {status.route.map((station, i) => {
              return (
                <li key={i} className="p-4 pl-16 relative hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 z-10 -ml-[7px] top-1/2 -mt-2 bg-slate-300 dark:bg-slate-600"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        {station.stationName}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Code: {station.stationCode}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-row space-x-6">
                      <div className="text-center">
                        <p className="text-xs text-slate-400">Arr.</p>
                        <p className="font-medium text-slate-700 dark:text-slate-300">{station.arrivalTime}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-slate-400">Dep.</p>
                        <p className="font-medium text-slate-700 dark:text-slate-300">{station.departureTime}</p>
                      </div>
                      <div className="text-center min-w-[60px]">
                        <p className="text-xs text-slate-400">Platform</p>
                        <p className="font-medium text-slate-700 dark:text-slate-300">PF {station.platform}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainStatus;
