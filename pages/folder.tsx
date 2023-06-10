import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import {
  handleDeleteAction,
  handleFetchAction,
  handleInsertAction,
} from "@/config/API_actions";
import { useTheme } from "next-themes";
import { Button, Menu, MenuItem } from "@mui/material";
// ICONS
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DrawerComp from "@/components/responsive_drawer";
import Cookies from "js-cookie";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import FileList from "@/components/file_list";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { toast } from "react-toastify";
import FileUpload from "@/components/file_upload";
import DarkLightIcon from "@/components/dark_light_icon";

interface FileObject {
  title: string;
  contentType: string;
  dateUploaded: any;
  fileId: any;
}

export default function Folder({ query }: { query: any }) {
  const router = useRouter();
  const { id, name } = router.query;
  const [files, setFiles] = useState<Array<any>>([]);
  const [filesDetails, setFilesDetails] = useState<Array<object>>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [folders, setFolders] = useState<Array<any>>([]);
  const [newFolderName, setNewFolderName] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [uploadingFiles, setUploadingFiles] = useState<Array<any>>([]);
  const [email, setEmail] = useState<string>();
  const [uploadingFilesSize, setUploadingFilesSize] = useState(0);

  const open = Boolean(anchorEl);

  useEffect(() => {
    !Cookies.get("apikey")
      ? router.push("/")
      : (getFolders(), setEmail(Cookies.get("email")?.split("@")[0]));
  }, []);

  const uploadInFolder = async (fileId?: any) => {
    handleInsertAction(`folders/${id}/files`, {
      fileId,
    }).then(() => {
      getSingleFileDetails(fileId);
    });
  };

  const handleFileChangeFunction = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    if (file?.size == 0) {
      toast.error("cannot upload empty file", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else {
      if (file?.size / 1073741824 > 5) {
        toast.error("Connot upload file larger than 5 GB", {
          position: "top-center",
          autoClose: 2000,
        });
        return;
      }
    }
    setUploadingFilesSize(uploadingFilesSize + parseFloat(file?.size));
    uploadingFiles.push(file);
    setUploadingFiles([...uploadingFiles]);
  };

  const handleFolderChangeFunction = (e: any) => {
    setNewFolderName(e.target.value);
  };

  const createFolder = async (folderName: string) => {
    handleInsertAction("/folders/createfolder", {
      name: folderName,
    }).then(() => {
      getFolders();
    });
  };

  const getFiles = async (_folders: any) => {
    let folderIndex: number;
    _folders?.map((v: any, i: any) => {
      if (v._id == id) {
        folderIndex = i;
        setFiles(_folders[folderIndex]?.fileIds);
        getFilesDetails(_folders[folderIndex]?.fileIds);
        return;
      }
    });
  };

  const getFilesDetails = async (
    _files?: any[],
    numItemsToLoad: number = 5
  ) => {
    let tempArr: any[] = [];
    let numItemsLoaded = 0;

    while (_files?.length && numItemsLoaded < _files.length) {
      const itemsToLoad = _files.slice(
        numItemsLoaded,
        numItemsLoaded + numItemsToLoad
      );

      await Promise.all(
        itemsToLoad.map(async (v: string, i: any) => {
          const res: any = await handleFetchAction(`files/${v}`);
          const data = res.data;
          tempArr.push(data);
        })
      );

      setFilesDetails([...tempArr]);
      numItemsLoaded += numItemsToLoad;

      // Wait for scroll event before loading the next set of items
      await new Promise((resolve) => {
        window.addEventListener("scroll", resolve, { once: true });
      });
    }
  };

  const getSingleFileDetails = async (fileId?: any) => {
    await handleFetchAction(`files/${fileId}`).then(async () => {
      await handleFetchAction(`files/${fileId}`).then((res: any) => {
        const data = res.data;
        filesDetails.push(data);
        setFilesDetails([...filesDetails]);
      });
    });
  };

  const getFolders = async () => {
    handleFetchAction("/account/folders").then((response: any) => {
      setFolders(response.data.folders);
      getFiles(response.data.folders);
    });
  };
  const handleDowunloadUrl = async (_fileId: any) => {
    await handleFetchAction(`/files/download?file=${_fileId}`).then(
      (response: any) => {}
    );
  };

  function formatBytes(bytes: number): string {
    if (bytes < 1024) {
      return bytes + "B";
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(1) + "KB";
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(1) + "MB";
    } else {
      return (bytes / 1073741824).toFixed(1) + "GB";
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div className="w-[240px] sm:w-[200px] xs:w-[0px]">
        <DrawerComp
          folders={folders}
          handleFileChangeFunction={handleFileChangeFunction}
          createFolder={() => createFolder(newFolderName)}
          handleFolderChangeFunction={handleFolderChangeFunction}
          allFiles={files}
        />
      </div>
      <main
        className="
        w-[calc(100%-240px)]
        sm:w-[calc(100%-200px)]
        xs:w-full
        pl-[3.5%] 
        pr-[2%]
        mt-[5%]
        sm:mt-[25px]
      "
      >
        <section
          className="flex 
          justify-between
          items-center 
          pr-[10%]
          md:pr-0
          sm:pr-0
            "
        >
          <input
            type="text"
            className="
            xs:ml-10
            w-[60%]
            sm:w-full
            mx-auto
            border
            border-black
            py-0 
            dark:border-white
            px-4
            h-8
            "
            placeholder="search"
            onChange={async (e) => {
              setSearchQuery(e.target.value);
              await handleFetchAction(
                `/account/search?q=${e.target.value}`
              ).then((response: any) => {
                getFilesDetails(response.data.fileIds);
              });
            }}
          />
          <div className="pl-4 md:pl-2 sm:pl-1 flex gap-4 md:gap-1 sm:gap-0 items-center">
            <div>
              <p className="text-[#2E3271]  dark:text-[#5073d2] text-base sm:text-xs font-semibold">
                {email}
              </p>
              <p className="font-manrope text-[#7c8db5b8] text-xs sm:text-[10px]">
                Premium
              </p>
            </div>
            <p>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(event: any) => {
                  setAnchorEl(event.currentTarget);
                }}
                className="w-fit min-w-0"
              >
                <KeyboardArrowDownIcon className="text-lg my-auto h-fit dark:text-white" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  className:
                    "dark:bg-[#252525]  dark:text-white text-[#545454] text-base font-medium",
                }}
              >
                <MenuItem>Logout</MenuItem>
              </Menu>
            </p>
          </div>
          <DarkLightIcon />
        </section>

        <section className=" pl-[2%]">
          <h1
            className="
            font-bold
            text-[32px]
            text-[#2E2E2E]
            dark:text-[#ffffff]
            mb-4
            mt-10
            ml-[-10px]
          "
          >
            <button onClick={() => router.push("/dashboard")}>
              <ArrowBackIosIcon className="mr-[20px]/ text-lg" />
            </button>
            <FolderCopyIcon className="ml-[5px] mr-[15px] text-3xl dark:text-[#ffffff]" />
            {name}
          </h1>
          {filesDetails?.length == 0 ? (
            <p>No files yet</p>
          ) : (
            filesDetails?.map((v, i) => {
              const fileObj = v as FileObject;
              return <FileList key={i} fileObj={fileObj} />;
            })
          )}
        </section>
        {uploadingFiles?.length > 0 ? (
          <main className="w-[295px] px-3 py-2 bottom-2 right-4 fixed max-h-[308px] overflow-scroll scrollbar-thin bg-white dark:bg-[#3C4048] border-2 border-gray-100 dark:border-gray-900 rounded-md ">
            <h1
              className="
                    text-[16px]
                    font-bold
                    text-[#1A1A1A]
                    dark:text-[#ffffff]
                    text-center
                  "
            >
              {`Uploading ${uploadingFiles?.length} Files (${formatBytes(
                uploadingFilesSize
              )})...`}
            </h1>

            {uploadingFiles.map((file, index) => (
              <FileUpload
                key={index}
                file={file}
                onFinishUpload={(fileId: string) => {
                  setUploadingFiles((prevState) =>
                    prevState.filter((_, i) => i !== index)
                  );
                  setUploadingFilesSize(
                    (prevState) => prevState - parseFloat(file?.size)
                  );
                  uploadInFolder(fileId);
                }}
                onCancelRequest={(fileId?: string) => {
                  handleDeleteAction(`files/delete?fileId=${fileId}`);
                  setUploadingFiles((prevState) =>
                    // prevState.filter((_, i) => i !== index)
                    prevState.splice(index, 1)
                  );

                  setUploadingFilesSize(
                    (prevState) => prevState - parseFloat(file?.size)
                  );
                  toast.error("File upload cancelled", {
                    position: "top-center",
                  });
                }}
              />
            ))}
          </main>
        ) : null}
      </main>
    </Box>
  );
}
Folder.getInitialProps = async (ctx: any) => {
  return { query: ctx.query };
};
