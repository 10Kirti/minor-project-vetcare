function LoginForm() {
  return (
    <>
      <div className="w-[300px] max-w-xs mx-auto py-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            
            
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder=""
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-custom_green text-white font-bold mx-auto py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
          
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;2024 Vetcare</p>
      </div>
    </>
  );
}
export default LoginForm;
