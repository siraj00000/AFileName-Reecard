import { handleFetchAction } from "@/config/API_actions";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

function FilePage({ query }: { query: any }) {
  const router = useRouter();
  const { fileId } = router.query;

  const handleDownload = async () => {
    await handleFetchAction(`/files/downloadurl?file=${fileId}`).then(
      (response: any) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = response.data.url;
        downloadLink.download = "";
        downloadLink.click();
      }
    );
  };
  useEffect(() => {
    handleDownload();
  }, []);
  return (
    <div
      className="
      flex
      justify-center
      items-center
      h-screen
    "
    >
      <CircularProgress size={"70px"} />
    </div>
  );
}
FilePage.getInitialProps = async (ctx: any) => {
  return { query: ctx.query };
};

export default FilePage;
