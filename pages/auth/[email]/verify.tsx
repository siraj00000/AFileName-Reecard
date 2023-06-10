import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { handleInsertAction } from "@/config/API_actions";

function VerifyPage({ query }: { query: any }) {
  const router = useRouter();
  const { email, token } = router.query;
  const verifyLogin = async () => {
    email && token
      ? handleInsertAction("/account/verify", {
          email,
          token,
        }).then(function (res: any) {
          Cookies.set("email", res.data.email);
          Cookies.set("apikey", res.data.apikey);
          router.push("/dashboard");
        })
      : null;
  };
  useEffect(() => {
    verifyLogin();
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
VerifyPage.getInitialProps = async (ctx: any) => {
  return { query: ctx.query };
};
export default VerifyPage;
