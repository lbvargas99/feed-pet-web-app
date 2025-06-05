import { useForm } from "react-hook-form";

function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="bg-teal-900 w-1/2 h-auto flex items-center justify-center">
            <h2 className="text-4xl">Feed<strong className="text-white">Pet</strong></h2>
        </div>
        <div className="w-1/2 h-screen">
          <form>
            
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
