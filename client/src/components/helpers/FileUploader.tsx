import { Upload, Button } from "antd";
import { ChangeEvent } from "react"
import { $axiosApiInstance } from "../../http";

const FileUploader = () => {

  // async function handleFilesUpload({target}: ChangeEvent<HTMLInputElement>) {
  //   const file = target.files && target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("myFile", file, file.name);

  //     const files = await $axiosApiInstance.post("/user/file", formData);
  //     console.log(files);
      
  //   }
  // }

  async function handleFilesUpload(x: any) {
    console.log(x);
    
    // if (info.file.status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (info.file.status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully`);
    // } else if (info.file.status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  }

  return (
    <Upload
      onChange={handleFilesUpload}
      
    >
      <Button>
        Загрузить фото
      </Button>
    </Upload>
  )
}

export default FileUploader
