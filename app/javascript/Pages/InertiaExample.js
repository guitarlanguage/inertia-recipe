import React from 'react';

const InertiaExample = ({name, user}) => (
  <>
    <h1>Hello {name}!</h1>
    <div className="pb-5 border-b border-gray-200">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
         Fringilla egestas justo massa purus sagittis malesuada.
      </p>
    </div>
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
    </div>
  </>
);

export default InertiaExample;
