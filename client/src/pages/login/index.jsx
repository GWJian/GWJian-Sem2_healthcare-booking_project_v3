import { Input, Button } from "react-daisyui";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { login } from "../api/user";
import Swal from "sweetalert2";
import localforage from "localforage";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //===== check is user login start =====
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const getAuth = async () => {
      const token = await localforage.getItem("token");
      if (token) {
        setAuth(token);
      }
    };
    getAuth();
  }, []);
  //===== check is user login end =====

  //===== check role is doctor =====
  const [role, setRole] = useState(null);

  useEffect(() => {
    const getRole = async () => {
      const user = await localforage.getItem("user");
      if (user) {
        setRole(user.role);
      }
    };
    getRole();
  }, []);
  //===== check if role is doctor end =====

  const queryClient = useQueryClient();

  const onChangeHandler = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      if (!localStorage.getItem("token")) {
        //解释: 如果localStorage里面没有token, 就把token存进去
        localStorage.setItem("token", data.token); //解释: 如果localStorage里面有token, 就把token删掉
        localStorage.setItem("user", JSON.stringify(data.user));
        queryClient.invalidateQueries("token", data.token); //queryClient.invalidateQueries("token", data) 会触发useQuery里面的queryKey: ["token", data]重新执行
      }

      // window.location.href = "/"; // this will reload the page
      //======== if user is doctor, redirect to appoiment-management page start ========
      if (data.user.role === "doctor") {
        window.location.href = "/appoiment-management";
      } else {
        window.location.href = "/";
      }
      //======== if user is doctor, redirect to appoiment-management page end ========
    },
    onError: (error) => {
      Swal.fire("Failed to login", error.response.data.msg, "error");
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutate(user);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="sm:col-start-5 sm:col-span-4 col-span-10 col-start-2">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <Input
              onChange={onChangeHandler}
              className="w-full"
              type="text"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="mb-4">
            <Input
              onChange={onChangeHandler}
              className="w-full"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>

          <Button className="block w-full">Login</Button>

          <div className="row mt-5">
            <p className="text-gray-900 text-lg font-medium">
              Don't have an account yet?{" "}
              <a
                href="/register"
                className="text-red-500 hover:underline font-medium"
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
