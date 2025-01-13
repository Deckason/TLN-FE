'use client'

import { useState } from 'react'

const dummyPolicies = [
  {
    _id: "676c18cffdfb0c036744de3c",
    title: "User Agreement",
    description: [
      "The user agrees to comply with all applicable laws.",
      "The user is responsible for maintaining the confidentiality of their account."
    ],
    createdAt: "2024-12-25T14:38:07.116Z",
    updatedAt: "2024-12-25T14:38:07.116Z",
  },
  {
    _id: "676c18cffdfb0c036744de3d",
    title: "Privacy Policy",
    description: [
      "We collect and process your personal data in accordance with this Privacy Policy.",
      "Your data is protected using industry-standard security measures.",
      "We do not sell your personal information to third parties."
    ],
    createdAt: "2024-12-25T14:38:07.116Z",
    updatedAt: "2024-12-25T14:38:07.116Z",
  },
  {
    _id: "676c18cffdfb0c036744de3e",
    title: "Cookie Policy",
    description: [
      "We use cookies to enhance your browsing experience.",
      "You can control cookie preferences through your browser settings.",
      "Essential cookies are necessary for the website to function properly."
    ],
    createdAt: "2024-12-25T14:38:07.116Z",
    updatedAt: "2024-12-25T14:38:07.116Z",
  }
]

export default function PrivacyPolicy() {
  const [expandedPolicy, setExpandedPolicy] = useState(null)

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <div className="bg-[#21B6A8] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Privacy Policy & Terms
          </h1>
          <p className="text-center text-lg opacity-90">
            Your privacy matters to us. Learn about how we protect and handle your data.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {dummyPolicies.map((policy) => (
            <div key={policy._id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => setExpandedPolicy(expandedPolicy === policy._id ? null : policy._id)}
                className="w-full text-left px-6 py-4 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">{policy.title}</h2>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform ${
                      expandedPolicy === policy._id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedPolicy === policy._id && (
                <div className="px-6 py-4 bg-gray-50">
                  <div className="space-y-3">
                    {policy.description.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-[#21B6A8]" />
                        <p className="ml-4 text-gray-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Last updated: {new Date(policy.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        {/* <div className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Questions About our Policies?
          </h2>
          <p className="text-gray-600">
            If you have any questions about our policies, please don't hesitate to contact our support team.
            We're here to help you understand how we protect your privacy and ensure a secure experience.
          </p>
          <button 
            className="mt-6 px-6 py-3 bg-[#21B6A8] text-white rounded-lg hover:bg-[#1a8f85] transition-colors focus:outline-none focus:ring-2 focus:ring-[#21B6A8] focus:ring-opacity-50"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Support
          </button>
        </div> */}
      </div>
    </div>
  )
}

