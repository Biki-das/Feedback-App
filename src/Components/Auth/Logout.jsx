import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Supabase/Supabaseconfig";

function Logout() {
  const navigate = useNavigate();
  async function logOut() {
    const { error } = await supabase.auth.signOut();
    navigate("/signin");
  }

  return (
    <button
      onClick={logOut}
      className="absolute top-0 w-[100px] right-9 md:top-[35%] md:left-8 bg-white h-[40px] text-red-600 md:w-[50%] mt-2 rounded-lg text-sm flex justify-start px-2 items-center gap-x-2 hover:text-purple-600 transition-colors duration-[0.3s]"
    >
      <HiOutlineLogout size={18} />
      Sign Out
    </button>
  );
}

export default Logout;
