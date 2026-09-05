import React from 'react';

const SkeletonLoader = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card p-5 animate-pulse mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
              <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="text-right">
              <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded mb-2 ml-auto"></div>
              <div className="h-5 w-12 bg-slate-200 dark:bg-slate-700 rounded ml-auto"></div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col items-center">
              <div className="h-6 w-12 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
              <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="flex-1 px-4">
              <div className="h-0.5 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-12 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
              <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
