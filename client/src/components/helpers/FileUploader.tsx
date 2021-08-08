import React from 'react'

const FileUploader = () => {
  
  return (
    <div className="mb-3">
      <label htmlFor="formFileSm" className="form-label">Small file input example</label>
      <input className="form-control form-control-sm" id="formFileSm" type="file" />
    </div>
  )
}

export default FileUploader
