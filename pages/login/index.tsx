import { Form, Input, Button, message } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import classNames from "classnames";
import styles from "./Login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion"
import useAuth from "../../hooks/useAuth";
import authServices from "../../services/authServices";
import { useDispatch } from "react-redux"
import { updateUser } from "../../modules/authSlice";

const cx = classNames.bind(styles)

function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const auth = useAuth()

  const onFinish = (values: any) => {
    // router.push('/')
    authServices.loginUser({ userName: values.userName, password: values.password }).then((res: any) => {
      dispatch(
        updateUser({ userName: res.data.userName, role: res.data.role, token: res.data.accessToken })
      )
    }).then(res => {
      message.success('Login success!')
      router.push('/')
    })

  }


  return (
    <>
      <motion.div
        initial={{ width: 0, x: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: typeof window !== 'undefined' ? window.innerWidth : 0, y: typeof window !== 'undefined' ? window.innerHeight : 0, transition: { duration: 3000 } }}
        style={{ backgroundImage: `url(https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg)` }}
        className={styles.login}
      >
        <Form
          name="basic"
          className={styles['login__form']}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <h2 className={`${styles['login__title']} mb-3`}>Login</h2>
          <label className={`${styles['login__label']} ${styles['required']}`}>Username</label>
          <Form.Item
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className={styles['login__input']} placeholder="Enter your username" />
          </Form.Item>

          <label className={`${styles['login__label']} ${styles['required']}`}>Password</label>
          <Form.Item

            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className={styles['login__input']} placeholder="Enter your password" />
          </Form.Item>

          <div className="d-flex justify-content-between">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <span className="cursor-pointer">Forgot password ?</span>
          </div>

          <Form.Item>
            <button className={styles['login__btn']} type="submit">
              Login
            </button>
          </Form.Item>
          <span className={`${styles['login__text']} d-flex justify-content-center`}>
            Do not have an account?
            <Link href={'/register'} >

              <a className={`ms-1 d-inline-block cursor-pointer ${styles['login__text-register']}`}>
                Register
              </a>
            </Link>
          </span>
        </Form>
      </motion.div>
    </>

  );
}

export default Login;