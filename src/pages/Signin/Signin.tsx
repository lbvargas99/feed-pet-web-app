import { useForm } from "react-hook-form";

/*
  fazer o esqueci a senha
  e o cadastrar
*/

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="bg-teal-900 w-1/2 h-auto flex items-center justify-center">
          <h2 className="text-4xl">
            Feed<strong className="text-white">Pet</strong>
          </h2>
        </div>
        <div className="w-1/2 h-screen flex items-center justify-center">
          <div className="w-1/2 flex items-center justify-center">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your e-mail"
                  className="border border-gray-300 rounded-md w-full px-5 py-2 mt-2"
                  {...register("email", { required: "E-mail is required" })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors?.email?.message && "E-mail is required"}
                  </span>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your e-mail"
                  className="border border-gray-300 rounded-md w-full px-5 py-2 mt-2"
                  {...register("password", { required: "E-mail is required" })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors?.password?.message && "Password is required"}
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-teal-900 text-white rounded-md w-full px-5 py-2 mt-5 hover:bg-teal-800 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
