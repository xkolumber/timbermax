import Button from "@mui/material/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="main_section  min-h-[500px] xl:min-h-screen justify-center items-center flex flex-col m-auto">
      <h2 className="text-center">Ľutujeme, zadaná stránka sa nenašla.</h2>

      <div className="flex flex-row gap-[16px] mt-[16px]">
        <Link href={"/"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00A165",
              textTransform: "capitalize",
              borderRadius: "8px",
            }}
          >
            Domov
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
