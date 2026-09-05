import React from 'react';
import { Clock, MapPin, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div className="card p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {train.trainName}
          </h3>
          <span className="inline-block px-2 py-1 mt-1 text-xs font-semibold bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 rounded">
            #{train.trainNumber}
          </span>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Duration</div>
          <div className="text-slate-800 dark:text-slate-200 font-semibold">{train.duration}</div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col items-center">
          <div className="text-lg font-bold text-slate-900 dark:text-white">{train.departureTime}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{train.source}</div>
        </div>
        
        <div className="flex-1 px-4 flex items-center justify-center relative">
          <div className="h-0.5 w-full bg-slate-200 dark:bg-slate-700 absolute"></div>
          <TrainIcon className="text-brand-500 relative z-10 bg-white dark:bg-slate-800 px-2" />
        </div>

        <div className="flex flex-col items-center">
          <div className="text-lg font-bold text-slate-900 dark:text-white">{train.arrivalTime}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{train.destination}</div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
        <div className="flex space-x-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <span 
              key={i} 
              className={`w-6 h-6 flex items-center justify-center text-xs rounded-full ${
                train.days.includes(day) 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold' 
                  : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600'
              }`}
            >
              {day}
            </span>
          ))}
        </div>
        <Link 
          to={`/train/${train.trainNumber}`} 
          className="text-brand-600 dark:text-brand-400 text-sm font-medium hover:underline"
        >
          View Schedule
        </Link>
      </div>
    </div>
  );
};

// Helper SVG Icon
const TrainIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="16" height="16" x="4" y="3" rx="2" />
    <path d="M4 11h16" />
    <path d="M12 3v8" />
    <path d="m8 19-2 3" />
    <path d="m18 22-2-3" />
    <path d="M8 15h0" />
    <path d="M16 15h0" />
  </svg>
);

export default TrainCard;
