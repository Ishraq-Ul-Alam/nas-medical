import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { Button } from '@/components/ui/button'
import BookAppoinment from './BookAppoinment'

// Function to recursively render rich text JSON structure
function renderRichTextContent(content) {
  return content.map((element, index) => {
    // Handle different types of elements
    switch (element.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-2">
            {renderRichTextContent(element.children)}
          </p>
        )
      case 'text':
        return <span key={index}>{element.text}</span>
      // Add other element types as needed (e.g., headings, links, images, etc.)
      default:
        return null
    }
  })
}

function DoctorDetail({ doctor }) {
  const htmlContent = doctor.attributes.About

  // Check if the content is in JSON format
  const contentAsJson =
    typeof htmlContent === 'object' ? htmlContent : JSON.parse(htmlContent)

  return (
    <div className="doctor-detail-container grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Doctor Image */}
      <div className="doctor-image-wrapper">
        <Image
          src={doctor.attributes?.image?.data?.attributes?.url}
          width={200}
          height={200}
          alt={`Doctor ${doctor.attributes?.Name}`}
          className="rounded-lg  h-auto object-cover"
        />
      </div>

      {/* Doctor Name and Category */}
      <div className="doctor-info col-span-2 mt-5">
        <h2 className="doctor-name font-bold text-2xl">
          {doctor.attributes?.Name}
        </h2>
        <span className="doctor-category text-lg bg-blue-100 p-1 rounded-full px-2 text-primary">
          {doctor.attributes?.category?.data?.attributes?.Name}
        </span>

        <h2 className="font-bold mt-2">
          Start Time: {doctor.attributes?.StartTime}
        </h2>

        <h2 className="font-bold mt-1">
          End Time: {doctor.attributes?.EndTime}
        </h2>

        <BookAppoinment doctor={doctor} />
      </div>

      {/* Doctor About Section */}
      <div className="doctor-about col-span-3 mt-4">
        <h2 className="font-bold text-2xl mb-2">About Doctor</h2>
        <div className="rich-text-content leading-relaxed">
          {/* Render the rich text JSON structure */}
          {renderRichTextContent(contentAsJson)}
        </div>
      </div>
    </div>
  )
}

export default DoctorDetail
