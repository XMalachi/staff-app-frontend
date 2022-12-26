import React from 'react'
import {
    XIcon,
  } from '@heroicons/react/outline'
export default function AddTaskForm({showAddTaskForm}) {
    return (
        <form className="realtive space-y-8 divide-y divide-gray-200">
        <div className="absolute top-0 right-6" onClick={showAddTaskForm}>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Add Task</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Set Up a task and designate it to one or more of your staffs.
                        </p>
                    </div>
        
                    
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Owner (by Username)
                            </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                workcation.com/
                                </span>
                                <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Subject
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        </div>
                    </div>
        
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Task
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                                defaultValue={''}
                            />
                            <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                        </div>
                    </div>
        
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                        Upload File (coming soon)
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="flex items-center">
                                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                </span>
                                <button
                                type="button"
                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                Change
                                </button>
                            </div>
                        </div>
                    </div>
        
                    
                    </div>
                </div>
            </form>
    )
  }
  