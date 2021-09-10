import { ChangeEvent } from "react"
import { $axiosApiInstance } from "../../http";

const FileUploader = () => {

  async function handleFilesUpload({target}: ChangeEvent<HTMLInputElement>) {
    const file = target.files && target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("myFile", file, file.name);

      const files = await $axiosApiInstance.post("/user/file", formData);
      console.log(files);
      
    }
  }

  return (
    <div className="mb-3">
      <label htmlFor="formFileSm" className="form-label">Small file input example</label>
      <input
        className="form-control form-control-sm"
        id="formFileSm"
        type="file"
        accept=".jpeg, .jpg, .png, .txt"
        onChange={handleFilesUpload}
      />
    </div>
  )
}

export default FileUploader
