import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/routes";

const Header = () => {

  const navigate = useNavigate();

  const onClickHomeHandler = () => {
    console.log("hola");
    navigate(ROUTES.home);
  };

  return (
    <div className="inset-x-0 top-0 p-3 bg-gray-700 w-full  ">
      <div className="flex h-12 justify-between">
        <button onClick={onClickHomeHandler}>Album records</button>
        <button className="flex space-x-1" onClick={onClickHomeHandler}>
          <svg className="h-8 w-8 text-neutral-100 mt-1.5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
        </button>
      </div>
    </div>
  )
}

export default Header