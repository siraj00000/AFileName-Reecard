import React, { useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import { handleInsertAction } from "@/config/API_actions";
import ProgressBar from "./progressbar";

const FileUpload = ({
  file,
  onFinishUpload,
  onCancelRequest,
}: {
  file: any;
  onFinishUpload: any;
  onCancelRequest: any;
}) => {
  const [uploadingProgress, setUploadingProgress] = useState(0);
  const [request, setRequest] = useState<CancelTokenSource | null>(null);

  const handleCancelClick = () => {
    if (request) {
      request.cancel();
    }
  };

  const uploadRequest = async (
    file?: any,
    filename?: string,
    contentType?: string
  ) => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    setRequest(source);
    let fileId = "";
    try {
      const response: any = await handleInsertAction("files/upload", {
        filename,
        contentType,
      });
      fileId = response.data?.fileId;
      const config = {
        headers: {
          "Content-Type": contentType,
        },
        onUploadProgress: (progressEvent: any) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadingProgress(progress);
        },
        cancelToken: source.token,
      };
      await axios.put(response.data.url, file, config);
      onFinishUpload(response.data?.fileId);
    } catch (error) {
      if (axios.isCancel(error)) {
        onCancelRequest(fileId);
      } 
    }
  };

  useEffect(() => {
    uploadRequest(file, file?.name, file?.type);
  }, []);
  return (
    <>
      <ProgressBar
        progress={uploadingProgress}
        filename={file?.name}
        cancelRequest={handleCancelClick}
      />
    </>
  );
};

export default FileUpload;
